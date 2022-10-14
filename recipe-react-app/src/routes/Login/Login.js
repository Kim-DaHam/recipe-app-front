import React from "react";
import './Login.css';
import {signin} from "../../service/ApiService";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const email = data.get("uemail");
        const pwd = data.get("upwd");
        console.log(pwd);
        const input_email = document.getElementById("email-input");
        const input_pwd = document.getElementById("pwd-input");

        console.log('로그인 버튼 클릭!');

        if(!(signin({memail: email, mpw: pwd}))){
            console.log('-로그인 실패!');
            input_email.childNodes[1].classList.add("is-invalid");
            input_pwd.childNodes[1].classList.add("is-invalid");
        }
    }
    
    render() {
        return(
            <div id="login" className="w3-display-container">
                <div id="login-form" className="w3-container w3-center w3-display-middle">
                    <div id="card" className="w3-card-4 w3-margin w3-white">
                        <p id="title" className="w3-center w3-padding-32">로그인</p>
                        <div className="w3-center">
                            <form onSubmit={this.handleSubmit} action="/action_page.php" className="needs-validation" noValidate>
                                <div id="email-input" className="form-row">
                                    <label>이메일</label>
                                    <input type="text" className="form-control" 
                                    id="uemail" placeholder="이메일을 입력하세요." 
                                    name="uemail" required/>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">이메일 또는 비밀번호가 일치하지 않습니다.</div>
                                </div>
                                <div id="pwd-input" className="form-row">
                                    <label>비밀번호</label>
                                    <input type="text" className="form-control" 
                                    id="upwd" placeholder="비밀번호를 입력하세요." 
                                    name="upwd" required/>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">이메일 또는 비밀번호가 일치하지 않습니다.</div>
                                </div>
                                <div className="w3-center w3-padding-32">
                                    <button type="submit" className="btn btn-secondary">로그인</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;