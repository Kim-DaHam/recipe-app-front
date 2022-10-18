import React from 'react';
import './Fridgement.css';
import {call} from '../../service/ApiService';
import Grocery from '../Grocery/Grocery';

class Fridgement extends React.Component {
    constructor(props){
        console.log('Fridgment constructor in!');
        super(props);
        this.state = {
            groceries: props.groceryList
        };
        this.delete = props.delete;
        this.update = props.update;
    }

    deleteGrocery = (item) => {
        this.delete(item);
    }

    deleteChecked = () => {
        this.delete(this.state.groceries);
    }

    deleteAll = () => {
        const deleteList = this.state.groceries;
        deleteList.map((item, idx)=>{
            item.checked = true;
        })
        this.delete(deleteList);
    }

    componentDidUpdate(prevProps){
        console.log('Fridgement.js is componentDidUpdate!');
        if(this.props.groceryList !== prevProps.groceryList){
            this.setState({groceries:this.props.groceryList});
            console.log(this.state.groceries);
        }
    }

    render() {
        console.log('Fridgement.js is rendering!');
        var groceryList = this.state.groceries.length > 0 && (
            <div id="ingredients-list" className="w3-container">
                <div className="list-group pre-scrollable">
                    {this.state.groceries.map((grocery, idx) => (
                        <Grocery key={idx} grocery={grocery} delete={this.deleteGrocery} update={this.update}/>
                    ))}
                </div>
            </div>
        )

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
                {groceryList}
                {/* Ingredients Btn */}
                <div id="ingredients-btn" className="w3-container">
                    <div id="delete-btn" className="w3-row">
                        <div className="w3-col m8 s12">
                            <p>
                                <button 
                                onClick={this.deleteAll}
                                className="w3-button w3-padding-small w3-white w3-border">
                                    <b>전체삭제</b>
                                </button>
                            </p>
                        </div>
                        <div className="w3-col m4 w3-hide-small">
                            <p>
                                <span className="w3-padding-small w3-right">
                                    <span className="w3-tag">0</span>
                                    <b type="button" onClick={this.deleteChecked} 
                                    style={{marginLeft:'8px'}}>선택삭제</b>
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