import React from 'react';
import './Fridge.css';

class Fridge extends React.Component {
    constructor(props) {
        super (props);
    }

    render () {
        return(
            <body id="fridge" className="w3-light-grey">
                <div className="w3-content">
                    {/* Header */}
                    <header className="w3-container w3-topleft w3-padding-32"> 
                    <h1><b>{}님의 냉장고</b></h1>
                    <span id="logout" className="w3-tag">로그아웃</span>
                    </header>

                    {/* Contents */}
                    <div id="content-box" class="w3-col">
                        {/* Fridge */}
                        <div id="fridge-container" class="w3-card-4 w3-margin w3-white">
                            {/* Ingredients SearchBar */}
                            <div id="ingredients-searchBar" class="w3-container">
                                <form class="form-inline" action="/action_page.php">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="식재료  검색"/>
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">🔍</span>
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
                            <div id="ingredients-list" class="w3-container">
                                <div class="list-group pre-scrollable">
                                    <a href="#" class="list-group-item list-group-item-action">
                                        <input type="checkbox" class="form-check-input"/>
                                        First item
                                        <button type="button" class="btn btn-danger w3-right"><b>―</b></button>
                                    </a>
                                </div>
                            </div>
                            {/* Ingredients Btn */}
                            <div id="ingredients-btn" class="w3-container">
                                <div id="delete-btn" class="w3-row">
                                    <div class="w3-col m8 s12">
                                        <p>
                                            <button class="w3-button w3-padding-small w3-white w3-border">
                                                <b>전체삭제</b>
                                            </button>
                                        </p>
                                    </div>
                                    <div class="w3-col m4 w3-hide-small">
                                        <p>
                                            <span class="w3-padding-small w3-right">
                                                <span class="w3-tag">0</span><b>  선택삭제</b>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}

export default Fridge;