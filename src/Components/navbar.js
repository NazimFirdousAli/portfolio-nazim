import React, { useState, useEffect } from 'react';
import './navbar.css';

import { Button,NavDropdown,Nav,Form,FormControl } from 'react-bootstrap';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Hidden } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';




const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        position: 'fixed',
        // width: '100%',
        position: 'absolute'
    },


    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            width: '5px'
        },

    },
    title: {
        flexGrow: 1,
        marginLeft: '60px',
        fontSize: '32px',
        letterSpacing: '3px',
        fontWeight: '800',
        [theme.breakpoints.down('sm')]: {
            marginLeft: "0px",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '20px'
        },


    },
    urls: {
        whiteSpace: 'pre-wrap',
        marginRight: '100px',
        textTransform: 'uppercase',

    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    appBarTransparent: {
        backgroundColor: "transparent",
        transition: 'color 500ms ease-out, background-color 500ms ease-out'

    },
    appBarSolid: {
        backgroundColor: '#f8f8f8',
        color: 'Black',
        transition: 'color 500ms ease-out, background-color 500ms ease-out'
    }
}));


function Navbar() {
    const classes = useStyles();
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
        <div className={classes.root}>
            <AppBar className={classes[navRef.current]} >
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        NA
        <span style={{ color: '#00b0dc' }}>
                            ZIM
        </span>
                    </Typography>
                    <Typography className={classes.urls}>
                        <Hidden smDown>
                            <a href="#" style={{ color: '#00b0dc' }}>Home</a> {"       "}
                            <a href="#">About</a> {"      "}
                            <a href="#">Services</a>{"        "}
                            <a href="#">Projects</a>{"        "}
                            <a href="#">Contact</a>{"        "}
                        </Hidden>
                    </Typography>
                    <Hidden mdUp>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </AppBar>
{/* 
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar> */}
        </div>
    );
}


export default Navbar
