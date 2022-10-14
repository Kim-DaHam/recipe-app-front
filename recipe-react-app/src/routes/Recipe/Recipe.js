import React from "react";
import { Link } from "react-router-dom";
import './Recipe.css';

class Recipe extends React.Component {

    render(){
        return(
            <div id="recipe" className="w3-display-container w3-light-grey">
                <div className="w3-content w3-display-middle">
                    {/* Header */}
                    <header className="w3-container"> 
                        <h1><b>추천 레시피👩‍🍳</b></h1>
                    </header>
                    {/* Contents */}
                    <div id="content-box">
                        <div id="recipe-container" className="w3-card-4 w3-white">
                            {/* Recipe List */}
                            <div id="recipe-list" className="w3-container">
                                <div className="list-group">
                                    <a href="#" className="list-group-item list-group-item-action">
                                        <span>First item</span>
                                        <img src="#" />
                                    </a>
                                </div>
                            </div>
                            <div id="recipe-list" className="w3-container w3-display-bottommiddle">
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="#">이전</a></li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">다음</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Button */}
                    <div id="btn-group">
                        <Link to="/fridge">
                            <button id="back-btn" className="w3-button w3-padding-large w3-white w3-border">
                                <b>뒤로가기</b>
                            </button>
                        </Link>
                        <Link to="/addrecipe">
                            <button id="recipe-btn" type="button" class="btn btn-info">
                                <b>레시피 등록</b>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recipe;