import React from 'react'

import {Container, Navbar, Nav} from 'react-bootstrap'

const Header = () => {
    return (
        <header className="header">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">@jeldikk</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="https://github.com/jeldikk">Repository</Nav.Link>
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
