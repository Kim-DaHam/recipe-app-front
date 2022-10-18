import React from 'react';
import './Fridge.css';
import Fridgment from '../../components/Fridgement/Fridgement';
import AddFridge from '../../components/AddFridge/AddFridge';
import Fridgement from '../../components/Fridgement/Fridgement';
import {call, signout} from '../../service/ApiService';
import { Link } from "react-router-dom";

class Fridge extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            groceries: [],
            category: ""
        };
    }

    addGrocery = (item)=> {
        call("/fridge", "POST", item).then((response)=>{
            this.setState({groceries: response.data});
        });
    }

    deleteGrocery = (item)=> {
        call("/fridge", "DELETE", item).then((response)=>{
            console.log('delete grocery!');
            this.setState({groceries:response.data});
        });
    }

    updateGrocery = (item)=> {
        call("/fridge", "PUT", item).then((response)=>{
            this.setState({groceries:response.data})
            });
    }

    radioClick = (e) => {
        let category = this.state.category;
        category = e.target.value;
        this.setState({category: category});
    }

    componentDidMount() {
        console.log('Fridge.js componentDidMount!');
        call("/fridge", "GET", null).then((response)=>{
            this.setState({groceries: response.data});
        });
    }

    render () {
        console.log('Fridge.js is rendering!');
        var fridgeContent = this.state.groceries.length > 0 && (
            <>
                <Fridgement groceryList={this.state.groceries} delete={this.deleteGrocery} update={this.updateGrocery}></Fridgement>
                <AddFridge addGrocery={this.addGrocery}></AddFridge>
            </>
        )

        return(
            <div id="fridge" className="w3-light-grey">
                <div className="w3-content">
                    {/* Header */}
                    <header className="w3-container w3-topleft w3-padding-32"> 
                    <h1><b>{}님의 냉장고</b></h1>
                    <span type="button" id="logout" onClick={signout} className="w3-tag">로그아웃</span>
                    </header>
                    {/* Contents */}
                    <div id="content-box" className="w3-col">
                        {fridgeContent}
                        {/* Go Recipe Btn */}
                        <div id="recipeOption-container" className="w3-col l4">
                            <label><b>언제 먹을 예정인가요?🍽️ (선택사항)</b></label><br/>
                            <div id="radio-box" className="w3-card w3-margin">
                                <div className="w3-container">
                                <form id="radioBox" action="/action_page.php">
                                    <div id="radio-group" className="form-check">
                                        <label className="form-check-label">
                                            <input type="radio" className="form-check-input" onClick={this.radioClick}
                                            id="radio1" name="optradio" value="아침"/>아침
                                        </label>
                                    </div>
                                    <div id="radio-group" className="form-check">
                                        <label className="form-check-label">
                                            <input type="radio" className="form-check-input" onClick={this.radioClick}
                                            id="radio2" name="optradio" value="점심"/>점심
                                        </label>
                                    </div>
                                    <div id="radio-group" className="form-check">
                                        <label className="form-check-label">
                                            <input type="radio" className="form-check-input" onClick={this.radioClick}
                                            id="radio3" name="optradio" value="저녁"/>저녁
                                        </label>
                                    </div>
                                    </form>
                                </div>
                            </div>
                            <Link to="/recipe">
                                <button className="btn"><b>레시피 보러가기 》</b></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Fridge;