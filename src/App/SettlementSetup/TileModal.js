import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { availableTypes } from '../../immutables';

import TileImage from '../components/TileImage';
import NumberButtons from '../components/NumberButtons';
import AppButton from '../components/AppButton';

class TileModal extends Component {
    render() {
        const { tile, isOpen, toggle, onUpdateNumber, onUpdateType, onSave } = this.props;

        return (
            <Modal isOpen={isOpen}>
                <ModalHeader toggle={toggle}>Change Tile</ModalHeader>
                <ModalBody>
                    <NumberButtons
                        className="d-flex justify-content-center flex-wrap mb-5"
                        selectedNumber={tile.number}
                        onButtonClick={onUpdateNumber}
                        disabledNumbers={[7]}
                    />
                    <div className="d-flex justify-content-center flex-wrap">
                        {Object.keys(availableTypes).map(type => (
                            <AppButton
                                key={type}
                                className="tile m-1"
                                isActive={type === tile.type}
                                onClick={() => onUpdateType(type)}
                            >
                                <TileImage type={type} height={70}/>
                            </AppButton>
                        ))}
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
