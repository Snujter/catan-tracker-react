import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="btn-group d-flex" role="group">
                <button type="button" className="btn btn-default w-100">Settlements</button>
                <button type="button" className="btn btn-default w-100">Chart</button>
            </div>
        );
    }
}

export default Header;
