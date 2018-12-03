import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import NavBar from './NavBar';
import Settlement from './Settlement';

library.add(faPlus)

class App extends Component {
    state = {
        settlements: [],
    }

    addSettlement() {
        const settlements = this.state.settlements.slice();
        this.setState({
            settlements: settlements.concat({
                isCity: false,
            }),
        });
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
                            <Settlement key={i} isCity={settlement.isCity}/>
                        ))}
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
