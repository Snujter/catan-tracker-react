import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import NavBar from './NavBar';
import Settlement from './Settlement';

library.add(faPlus)

class App extends Component {
    state = {
        lastSettlementId: 0,
        settlements: [],
    }

    addSettlement() {
        const settlements = this.state.settlements.slice();
        const newSettlementId = this.state.lastSettlementId + 1;
        this.setState({
            settlements: [{
                id: newSettlementId,
                isCity: false,
            }, ...settlements],
            lastSettlementId: newSettlementId,
        });
    }

    handleSettlementUpgrade = settlement => {
        const settlements = this.state.settlements.slice();
        const index = settlements.indexOf(settlement);
        settlements[index].isCity = true;

        this.setState({ settlements });
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <main className="container">
                    <div className="text-center">
                        <FontAwesomeIcon
                            icon="plus"
                            size="2x"
                            onClick={() => this.addSettlement()}
                        />
                        {this.state.settlements.map((settlement, i) => (
                            <Settlement
                                key={i}
                                settlement={settlement}
                                onSettlementUpgrade={this.handleSettlementUpgrade}
                            />
                        ))}
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
