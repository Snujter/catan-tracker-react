import React, {Component} from 'react';
import TileImage from './TileImage';

class Tile extends Component {
    render() {
        const { tile, onClick } = this.props;

        return (
            <div className="tile" onClick={onClick}>
                <TileImage type={tile.type}/>
                <div className="tile-number">
                    <span><b>{tile.number}</b></span>
                </div>
            </div>
        );
    }
}

export default Tile;
