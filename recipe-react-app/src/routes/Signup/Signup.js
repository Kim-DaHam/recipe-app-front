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
        let input_uname = document.getElementById('uname');
        let input_uemail = document.getElementById('uemail');
        let input_upw = document.getElementById("upw");
        let input_upwh = document.getElementById("upwh");

        const data = new FormData(event.target);
        const name = data.get('uname');
        const email = data.get('uemail');
        const pw = data.get('upw');
        const pwh = data.get('upwh');

        console.log('회원가입 버튼 클릭!');
        //console.log(name.length);

        if(name.length == 0){
            console.log('이름 미입력!');
            input_uname.autofocus = true;
            form.classList.add('was-validated');
        }
        if(name.length == 0){
            console.log('이메일 미입력!');
            input_uemail.autofocus = true;
            form.classList.add('was-validated');
        }
        if(name.length == 0){
            console.log('비밀번호 미입력!');
            input_upw.autofocus = true;
            form.classList.add('was-validated');
        }
        if(pw != pwh){
            console.log('비밀번호 확인 불일치!');
            input_upwh.autofocus = true;
            form.classList.add('was-validated');
        }

        signup({mname: name, memail: email, mpw: pw})
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
                                <div className="form-row">
                                    <label>이름</label>
                                    <input type="text" className="form-control" 
                                    id="uname" placeholder="이름을 입력하세요." 
                                    name="uname" required/>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">-</div>
                                </div>
                                <div className="form-row">
                                    <label>이메일</label>
                                    <input type="text" className="form-control" 
                                    id="uemail" placeholder="이메일을 입력하세요." 
                                    name="uemail" required/>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">-</div>
                                </div>
                                <div className="form-row">
                                    <label>비밀번호</label>
                                    <input type="text" className="form-control" 
                                    id="upw" placeholder="비밀번호를 입력하세요." 
                                    name="upw" required/>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">-</div>
                                </div>
                                <div className="form-row">
                                    <label>비밀번호 확인</label>
                                    <input type="text" className="form-control" 
                                    id="upwh" placeholder="비밀번호를 입력하세요." 
                                    name="upwh" optional/>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">비밀번호가 일치하지 않습니다.</div>
                                </div>
                                <div className="w3-center w3-padding-32">
                                    <button type="submit" className="btn btn-secondary">회원가입</button>
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