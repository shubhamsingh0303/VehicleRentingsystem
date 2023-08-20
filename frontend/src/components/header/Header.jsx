import React, { Fragment, useState } from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/Images/logo.png";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    const [selectedLocation, setSelectedLocation] = useState('Location');

    const handleLocationChange = (location) => {
        setSelectedLocation(location);
    };

    return (
        <Fragment>
            <Navbar expand="lg" className="bg-body-tertiary navbar_background">
                <Container>
                    <Navbar.Brand href="#"><img src={logo} alt="logo" className='RapidLogo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="#" className='mx-1 text-dark'><Link to={`/`} className='nav_menu'>home</Link></Nav.Link>
                            <NavDropdown
                                title={selectedLocation}
                                id="basic-nav-dropdown"
                                className='nav_menu mx-1 text-dark'
                            >
                                <NavDropdown.Item onClick={() => handleLocationChange('Mumbai')}>Mumbai</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleLocationChange('Delhi')}>Delhi</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleLocationChange('Pune')}>Pune</NavDropdown.Item>
                            </NavDropdown>
                            {/* <Nav.Link href="#" className='mx-1 text-dark'><Link to={`/login`} className='nav_menu'>login</Link> </Nav.Link> */}
                            <Nav.Link href="#" className='mx-1 text-dark'>
                                <Link to={`/account`} className='nav_menu UserIcon'>
                                    <FaUserCircle />
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
}

export default Header;
