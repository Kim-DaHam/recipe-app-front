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
                            <div class="w3-container">
                                <form id="ingredients-searchBar" class="form-inline" action="/action_page.php">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="식재료  검색"/>
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">🔍</span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* Ingredients List */}
                            <div class="w3-container">
                            <div class="list-group">
                                <a href="#" class="list-group-item list-group-item-action">First item</a>
                                <a href="#" class="list-group-item list-group-item-action">Second item</a>
                                <a href="#" class="list-group-item list-group-item-action">Third item</a>
                                </div>
                                <div class="w3-row">
                                    <div class="w3-col m8 s12">
                                    <p><button class="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
                                    </div>
                                    <div class="w3-col m4 w3-hide-small">
                                    <p><span class="w3-padding-large w3-right"><b>Comments  </b> <span class="w3-tag">0</span></span></p>
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