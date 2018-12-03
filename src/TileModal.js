import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class TileModal extends Component {
    render() {
        const { isOpen, toggle } = this.props;

        return (
            <Modal isOpen={isOpen}>
                <ModalHeader toggle={toggle}>Change Tile</ModalHeader>
                <ModalBody>
                    Tile body
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default TileModal;
