import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark fixed-top bg-dark py-0">
                <ul className="navbar-nav w-100 nav-justified">
                    <li className="nav-item">
                        <Link className="nav-link" to="/setup">Settlements</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/chart">Chart</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;
