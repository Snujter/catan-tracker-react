import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Switch, Route, Redirect } from 'react-router-dom'

import SettlementSetup from './SettlementSetup/index';
import Chart from './Chart/index';
import NavBar from './NavBar';

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
    handleSettlementAdd = () => {
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
    };

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
    handleTileUpdate = (newTile) => {
        console.log(newTile);

        const { tiles } = this.state;
        const newTiles = tiles.slice();
        const index = newTiles.findIndex(tile => tile.id === newTile.id);

        newTiles[index] = Object.assign(newTiles[index], newTile);

        this.setState({ tiles: newTiles });
    }

    render() {
        const { settlements, tiles } = this.state;

        return (
            <React.Fragment>
                <NavBar />
                <main className="container">
                    <div className="text-center">
                        <Switch>
                            <Route
                                path="/setup"
                                render={(props) => (
                                    <SettlementSetup
                                        {...props}
                                        settlements={settlements}
                                        tiles={tiles}
                                        onSettlementAdd={this.handleSettlementAdd}
                                        onSettlementUpgrade={this.handleSettlementUpgrade}
                                        onTileUpdate={this.handleTileUpdate}
                                    />
                                )}
                            />
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
