import React, {Component} from 'react';
import Tile from './Tile';
import settlementImg from '../../images/settlement.png';
import cityImg from '../../images/city.png';

class Settlement extends Component {
    render() {
        const { settlement, tiles, onUpgrade, onTileClick } = this.props;

        let img;
        if (settlement.isCity) {
            img = {
                src: cityImg,
                alt: 'City',
                height: 80,
            };
        } else {
            img = {
                src: settlementImg,
                alt: 'Settlement',
                height: 60,
            };
        }

        return (
            <div>
                <img
                    src={img.src}
                    alt={img.alt}
                    height={img.height}
                    onClick={() => onUpgrade(settlement)}
                />

                <div className="d-flex justify-content-center bd-highlight mb-3">
                    {tiles.map(tile => {
                        return (
                            <div className="p-2 bd-highlight" key={tile.id}>
                                <Tile
                                    type={tile.type}
                                    number={tile.number}
                                    onClick={() => onTileClick(tile)}
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
