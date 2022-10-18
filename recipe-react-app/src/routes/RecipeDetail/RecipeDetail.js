import React from "react";
import { Link } from "react-router-dom";
import { call } from "../../service/ApiService";
import './RecipeDetail.css';

class RecipeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe:null
        }
    }

    componentDidMount() {
        const {location, history} = this.props;
        if(location.state === undefined) {
            history.push("/recipe");
        }
        if(location.state) {
            this.setState({recipe: location.state.recipe});
        }
    }

    render() {
        var recipeDetail = this.state.recipe !== null && (
            <div>
            {/* Header */}
            <header className="w3-container"> 
                <h1><b>{this.state.recipe.rname}</b></h1>
            </header>
            {/* Contents */}
            <div id="content-box">
                <div id="addrecipe-container" className="w3-card-4 w3-white">
                    

                </div>
            </div>
            </div>
        )

        return(
            <div id="addrecipe" className="w3-display-container w3-light-grey">
                <div className="w3-content w3-display-middle">
                    {recipeDetail}
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
        )
    }
}

export default RecipeDetail