import React from 'react';
import './Fridge.css';
import Fridgment from '../../components/Fridgement/Fridgement';
import AddFridge from '../../components/AddFridge/AddFridge';
import Fridgement from '../../components/Fridgement/Fridgement';

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
                        <Fridgement></Fridgement>
                        <AddFridge></AddFridge>
                    </div>
                </div>
            </body>
        )
    }
}

export default Fridge;