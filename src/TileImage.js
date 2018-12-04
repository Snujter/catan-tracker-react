import React, {Component} from 'react';
import brickHex from './images/brick-hex.png';
import forestHex from './images/forest-hex.png';
import fieldHex from './images/field-hex.png';
import rockHex from './images/rock-hex.png';
import wheatHex from './images/wheat-hex.png';
import emptyHex from './images/empty-hex.png';

class TileImage extends Component {
    state = {
        imagesByType: {
            'brick': brickHex,
            'field': fieldHex,
            'forest': forestHex,
            'rock': rockHex,
            'wheat': wheatHex,
            'empty': emptyHex,
        }
    };

    render() {
        const { imagesByType } = this.state;
        const { type, alt, height } = this.props;

        return (
            <img
                src={imagesByType[type || 'empty']}
                alt={alt || 'Tile'}
                height={height || 90}
            />
        );
    }
}

export default TileImage;
