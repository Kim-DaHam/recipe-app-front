import React from 'react';

import './AddFridge.css';

class AddFridge extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            grocery: {name:"", category:"", exdate:""}
        };
        this.addGrocery = props.addGrocery;
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

    render() {
        return (
            <>
            {/* Ingredients Add Form */}
            <div id="ingredientAdd-container" className="w3-col l4">
                <div className="w3-card w3-margin w3-margin-top">
                    <div className="w3-container w3-white">
                        <h4><b>식재료 추가하기🥬</b></h4><br/>
                        <form onSubmit={this.handleSubmit}>
                            <label>이름*(필수입력):</label>
                            <div id="name-input" className="form-row">
                                <input type="text" name="gname"
                                className="form-control" id="gname" maxLength='25'/>
                            </div>
                            <label>종류 :</label>
                            <div id="category-input" className="form-row">
                                <select name="gcategory" id="gcategory">
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
                                <input id="exdate" name="exdate"
                                type="date" className="form-control"/>
                            </div>
                            <button type="submit" className="btn btn-info">추가하기</button>
                        </form>
                    </div>
                </div><hr/>
            </div><br/>
            </>
        )
    }
}

export default AddFridge;