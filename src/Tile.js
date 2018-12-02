import React, {Component} from 'react';

class Tile extends Component {
    render() {
        return (
            <div className="tile">
                <img
                    src="https://dummyimage.com/80x80/000/fff"
                    alt="Tile"
                    height="80"
                />
                <div className="tile-number">
                    <span><b>8</b></span>
                </div>
            </div>
        );
    }
}

export default Tile;
