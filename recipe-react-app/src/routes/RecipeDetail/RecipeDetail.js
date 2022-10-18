import React from "react";
import { Link } from "react-router-dom";
import { call } from "../../service/ApiService";
import './RecipeDetail.css';

class RecipeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe:''
        }
    }

    componentDidMount() {
        /*
        const {location, history} = this.props;
        if(location.state === undefined) {
            history.push("/recipe");
        }
        if(location.state) {
            this.setState({recipe: location.state.recipe});
        }*/
    }

    render() {
        var recipeDetail = this.state.recipe !== null && (
            <div>
            {/* Header */}
            <header className="w3-container"> 
                <h1><b>양송이 스프</b></h1>
            </header>
            {/* Contents */}
            <div id="content-box">
                <div id="addrecipe-container" className="w3-card-4 w3-white">
                    <img src="/images/양송이스프.jpg" style={{width:"300px", float:"left", marginRight:"20px"}} />
                    <div>
                        <label style={{fontSize:"16px"}}><b>준비 재료</b></label>
                        <p>
                            양송이버섯, 통마늘, 양파, 버터, 올리브유, 밀가루, 우유, 체다치즈, 소금, 후추
                        </p>
                        <label style={{fontSize:"16px"}}><b>조리 방법</b></label>
                        <p>
                        1. 양송이 기둥 밑부분을 살짝 도려내고 잘게 썬다.<br/>
                        2. 통마늘을 으깨고 양파를 다진다.<br/>
                        3. 냄비에 올리브유를 두르고 양파를 볶는다.<br/>
                        4. 양파가 투명해지면 버터 1조각을 넣고 다져둔 양송이를 넣는다.<br/>
                        5. 우유 500ml에 밀가루 1숟갈, 버터를 넣고 잘 섞어 전자레인지에 넣는다.<br/>
                        6. 만들어진 루를 양송이 냄비에 넣고 중불로 끓인다.<br/>
                        7. 보글보글 끓으면 체다치즈 1장을 넣어 녹인다.<br/>
                        8. 마지막으로 소금과 후추로 간을 한다.<br/>
                        </p>
                    </div>
                </div>
            </div>
            </div>
        )

        return(
            <div id="addrecipe" className="w3-display-container w3-light-grey">
                <div className="w3-content w3-display-middle">
                    {recipeDetail}
                    {/* Button */}
                    <div id="btn-group">
                        <Link to="/recipe">
                            <button id="back-btn" className="w3-button w3-padding-large w3-white w3-border">
                                <b>뒤로가기</b>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipeDetail