import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { availableTypes } from '../../immutables';

import TileImage from '../components/TileImage';
import NumberButtons from '../components/NumberButtons';
import AppButton from '../components/AppButton';

class TileModal extends Component {
    render() {
        const { tile, isOpen, toggle, onUpdateNumber, onUpdateType, onSave, onClear } = this.props;

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
                                active={type === tile.type}
                                onClick={() => onUpdateType(type)}
                            >
                                <TileImage type={type} height={70}/>
                            </AppButton>
                        ))}
                    </div>
                </ModalBody>
                <ModalFooter className="d-flex justify-content-between">
                    <AppButton onClick={toggle}>Cancel</AppButton>
                    <AppButton color="info" onClick={onClear}>Clear</AppButton>
                    <AppButton outline color="success" onClick={() => onSave(tile)}>Done</AppButton>
                </ModalFooter>
            </Modal>
        );
    }
}

export default TileModal;
