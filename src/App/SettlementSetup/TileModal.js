import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { numbers, types } from '../../immutables';

import TileImage from '../components/TileImage';
import NumberButton from '../components/NumberButton';

class TileModal extends Component {
    render() {
        const { tile, isOpen, toggle, onUpdate, onSave } = this.props;

        return (
            <Modal isOpen={isOpen}>
                <ModalHeader toggle={toggle}>Change Tile</ModalHeader>
                <ModalBody>
                    <div className="d-flex justify-content-center flex-wrap mb-5">
                        {numbers.map((number, i) => {
                            const extraClasses = (number === tile.number) ?
                                " bg-dark text-light" :
                                " bg-light text-dark";

                            return (
                                <NumberButton
                                    key={i}
                                    number={number}
                                    extraClasses={extraClasses}
                                    onClick={() => onUpdate({ number })}
                                />
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