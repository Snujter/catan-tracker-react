import React, {Component} from 'react';
import NavBar from './NavBar';
import Settlement from './Settlement';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
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
