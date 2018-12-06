import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Alert } from 'reactstrap';

import Settlement from './Settlement';
import TileModal from './TileModal';

library.add(faPlusCircle)

class SettlementSetup extends Component {
    state = {
        showTileModal: false,
        activeTile: {},
    };

    // settlements
    getAddButton() {
        const { settlements, onSettlementAdd } = this.props;

        const settlementCount = settlements.filter(settlement => !settlement.isCity).length;
        if (settlementCount === 5) {
            return <Alert color="info">Max number of settlements reached</Alert>;
        }

        return (
            <FontAwesomeIcon
                className="mb-3"
                icon="plus-circle"
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

    handleActiveTileNumberUpdate = number => {
        const activeTile = Object.assign({...this.state.activeTile}, { number });
        this.setState({ activeTile });
    };

    handleActiveTileTypeUpdate = type => {
        const activeTile = Object.assign({...this.state.activeTile}, { type });
        this.setState({ activeTile });
    };

    handleTileSave = () => {
        this.props.onTileUpdate(this.state.activeTile);
        this.toggleTileModal();
    }

    render() {
        const { settlements, tiles, onSettlementUpgrade } = this.props;
        const { showTileModal, activeTile } = this.state;

        return (
            <React.Fragment>
                <TileModal
                    isOpen={showTileModal}
                    tile={activeTile}
                    toggle={this.toggleTileModal}
                    onUpdateNumber={this.handleActiveTileNumberUpdate}
                    onUpdateType={this.handleActiveTileTypeUpdate}
                    onSave={this.handleTileSave}
                />
                <div>
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
