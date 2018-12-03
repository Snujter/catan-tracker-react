import React, {Component} from 'react';
import Tile from './Tile';

import settlementImg from './images/settlement.png';
import cityImg from './images/city.png';

class Settlement extends Component {
    getImage() {
        if (this.props.isCity) {
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

        return (
            <div>
                <img src={img.src} alt={img.alt} height={img.height}/>

                <div className="d-flex justify-content-center bd-highlight mb-3">
                    <div className="p-2 bd-highlight">
                        <Tile/>
                    </div>
                    <div className="p-2 bd-highlight">
                        <Tile/>
                    </div>
                    <div className="p-2 bd-highlight">
                        <Tile/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settlement;
