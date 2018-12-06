import React, {Component} from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink} from 'reactstrap';

class NavBar extends Component {
    render() {
        return (
            <Navbar className="p-0" expand color="dark" fixed="top" dark>
                <Nav className="w-100" navbar justified horizontal="center">
                    <NavItem>
                        <NavLink to="/setup" activeClassName="active" tag={RRNavLink}>Settlements</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/chart" activeClassName="active" tag={RRNavLink}>Chart</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default NavBar;
