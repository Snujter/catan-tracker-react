import React, {Component} from 'react';
import { Media, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import brickHex from './images/brick-hex.png';
import forestHex from './images/forest-hex.png';
import fieldHex from './images/field-hex.png';
import rockHex from './images/rock-hex.png';
import wheatHex from './images/wheat-hex.png';

import TileImage from './TileImage';

class TileModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            types: {
                'brick': brickHex,
                'field': fieldHex,
                'forest': forestHex,
                'rock': rockHex,
                'wheat': wheatHex,
            }
        }
    }

    render() {
        const { tile, isOpen, toggle, onUpdate, onSave } = this.props;
        const { numbers, types} = this.state;

        return (
            <Modal isOpen={isOpen}>
                <ModalHeader toggle={toggle}>Change Tile</ModalHeader>
                <ModalBody>
                    <div className="d-flex justify-content-center flex-wrap mb-5">
                        {numbers.map((number, i) => {
                            let btnClasses = "btn-round p-2 m-2";
                            btnClasses += (number === tile.number) ?
                                " bg-dark text-light" :
                                " bg-light text-dark";

                            return (
                                <Button
                                    className={btnClasses}
                                    key={i}
                                    onClick={() => onUpdate({ number })}
                                >
                                    {number}
                                </Button>
                            );
                        })}
                    </div>
                    <div className="d-flex justify-content-center flex-wrap">
                        {Object.keys(types).map(function(type) {
                            let btnClasses = "tile m-1";
                            btnClasses += (type === tile.type) ?
                                " bg-dark text-light" :
                                " bg-light text-dark";

                            return (
                                <Button className={btnClasses} key={type} onClick={() => onUpdate({ type })}>
                                    <TileImage type={type} height={70}/>
                                </Button>
                            );
                        })}
                    </div>
                </ModalBody>
                <ModalFooter className="d-flex justify-content-between">
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                    <Button color="primary" onClick={() => onSave(tile)}>Done</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default TileModal;
