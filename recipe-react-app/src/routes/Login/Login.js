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
        const password = data.get("upw");

        signin({email: email, password: password});
    }
    
    render() {
        return(
            <div id="login" className="w3-display-container">
                <div id="login-form" className="w3-container w3-center w3-display-middle">
                    <div id="card" className="w3-card-4 w3-margin w3-white">
                        <p id="title" className="w3-center w3-padding-32">로그인</p>
                        <div className="w3-center">
                            <form onSubmit={this.handleSubmit} action="/action_page.php" className="needs-validation" novalidate>
                                <div class="form-row">
                                    <label>이메일</label>
                                    <input type="text" className="form-control" 
                                    id="uemail" placeholder="이메일을 입력하세요." 
                                    name="uemail" required/>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">이메일 형식에 맞지 않습니다.</div>
                                </div>
                                <div className="form-row">
                                    <label>비밀번호</label>
                                    <input type="text" className="form-control" 
                                    id="upw" placeholder="비밀번호를 입력하세요." 
                                    name="upw" optional/>
                                </div>
                            </form>
                        </div>
                        <div className="w3-center w3-padding-32">
                            <button type="submit" className="btn btn-secondary">로그인</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;