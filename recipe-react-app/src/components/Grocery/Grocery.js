import React from 'react';
import './Grocery.css';

class Grocery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {grocery: props.grocery};
        this.deleteGrocery = props.delete;
        this.update = props.update;
    }

    deleteEventHandler = () => {
        const deleteList = [this.state.grocery];
        this.deleteGrocery(deleteList);
    }

    checkboxEventHandler = (e) => {
        const thisItem = this.state.grocery;
        thisItem.checked = thisItem.checked ? false:true;
        this.setState({grocery: thisItem});
        this.update(this.state.grocery);
    }

    render() {
        const grocery = this.state.grocery;

        return (
            <a href="#" className="list-group-item list-group-item-action">
                <input type="checkbox" className="form-check-input"
                checked={grocery.checked}
                onChange={this.checkboxEventHandler}/>
                    {grocery.name}
                <button type="button" 
                onClick={this.deleteEventHandler}
                className="btn btn-danger w3-right"><b>―</b></button>
            </a>
        )
    }
}

export default Grocery;