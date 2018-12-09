import React, {Component} from 'react';
import TileImage from '../components/TileImage';

class Tile extends Component {
    render() {
        const { type, number, onClick, imgHeight, className } = this.props;
        let numberDisplay;
        if (number) {
            numberDisplay = (
                <div className="tile-number">
                    <span><b>{number}</b></span>
                </div>
            );
        }

        let classes = "tile";
        if (className) {
            classes += " " + className;
        }

        return (
            <div className={classes} onClick={onClick}>
                <TileImage type={type} height={imgHeight}/>
                {numberDisplay}
            </div>
        );
    }
}

export default Tile;
