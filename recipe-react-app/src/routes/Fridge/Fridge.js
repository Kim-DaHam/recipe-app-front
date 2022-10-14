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
                        <div id="fridge-container" class=" w3-col w3-card-4 w3-white">
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
                        {/* Ingredients Add Form */}
                        <div id="ingredientAdd-container" class="w3-col l4">
                            <div class="w3-card w3-margin w3-margin-top">
                                <div class="w3-container w3-white">
                                    <h4><b>식재료 추가하기🥬</b></h4><br/>
                                    <form onSubmit={'#'}>
                                        <label>이름*(필수입력):</label>
                                        <div id="name-input" className="form-row">
                                            <input type="text" class="form-control" id="usr" maxLength='25'/>
                                        </div>
                                        <label>종류 :</label>
                                        <div id="category-input" className="form-row">
                                            <select name="i-category" id="i-category">
                                                <option value="">--선택안함--</option>
                                                <option value="채소">채소</option>
                                                <option value="과일">과일</option>
                                                <option value="유제품">유제품</option>
                                                <option value="유제품">육류</option>
                                                <option value="기타">기타</option>
                                            </select><br/>
                                        </div>
                                        <label>유통기한 :</label>
                                        <div id="exdate-input" className="form-row">
                                            <input type="date" class="form-control" id="usr"/>
                                        </div>
                                        <button type="button" class="btn btn-info">추가하기</button>
                                    </form>
                                </div>
                            </div><hr/>
                        </div><br/>
                        {/* Go Recipe Btn */}
                        <div id="recipeOption-container" class="w3-col l4">
                            <label><b>언제 먹을 예정인가요?🍽️ (선택사항)</b></label><br/>
                            <div id="radio-box" class="w3-card w3-margin">
                                <div class="w3-container">
                                <div id="radio-group" class="form-check">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="breakfast"/>아침
                                    </label>
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="lunch"/>점심
                                    </label>
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="dinner"/>저녁
                                    </label>
                                </div>
                                </div>
                            </div>
                            <button type="button" class="btn"><b>레시피 보러가기 》</b></button>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}

export default Fridge;