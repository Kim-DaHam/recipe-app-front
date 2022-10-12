import React from "react";
import './Signup.css';
import {signup} from "../../service/ApiService";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        //console.log(input_email.childNodes);

        if(name.length == 0){
            console.log('이름 미입력!');
            input_name.childNodes[0].focus();
            form.classList.add('was-validated');
            return;
        }
        if(email.length == 0){
            console.log('이메일 미입력!');
            input_email.childNodes[0].focus();
            form.classList.add('was-validated');
            return;
        }
        if(pwd.length == 0){
            console.log('비밀번호 미입력!');
            input_pwd.childNodes[0].focus();
            form.classList.add('was-validated');
            return;
        }
        if(pwd != pwdh){
            console.log('비밀번호 확인 불일치!');
            input_pwdh.childNodes[0].focus();
            form.classList.add('was-validated');
            return;
        }

        signup({mname: name, memail: email, mpw: pwd})
        .then((response) => {
            window.location.href="/login";
        })
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
                                    maxLength='25'
                                    id="uname" placeholder="이름을 입력하세요." 
                                    name="uname" required/>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">이름을 입력하세요.</div>
                                </div>
                                <label>이메일</label>
                                <div id="email-input" className="form-row">
                                    <input type="text" className="form-control" 
                                    id="uemail" placeholder="이메일을 입력하세요." 
                                    name="uemail" required/>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">이메일을 입력하세요.</div>
                                    <button id="dupl-btn" type="button" class="btn btn-danger">중복확인</button>
                                </div>
                                <label>비밀번호</label>
                                <div id="pwd-input" className="form-row">
                                    <input type="text" className="form-control" 
                                    maxLength='15'
                                    id="upwd" placeholder="비밀번호를 입력하세요." 
                                    name="upwd" required/>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">비밀번호를 입력하세요.</div>
                                </div>
                                <label>비밀번호 확인</label>
                                <div id="pwdh-input" className="form-row">
                                    <input type="text" className="form-control" 
                                    maxLength='15'
                                    id="upwdh" placeholder="비밀번호를 입력하세요." 
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