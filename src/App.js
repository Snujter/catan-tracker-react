import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Alert } from 'reactstrap';

import NavBar from './NavBar';
import Settlement from './Settlement';
import TileModal from './TileModal';

library.add(faPlus)

class App extends Component {
    state = {
        lastSettlementId: 0,
        lastTileId: 0,
        settlements: [],
        tiles: [],
        showTileModal: true,
        activeTile: {},
    }

    addSettlement() {
        const settlements = this.state.settlements.slice();
        const newSettlementId = this.state.lastSettlementId + 1;

        const tiles = this.state.tiles.slice();
        let newTileId = this.state.lastTileId + 1;

        let newTiles = [];
        for (let i = 0; i < 3; i++) {
            newTiles.push({
                id: newTileId++,
                settlementId: newSettlementId,
                type: null,
                number: null,
            });
        }

        this.setState({
            lastSettlementId: newSettlementId,
            lastTileId: newTileId,

            settlements: [{
                id: newSettlementId,
                isCity: false,
            }, ...settlements],

            tiles: tiles.concat(newTiles)
        });
    }

    handleSettlementUpgrade = settlement => {
        const settlements = this.state.settlements.slice();
        const cityCount = settlements.filter(settlement => settlement.isCity).length;
        if (cityCount === 4) {
            return;
        }
        const index = settlements.indexOf(settlement);
        settlements[index].isCity = true;

        this.setState({ settlements });
    };

    handleTileClick = tile => {
        this.setState({
            showTileModal: true,
            activeTile: {...tile},
        });
    };

    toggleTileModal = () => {
        this.setState({ showTileModal: !this.state.showTileModal });
    };

    getAddButton() {
        const settlementCount = this.state.settlements.filter(settlement => !settlement.isCity).length;
        if (settlementCount === 5) {
            return <Alert color="info">Max number of settlements reached</Alert>;
        }

        return (
            <FontAwesomeIcon
                icon="plus"
                size="2x"
                onClick={() => this.addSettlement()}
            />
        );
    }

    render() {
        const { settlements, tiles } = this.state

        return (
            <React.Fragment>
                <NavBar />
                <TileModal
                    isOpen={this.state.showTileModal}
                    toggle={this.toggleTileModal}
                />
                <main className="container">
                    <div className="text-center">
                        {this.getAddButton()}
                        {settlements.map((settlement, i) => (
                            <Settlement
                                key={settlement.id}
                                settlement={settlement}
                                tiles={tiles.filter(tile => (tile.settlementId === settlement.id))}
                                onSettlementUpgrade={this.handleSettlementUpgrade}
                                onTileClick={this.handleTileClick}
                            />
                        ))}
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
