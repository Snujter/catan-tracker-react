import React, {Component} from 'react';
import { types } from './immutables';

class TileImage extends Component {
    render() {
        const { type, alt, height } = this.props;

        return (
            <img
                src={types[type || 'empty']}
                alt={alt || 'Tile'}
                height={height || 90}
            />
        );
    }
}

export default TileImage;
