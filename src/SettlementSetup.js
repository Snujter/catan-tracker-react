import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Alert } from 'reactstrap';

import Settlement from './Settlement';
import TileModal from './TileModal';

library.add(faPlus)

class SettlementSetup extends Component {
    state = {
        showTileModal: false,
        activeTile: {},
    }

    // settlements
    getAddButton() {
        const { settlements, onSettlementAdd } = this.props;

        const settlementCount = settlements.filter(settlement => !settlement.isCity).length;
        if (settlementCount === 5) {
            return <Alert color="info">Max number of settlements reached</Alert>;
        }

        return (
            <FontAwesomeIcon
                icon="plus"
                size="2x"
                onClick={() => onSettlementAdd()}
            />
        );
    }

    // tiles
    handleTileClick = tile => {
        this.setState({
            showTileModal: true,
            activeTile: {...tile},
        });
    };

    toggleTileModal = () => {
        this.setState({
            activeTile: {},
            showTileModal: !this.state.showTileModal,
        });
    };

    handleActiveTileUpdate = values => {
        const activeTile = Object.assign({...this.state.activeTile}, values);
        this.setState({ activeTile });
    };

    handleSave = () => {
        this.props.onTileUpdate(this.state.activeTile);
        this.toggleTileModal();
    }

    render() {
        const { settlements, tiles, onSettlementUpgrade, onTileUpdate } = this.props;
        const { showTileModal, activeTile } = this.state;

        return (
            <React.Fragment>
                <TileModal
                    isOpen={showTileModal}
                    tile={activeTile}
                    toggle={this.toggleTileModal}
                    onUpdate={this.handleActiveTileUpdate}
                    onSave={this.handleSave}
                />
                <div className="text-center">
                    {this.getAddButton()}
                    {settlements.map((settlement, i) => (
                        <Settlement
                            key={settlement.id}
                            settlement={settlement}
                            tiles={tiles.filter(tile => (tile.settlementId === settlement.id))}
                            onUpgrade={onSettlementUpgrade}
                            onTileClick={this.handleTileClick}
                        />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

export default SettlementSetup;
