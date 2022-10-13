import React from "react";
import './Signup.css';
import {call, signup} from "../../service/ApiService";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email_check: false
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        let form = document.getElementById('signup-form');
        let input_name = document.getElementById('name-input');
        let input_email = document.getElementById('email-input');
        let input_pwd = document.getElementById("pwd-input");
        let input_pwdh = document.getElementById("pwdh-input");

        const data = new FormData(event.target);
        const name = data.get('uname');
        const email = data.get('uemail');
        const pwd = data.get('upwd');
        const pwdh = data.get('upwdh');

        console.log('회원가입 버튼 클릭!');

        if(name.length === 0){
            console.log('-이름 미입력!');
            input_name.childNodes[0].focus();
            input_name.childNodes[2].innerHTML = '이름을 입력하세요.';
            form.classList.add('was-validated');
            return;
        }
        if(email.length === 0){
            console.log('-이메일 미입력!');
            input_email.childNodes[0].focus();
            input_email.childNodes[2].innerHTML = '이메일을 입력하세요.'
            form.classList.add('was-validated');
            return;
        }
        if(pwd.length === 0){
            console.log('-비밀번호 미입력!');
            input_pwd.childNodes[0].focus();
            input_pwd.childNodes[2].innerHTML = '비밀번호를 입력하세요.';
            form.classList.add('was-validated');
            return;
        }
        if(pwdh !== pwd){
            console.log('-비밀번호 확인 불일치!');
            input_pwdh.childNodes[0].focus();
            form.classList.add('was-validated');
            return;
        }
        if(!(this.state.email_check)){
            console.log('-이메일 중복체크 미확인!')
            input_email.classList.remove('is-valid');
            input_email.childNodes[0].classList.add('is-invalid');
            input_email.childNodes[2].innerHTML='이메일 중복체크를 하세요.';
            return;
        }

        signup({mname: name, memail: email, mpw: pwd})
        .then((response) => {
            window.location.href="/login";
        })
    }

    onChangeEvent = (e) => {
        let input_name = document.getElementById('name-input');
        let input_email = document.getElementById('email-input');
        let input_pwd = document.getElementById("pwd-input");
        let input_pwdh = document.getElementById("pwdh-input");
        
        if(e.target.id === 'uemail' && this.state.email_check===true){
            e.target.classList.remove('is-valid');
            e.target.classList.add('is-invalid');
            input_email.childNodes[1].innerHTML = '';
            this.setState({email_check: false});
        }

        if(e.target.id === 'uname' || e.target.id === 'upwd'){
            if(e.target.value.length > 20){
                console.log('글자 초과!');
                console.log(e.target);
                e.target.classList.add('is-invalid');
                console.log(e.target);
                if(e.target.id === 'uname')
                    input_name.childNodes[2].innerHTML = '1자 이상~ 20자 미만으로 작성하세요.';
                if(e.target.id === 'upwd')
                    input_pwd.childNodes[2].innerHTML = '1자 이상~ 20자 미만으로 작성하세요.';
            }
            else{
                console.log('글자 미초과!');
                e.target.classList.replace('is-invalid', 'is-valid');
                e.target.classList.add('is-valid');
            }
        }

        if (e.target.value.length === 0){
            e.target.classList.replace('is-valid', 'is-invalid');
            switch (e.target.id){
                case 'uname':
                    input_name.childNodes[2].innerHTML = '이름을 입력하세요.';
                    break;
                case 'uemail':
                    input_email.childNodes[2].innerHTML = '이메일을 입력하세요.';
                    break;
                case 'upwd':
                    input_pwd.childNodes[2].innerHTML = '비밀번호를 입력하세요.';
                    break;
            }
        }

        if(e.target.id === 'uemail' && e.target.value.length > 0 && !(e.target.value.includes('@'))){
            e.target.classList.add('is-invalid');
            input_email.childNodes[2].innerHTML = '이메일 형식에 맞지 않습니다.'
        }
        else if(e.target.id === 'uemail' && (e.target.value.includes('@'))) {
            e.target.classList.replace('is-invalid', 'is-valid');
        }

        if(input_pwd.childNodes[0].value !== input_pwdh.childNodes[0].value){
            input_pwdh.childNodes[0].classList.add('is-invalid');
        }
        else {
            input_pwdh.childNodes[0].classList.replace('is-invalid', 'is-valid');
        }
    }

    checkEmailDuplicate = (event) => {
        console.log('이메일 중복확인!');
        let email_form = document.getElementById('email-input');
        let email = document.getElementById('uemail');
        if(email.value.length === 0){
            console.log('-이메일 미입력!');
            email_form.childNodes[0].focus();
            email_form.childNodes[2].innerHTML = '이메일을 입력하세요.'
            email.classList.add('is-invalid');
        }
        else if(this.state.email_check===false){
            call("/auth/emailcheck", "POST", email.value).then((response)=>{
                if(!response){
                    console.log('-사용 가능!');
                    email_form.childNodes[1].innerHTML = '사용 가능한 이메일 입니다.';
                    email_form.childNodes[2].innerHTML = '';
                    email.classList.remove('is-invalid');
                    email.classList.add('is-valid');
                    this.setState({email_check: true});
                }
                else {
                    console.log('-사용 불가능!');
                    email_form.childNodes[0].focus();
                    email_form.childNodes[2].innerHTML = '이미 존재하는 이메일 입니다.';
                    email.classList.add('is-invalid');
                    this.setState({email_check: false});
                }
            })
        }
    }
    
    render() {
        return(
            <div id="signup" className="w3-display-container">
                <div id="signup-box" className="w3-container w3-center w3-display-middle">
                    <div id="card" className="w3-card-4 w3-margin w3-white">
                        <p id="title" className="w3-center w3-padding-32">회원가입</p>
                        <div className="w3-center">
                            <form id="signup-form" onSubmit={this.handleSubmit} action="/action_page.php" className="needs-validation" noValidate>
                                <label>이름</label>
                                <div id="name-input" className="form-row">
                                    <input type="text" className="form-control" 
                                    id="uname" placeholder="이름을 입력하세요." 
                                    onChange={this.onChangeEvent}
                                    name="uname" required/>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">이름을 입력하세요.</div>
                                </div>
                                <label>이메일</label>
                                <div id="email-input" className="form-row">
                                    <input type="text" className="form-control" 
                                    id="uemail" placeholder="이메일을 입력하세요." 
                                    onChange={this.onChangeEvent}
                                    name="uemail" required/>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">이메일을 입력하세요.</div>
                                    <button onClick={this.checkEmailDuplicate} id="dupl-btn" type="button" class="btn btn-danger">중복확인</button>
                                </div>
                                <label>비밀번호</label>
                                <div id="pwd-input" className="form-row">
                                    <input type="text" className="form-control" 
                                    id="upwd" placeholder="비밀번호를 입력하세요." 
                                    onChange={this.onChangeEvent}
                                    name="upwd" required/>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">비밀번호를 입력하세요.</div>
                                </div>
                                <label>비밀번호 확인</label>
                                <div id="pwdh-input" className="form-row">
                                    <input type="text" className="form-control" 
                                    maxLength='15'
                                    id="upwdh" placeholder="비밀번호를 입력하세요." 
                                    onChange={this.onChangeEvent}
                                    name="upwdh" required/>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">비밀번호가 일치하지 않습니다.</div>
                                </div>
                                <div className="w3-center w3-padding-32">
                                    <button id="submit-btn" type="submit" className="btn btn-secondary">회원가입</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;