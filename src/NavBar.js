import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class NavBar extends Component {
    render() {
        return (
            <header>
                <Navbar style={{ backgroundColor: '#6f42c1'}} varient='dark' expand="lg">
                    <Navbar.Brand className="text-light">MyCovid</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="mr-2">
                        <Nav className="ml-auto" style={{fontSize: '1rem'}}>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/bed">Bed_Availaility</Nav.Link>
                            <Nav.Link href="/status">Check_Status</Nav.Link>
                            <Nav.Link href="/update">Update_Status</Nav.Link>
                            <Nav.Link href="/contact">Contact_Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        )
    }
}

export default NavBar