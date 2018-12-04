import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Alert } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom'

import SettlementSetup from './SettlementSetup';
import Chart from './Chart';
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
        showTileModal: false,
        activeTile: {},
    }

    // settlements
    addSettlement() {
        const settlements = this.state.settlements.slice();
        const newSettlementId = this.state.lastSettlementId + 1;

        const tiles = this.state.tiles.slice();
        let newTileId = this.state.lastTileId;

        let newTiles = [];
        for (let i = 0; i < 3; i++) {
            newTiles.push({
                id: ++newTileId,
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

    handleTileUpdate = () => {
        const { tiles, activeTile} = this.state;
        const newTiles = tiles.slice();
        const index = newTiles.findIndex(tile => tile.id === activeTile.id);

        tiles[index] = Object.assign(tiles[index], this.state.activeTile);

        this.setState({ tiles });
        this.toggleTileModal();
    }

    render() {
        const { settlements, tiles, showTileModal, activeTile } = this.state

        return (
            <React.Fragment>
                <NavBar />
                <main className="container">
                    <div className="text-center">
                        <Switch>
                            <Route path="/setup" component={SettlementSetup}/>
                            <Route path="/chart" component={Chart}/>
                            <Redirect from="/" to="/setup" />
                        </Switch>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
