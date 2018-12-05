import React, {Component} from 'react';
import TileImage from '../components/TileImage';

class Tile extends Component {
    render() {
        const { type, number, onClick } = this.props;

        return (
            <div className="tile" onClick={onClick}>
                <TileImage type={type}/>
                <div className="tile-number">
                    <span><b>{number}</b></span>
                </div>
            </div>
        );
    }
}

export default Tile;
