import React, {Component} from 'react';
import { Media, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import brickHex from './images/brick-hex.png';
import forestHex from './images/forest-hex.png';
import fieldHex from './images/field-hex.png';
import rockHex from './images/rock-hex.png';
import wheatHex from './images/wheat-hex.png';
import emptyHex from './images/empty-hex.png';

class TileModal extends Component {
    constructor(props) {
        super(props);
        const { number, type } = props.activeTile;
        this.state = {
            number: number,
            numbers: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            type: type,
            types: ['brick', 'field', 'forest', 'rock', 'wheat'],
        }
    }

    getImage(type) {
        switch (type) {
            case 'brick':
                return brickHex;
            case 'forest':
                return forestHex;
            case 'field':
                return fieldHex;
            case 'rock':
                return rockHex;
            case 'wheat':
                return wheatHex;
            default:
                return emptyHex;
        }
    }

    render() {
        const { isOpen, toggle } = this.props;
        const { numbers, types } = this.state;

        return (
            <Modal isOpen={isOpen}>
                <ModalHeader toggle={toggle}>Change Tile</ModalHeader>
                <ModalBody>
                    <div className="d-flex justify-content-center flex-wrap mb-5">
                        {numbers.map((number, i) => {
                            let btnClasses = "btn-round p-2 m-2";
                            btnClasses += (number === this.state.number) ?
                                " bg-dark text-light" :
                                " bg-light text-dark";

                            return <Button className={btnClasses} key={i}>{number}</Button>
                        })}
                    </div>
                    <div className="d-flex justify-content-center flex-wrap">
                        {types.map((type, i) => {
                            let btnClasses = "tile m-1";
                            btnClasses += (type === this.state.type) ?
                                " bg-dark text-light" :
                                " bg-light text-dark";

                            return (
                                <Button className={btnClasses} key={i}>
                                    <Media src={this.getImage(type)} width="60" rounded />
                                </Button>
                            );
                        })}
                    </div>
                </ModalBody>
                <ModalFooter className="d-flex justify-content-between">
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                    <Button color="primary" onClick={toggle}>Done</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default TileModal;
