import React from 'react';
import { Link } from "react-router-dom";

import './AddFridge.css';

class AddFridge extends React.Component {

    render() {
        return (
            <>
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
                <Link to="/recipe">
                    <button type="button" class="btn"><b>레시피 보러가기 》</b></button>
                </Link>
            </div>
            </>
        )
    }
}

export default AddFridge;