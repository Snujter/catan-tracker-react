import React, {Component} from 'react';
import { availableTypes } from '../../immutables';
import emptyHex from '../../images/empty-hex.png';

class TileImage extends Component {
    render() {
        const { type, alt, height } = this.props;

        return (
            <img
                src={availableTypes[type] || emptyHex}
                alt={alt || 'Tile'}
                height={height || 90}
            />
        );
    }
}

export default TileImage;
