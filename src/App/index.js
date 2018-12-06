import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import SettlementSetup from './SettlementSetup/index';
import Chart from './Chart/index';
import NavBar from './NavBar';

class App extends Component {
    state = {
        lastSettlementId: 0,
        lastTileId: 0,
        settlements: [],
        tiles: [],
        showTileModal: false,
        activeTile: {},
    };

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

    handleSettlementUpdate = settlement => {
        const settlements = this.state.settlements.slice();
        const enableToggle = settlement.isCity ?
            settlements.filter(settlement => !settlement.isCity).length < 5 :
            settlements.filter(settlement => settlement.isCity).length < 4;

        if (!enableToggle) {
            return;
        }

        const index = settlements.indexOf(settlement);
        settlements[index].isCity = !settlements[index].isCity;

        this.setState({ settlements });
    };

    // tiles
    handleTileUpdate = newTile => {
        if ((newTile.type && !newTile.number) || (!newTile.type && newTile.number)) {
            return;
        }

        const { tiles } = this.state;
        const newTiles = tiles.slice();
        const index = newTiles.findIndex(tile => tile.id === newTile.id);

        newTiles[index] = Object.assign(newTiles[index], newTile);

        this.setState({ tiles: newTiles });
    };

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
                                        onSettlementUpdate={this.handleSettlementUpdate}
                                        onTileUpdate={this.handleTileUpdate}
                                    />
                                )}
                            />
                            <Route
                                path="/chart"
                                render={(props) => (
                                    <Chart
                                        {...props}
                                        settlements={settlements}
                                        tiles={tiles.filter(tile => tile.type !== "empty")}
                                    />
                                )}
                            />
                            <Redirect from="/" to="/setup" />
                        </Switch>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
