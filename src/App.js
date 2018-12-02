import React, {Component} from 'react';
import Header from './Header';
import Settlement from './Settlement';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="text-center">
                        <Settlement />
                        <Settlement />
                        <Settlement />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
