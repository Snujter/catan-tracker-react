import React, {Component} from 'react';
import TileImage from '../components/TileImage';

class Tile extends Component {
    render() {
        const { type, number, onClick } = this.props;
        let numberDisplay;
        if (number) {
            numberDisplay = (
                <div className="tile-number">
                    <span><b>{number}</b></span>
                </div>
            );
        }

        return (
            <div className="tile" onClick={onClick}>
                <TileImage type={type}/>
                {numberDisplay}
            </div>
        );
    }
}

export default Tile;
