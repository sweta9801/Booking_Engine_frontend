import React, { Component } from "react";
import Login from "./Login";
import Home from "./Home";
import Register from "./Register";
import Book from "./Booking";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import Reciept from "./RecieptBooked";

class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <>
                        <Navbar className="navbar navbar-custom">
                            <Container>
                            <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/home"} >Home</Nav.Link>
                            <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                            <Nav.Link as={Link} to={"/register"}>Register</Nav.Link>
                            <Nav.Link as={Link} to={"/book"}>Book</Nav.Link>
                            <Nav.Link as={Link} to={"/booked"}>Receipt</Nav.Link>
                            </Nav>
                            </Container>
                        </Navbar>
                        </>
                    </div>
                <div>
                <Switch>
                    <Route className="App" path="/login">
                        <Login />
                        {/* <Redirect to="/home"/> */}
                    </Route>
                    <Route className="App" path="/register">
                        <Register />
                    </Route>
                    <Route className="App" path="/book">
                        <Book />
                    </Route>
                    <Route className="App" path="/booked">
                        <Reciept />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default NavbarComp;