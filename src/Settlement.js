import React, {Component} from 'react';
import Tile from './Tile';

import settlementImg from './images/settlement.png';
import cityImg from './images/city.png';

class Settlement extends Component {
    getImage() {
        if (this.props.settlement.isCity) {
            return {
                src: cityImg,
                alt: 'City',
                height: 80,
            }
        } else {
            return {
                src: settlementImg,
                alt: 'Settlement',
                height: 60,
            }
        }
    }

    render() {
        const img = this.getImage();
        const { settlement, tiles, onSettlementUpgrade, onTileModify } = this.props;

        return (
            <div>
                <img
                    src={img.src}
                    alt={img.alt}
                    height={img.height}
                    onClick={() => onSettlementUpgrade(settlement)}
                />

                <div className="d-flex justify-content-center bd-highlight mb-3">
                    {tiles.map(tile => {
                        return (
                            <div className="p-2 bd-highlight" key={tile.id}>
                                <Tile
                                    tile={tile}
                                    onClick={() => onTileModify(tile)}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Settlement;
