import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark fixed-top bg-dark py-0">
                <ul className="navbar-nav w-100 nav-justified">
                    <li className="nav-item d-flex flex-row">
                        <a className="nav-link" href="#">Settlements</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Chart</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;
