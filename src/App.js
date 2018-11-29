import React, {Component} from 'react';
import Header from './Header';
import Settlement from './Settlement';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <Header />
                    <Settlement />
                    <Settlement />
                    <Settlement />
                </div>
            </div>
        );
    }
}

export default App;
