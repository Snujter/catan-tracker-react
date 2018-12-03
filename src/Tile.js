import React, {Component} from 'react';
import brickHex from './images/brick-hex.png';
import forestHex from './images/forest-hex.png';
import fieldHex from './images/field-hex.png';
import rockHex from './images/rock-hex.png';
import wheatHex from './images/wheat-hex.png';
import emptyHex from './images/empty-hex.png';

class Tile extends Component {
    render() {
        return (
            <div className="tile" onClick={this.props.onClick}>
                <img
                    src={this.getImage()}
                    alt="Tile"
                    height="90"
                />
                <div className="tile-number">
                    <span><b>{this.props.number}</b></span>
                </div>
            </div>
        );
    }

    getImage() {
        switch (this.props.type) {
            case 'brick':
                return brickHex;
            case 'forest':
                return forestHex;
            case 'field':
                return fieldHex;
            case 'rock':
                return rockHex;
            case 'wheat':
                return wheatHex;
            default:
                return emptyHex;
        }
    }
}

export default Tile;
