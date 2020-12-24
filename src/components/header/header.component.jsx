import React from 'react'

import {Container, Navbar, Nav} from 'react-bootstrap'

import LogoImage from "../../assets/logo.png"

import "./header.styles.scss"

const Header = () => {
    return (
        <header className="header">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/"><img className="logo_image rounded-circle" src={LogoImage} /> @jeldikk</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="https://github.com/jeldikk">Repository</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
