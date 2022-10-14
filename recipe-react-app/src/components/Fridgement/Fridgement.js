import React from 'react';
import './Fridgement.css';

class Fridgement extends React.Component {

    render() {
        return (
            <>
            {/* Fridge */}
            <div id="fridge-container" className=" w3-col w3-card-4 w3-white">
                {/* Ingredients SearchBar */}
                <div id="ingredients-searchBar" className="w3-container">
                    <form className="form-inline" action="/action_page.php">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="식재료  검색"/>
                            <div className="input-group-prepend">
                                <span className="input-group-text">🔍</span>
                            </div>
                        </div>
                    </form>
                    <select name="i-category" id="i-category">
                        <option value="">--선택안함--</option>
                        <option value="채소">채소</option>
                        <option value="과일">과일</option>
                        <option value="유제품">유제품</option>
                        <option value="유제품">육류</option>
                        <option value="기타">기타</option>
                    </select>
                </div>
                {/* Ingredients List */}
                <div id="ingredients-list" className="w3-container">
                    <div className="list-group pre-scrollable">
                        <a href="#" className="list-group-item list-group-item-action">
                            <input type="checkbox" className="form-check-input"/>
                            First item
                            <button type="button" className="btn btn-danger w3-right"><b>―</b></button>
                        </a>
                    </div>
                </div>
                {/* Ingredients Btn */}
                <div id="ingredients-btn" className="w3-container">
                    <div id="delete-btn" className="w3-row">
                        <div class="w3-col m8 s12">
                            <p>
                                <button className="w3-button w3-padding-small w3-white w3-border">
                                    <b>전체삭제</b>
                                </button>
                            </p>
                        </div>
                        <div className="w3-col m4 w3-hide-small">
                            <p>
                                <span className="w3-padding-small w3-right">
                                    <span className="w3-tag">0</span><b>  선택삭제</b>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Fridgement;