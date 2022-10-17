import React from 'react';
import './Fridge.css';
import Fridgment from '../../components/Fridgement/Fridgement';
import AddFridge from '../../components/AddFridge/AddFridge';
import Fridgement from '../../components/Fridgement/Fridgement';
import {call, signout} from '../../service/ApiService';

class Fridge extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            groceries: [],
        };
    }

    addGrocery = (item)=> {
        call("/fridge", "POST", item).then((response)=>{
            this.setState({groceries: response.data});
        });
    }

    deleteGrocery = (item)=> {
        call("/fridge", "DELETE", item).then((response)=>{
            this.setState({groceries:response.data});
        });
    }

    updateGrocery = (item)=> {
        call("/fridge", "PUT", item).then((response)=>{
            this.setState({groceries:response.data})
            });
    }

    componentDidMount() {
        console.log('Fridge.js componentDidMount!');
        call("/fridge", "GET", null).then((response)=>{
            this.setState({groceries: response.data});
        });
    }

    render () {
        console.log('Fridge.js is rendering!');
        return(
            <div id="fridge" className="w3-light-grey">
                <div className="w3-content">
                    {/* Header */}
                    <header className="w3-container w3-topleft w3-padding-32"> 
                    <h1><b>{}님의 냉장고</b></h1>
                    <span id="logout" className="w3-tag">로그아웃</span>
                    </header>
                    {/* Contents */}
                    <div id="content-box" className="w3-col">
                        {console.log(this.state.groceries)}
                        <Fridgement groceryList={this.state.groceries} delete={this.deleteGrocery} update={this.updateGrocery}></Fridgement>
                        <AddFridge addGrocery={this.addGrocery}></AddFridge>
                    </div>
                </div>
            </div>
        )
    }
}

export default Fridge;