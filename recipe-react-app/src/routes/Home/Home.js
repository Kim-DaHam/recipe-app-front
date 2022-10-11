import React from 'react';
import './Home.css';

class Home extends React.Component {
    render(){
        return(
            <body className='w3-display-container w3-animate-opacity w3-text-white'>
                <img className="bgimg" src="/images/home.jpg"/>
                <div className="w3-display-topleft w3-padding-large w3-xlarge">
                <h4><b>[SW전문인재양성사업] 개별프로젝트</b></h4>
                </div>
                <div className="w3-display-middle">
                    <h1 className="w3-jumbo w3-animate-top">냉장고를 부탁해!</h1>
                    <hr className="w3-border-white"/>
                    <p className="w3-large w3-center"><h4>🍴자취생 레시피 앱🍳</h4></p>
                    <div className="user-btn">
                        <button type="button" className="btn btn-info" href="/login">로그인 →</button>
                        <button type="button" className="btn btn-secondary" href="/signup">회원가입 →</button>
                    </div>
                </div>
                <div className="w3-display-bottomleft w3-padding-large">
                    <h5>소속: 금오공과대학교 컴퓨터공학과<br/>
                    학번: 20190117<br/>
                    이름: 김다함</h5>
                </div>
                            </body>
        );
    }
}

export default Home;