import React, {Component} from 'react';
import settlementImg from '../../images/settlement.png';
import cityImg from '../../images/city.png';

class SettlementImage extends Component {
    render() {
        const { settlement } = this.props;

        let img;
        if (settlement.isCity) {
            img = {
                src: cityImg,
                alt: 'City',
                height: 60,
            };
        } else {
            img = {
                src: settlementImg,
                alt: 'Settlement',
                height: 50,
            };
        }

        return (
            <img src={img.src} alt={img.alt} height={img.height} />
        );
    }
}

export default SettlementImage;
