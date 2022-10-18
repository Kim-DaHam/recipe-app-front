import React from "react";
import { Link } from "react-router-dom";
import './AddRecipe.css';

class AddRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            recipe: {rname:"", rcategory:"", rcontent:"", rimage:""}
        };
        this.addRecipe = props.addRecipe;
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const gname = data.get("gname");
        const gcategory = data.get("gcategory");
        const gexdate = document.getElementById("exdate").value;

        const thisGrocery = this.state.grocery;
        thisGrocery.name = gname;
        thisGrocery.category = gcategory;
        thisGrocery.exdate = gexdate;

        document.getElementById("name-input").childNodes[0].value="";
        document.getElementById("gcategory").childNodes[0].selected = true;

        this.setState({grocery: thisGrocery});
        this.addGrocery(this.state.grocery);
    }

    render(){
        return(
            <div id="addrecipe" className="w3-display-container w3-light-grey">
                <div className="w3-content w3-display-middle">
                    {/* Header */}
                    <header className="w3-container"> 
                        <h1><b>나만의 레시피 등록📝</b></h1>
                    </header>
                    {/* Contents */}
                    <div id="content-box">
                        <div id="addrecipe-container" className="w3-card-4 w3-white">
                            {/* Add Recipe Form */}
                            <form id="addrecipe-form" onSubmit={'#'}>
                                <div id="scroll-area">
                                    <div id="img-input" className="form-row">
                                        <img src="#"/>
                                        <input type="file" />
                                    </div>
                                    <div id="name-input" className="form-row">
                                        <label>이름* :</label>
                                        <input type="text" className="form-control" maxLength='25'/>
                                    </div>
                                    <div id="category-input" className="form-row">
                                        <label>종류 :</label>
                                        <div id="category-input" className="form-row">
                                            <select name="i-category" id="i-category">
                                                <option value="">--선택안함--</option>
                                                <option value="아침">아침</option>
                                                <option value="점심">점심</option>
                                                <option value="저녁">저녁</option>
                                            </select><br/>
                                        </div>
                                    </div>
                                    <div id="ingredient-input" className="form-row">
                                        <label>재료* :</label>
                                        <input type="text" className="form-control" maxLength='25'/>
                                        <button type="button" class="btn btn-secondary">추가</button>
                                    </div>
                                    <div id="ingredient-collapse" class="collapse show" data-parent="#accordion">
                                        <div class="card-body">
                                            <ul>
                                                <li>
                                                    ingredient #1
                                                    <button type="button" className="btn btn-danger w3-right"><b>―</b></button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="howto-input" className="form-row">
                                        <label>조리방법* :</label>
                                        <textarea className="form-control" maxLength='5000'/>
                                    </div>
                                </div>
                                <Link to="/addrecipe">
                                    <button id="addrecipe-btn" type="button" class="btn btn-info">
                                        <b>레시피 등록</b>
                                    </button>
                                </Link>
                            </form>
                        </div>
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
        </div>
        )
    }
}

export default AddRecipe;