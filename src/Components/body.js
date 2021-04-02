import React from 'react'

import './body.css'

import Particles from 'react-particles-js';
import Typewriter from 'typewriter-effect';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Navbar from './navbar.js';
import image1 from '../Images/1.jpg'
import DP from '../Images/DP.jpeg'
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineGithub } from "react-icons/ai";
import { BrowserRouter as Router, Link } from 'react-router-dom';





const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ),url(${image1})`,
    },
    background: {
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        height: '730px',
        [theme.breakpoints.down('md')]: {
            backgroundSize: '50%'
        }
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    heading: {
        color: 'white',
        fontSize: '20px',
        textAlign: 'center',
        fontWeight: 600,
        [theme.breakpoints.down('md')]: {
            marginTop: '40px',
            fontSize: '13px',
            fontWeight: 400,
        },

    },
    heading1: {
        fontSize: '20px',
        textAlign:'center',
        [theme.breakpoints.down('md')]: {
            fontSize: '15px',
        },

    },
    large: {
        display: "block",
        position: 'relative',
        border: '3px solid white',
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "50%",
        width: theme.spacing(12),
        height: theme.spacing(12),
        [theme.breakpoints.down('md')]: {
            width: '100px',
            height: '100px'
        },
    },
    body: {
        marginTop: '-500px',
        [theme.breakpoints.down('md')]: {
            marginTop: '-350px'
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '-200px'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '0px'
        },


    },
    // particle: {
    //     position: 'relative',
    //     [theme.breakpoints.down('md')]: {

    //     },
    // },

}))

function Body() {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <div className={classes.background}>
                <Particles height="100%" width="100%"
                    params={{
                        particles: {
                            number: {
                                value: 150,
                                density: {
                                    enable: true,
                                    value_area: 1000,
                                }
                            },
                        },
                    }}
                />
                <Navbar />
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={12}>
                        {/* <Paper className={classes.paper}>xs=12</Paper> */}
                        <div className={classes.body}>
                            <div>
                                <img alt="Naz MW" src={DP} className={classes.large} />
                            </div>
                            <div className={classes.heading}>
                                <h1>I'm Nazim Firdous Ali</h1>
                                <div className={classes.heading1}>
                                    <Typewriter
                                        options={{
                                            strings: ['Full Stack Developer ', 'React Developer', 'Data Science Engineer'],
                                            autoStart: true,
                                            loop: true,
                                            deleteSpeed: 1,
                                            delay: 25
                                        }}
                                    />
                                </div>
                                <div className="avatar_contact">
                                    <div className="facebook" >
                                        <a href="https://www.facebook.com" target="_blank">
                                        {/* onClick={()=> window.location.href='https://www.instagram.com/' */}
                                            <FaFacebook color='#3b5998'  size="30px" />
                                        </a>
                                    </div>
                                    <div className="insta">
                                        <a href="https://www.instagram.com" target="_blank">
                                            <RiInstagramLine color='#8a3ab9	' size="30px" />
                                        </a>
                                    </div>
                                    <div className="whatsapp">
                                        <a href="https://www.whatsapp.com" target="_blank">
                                            <IoLogoWhatsapp color='#25D366' size="30px" />
                                        </a>
                                    </div>
                                    <div className="git">
                                        <a href="https://www.github.com/NazimFirdousAli" target="_blank">
                                            <AiOutlineGithub color='black' size="30px" />
                                        </a>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div >
    );
}


export default Body
