import React from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    NavLink
} from "react-router-dom";
import useAuth from '../Hooks/useAuth';



const Header = () => {
    const style = {
        'textDecoration': 'none',
        'color': 'white',
        'padding': '10px'
    }
    const activeStyle = {
        fontWeight: "bold",
        color: "green"
    }
    const { user, logOut } = useAuth();

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="text-warning" to="/home"> Tourism of Sylhet</Navbar.Brand>
                <Nav className="m-auto">
                    <NavLink activeStyle={activeStyle} style={style} to="/home">HOME</NavLink>
                    <NavLink activeStyle={activeStyle} style={style} to="/services">SERVICES</NavLink><NavLink activeStyle={activeStyle} style={style} to="/features">BEST FEATURES</NavLink>

                    {user?.email && <NavLink activeStyle={activeStyle} style={style} to="/orders">MY ORDERS</NavLink>}
                    <NavLink activeStyle={activeStyle} style={style} to="/about">ABOUT</NavLink>
                    <NavLink activeStyle={activeStyle} style={style} to="/register">REGISTER</NavLink>
                    <NavLink style={style} to='#'>{user.displayName}</NavLink>
                    {user?.email && <Button onClick={logOut}>Log Out</Button>}
                </Nav>
            </Container>
        </Navbar>)
};
export default Header;