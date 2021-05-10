import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import './navbar.css';



export default function PersistentDrawerRight() {

  const [navBackground, setNavBackground] = useState('appBarTransparent')
  const navRef = React.useRef()
  navRef.current = navBackground

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 250
      if (show) {
        setNavBackground('appBarSolid')
      } else {
        setNavBackground('appBarTransparent')
      }
    }

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])



  return (
    <div className='root'>


      <Navbar className='[navRef.current]' /*bg="light"*/ expand="lg" style={{ position: "fixed", width: "100%", zIndex: "1" }}>
        <Navbar.Brand className='title' href="#home">NA
        <span style={{ color: '#00b0dc' }}>
            ZIM
        </span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='urls' >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Education</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </div>
  )
}
