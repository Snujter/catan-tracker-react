import React, {Component} from 'react';
import Tile from './Tile';

class Settlement extends Component {
    render() {
        return (
            <div>
                <img src={require("./images/settlement.png")} alt="Settlement" height="60"/>

                <div className="d-flex justify-content-center bd-highlight mb-3">
                    <div className="p-2 bd-highlight">
                        <Tile/>
                    </div>
                    <div className="p-2 bd-highlight">
                        <Tile/>
                    </div>
                    <div className="p-2 bd-highlight">
                        <Tile/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settlement;
