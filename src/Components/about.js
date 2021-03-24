import React from 'react'
import Profile from '../Images/profile.jpg'
import Resume from '../Resume/Resume-Nazim.pdf'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({

    root: {
        marginTop: '5%',
        backgroundColor: 'white',
        marginTop: '-100px',
        paddingTop: '100px',
        [theme.breakpoints.down('xs')]: {
            paddingTop: '0px'

        }

    },
    imageSetting: {
        width: '45%',
        marginLeft: '25%',
        border: '10px solid rgb(0,176,220, .2)',
        // boxShadow:' -5px -5px  #777777'
        // zIndex: '-10'
        [theme.breakpoints.down('xs')]: {
            marginTop: '10%',
        },

    },
    heading: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '30px',
        fontWeight: '100px',
        color: ' rgb(51, 51, 51)',
        [theme.breakpoints.down('sm')]: {
            fontSize: '23px',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '10%',
            fontSize: '21px',
            textAlign: 'center'
        },

    },
    heading1: {
        lineHeight: '29px',
        marginTop: '5%',
        marginRight: '8%',
        fontFamily: 'Montserrat, sans-serif',
        color: ' rgb(51, 51, 51)',
        [theme.breakpoints.down('sm')]: {
            fontSize: '15px',
            lineHeight: '20px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '13px',
            lineHeight: '20px',
            marginLeft: '30px'
        },
    },
    info: {
        listStyle: "none",
        lineHeight: '40px',

        [theme.breakpoints.down('xs')]: {
            marginLeft: '30px',
            fontSize: '13px'
        },
    },
    info1: {
        display: 'inline-block',
    },
    info2: {
        display: 'inline-block',
        marginLeft: '10%',

        [theme.breakpoints.down('md')]: {
            marginLeft: '3%',
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0px',
        },
    },
    buttonDiv: {
        marginTop: '6%',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center'
        }
    },
    button1: {
        backgroundColor: '#00B0DC',
        color: 'white',
        border: 'none',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '14px',
        padding: '15px 25px',
        borderRadius: '4px',
        [theme.breakpoints.down('xs')]: {
            padding: '10px 20px',
        }
    },
    button2: {
        marginLeft: '9%',
        backgroundColor: 'white',
        border: '1px solid #00B0DC',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '14px',
        padding: '15px 25px',
        borderRadius: '4px',
        [theme.breakpoints.down('xs')]: {
            padding: '10px 20px',
            marginLeft: '5%',

        }

    }


}))

function About() {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <img className={classes.imageSetting} src={Profile} alt="Profile Picture" />
                </Grid>
                <Grid item xs={12} sm={6}>

                    <div className={classes.heading}>
                        <b> FULL-STACK DEVELOPER </b>
                    </div>
                    <div className={classes.heading1}>
                        I am <b> Nazim Firdous Ali. </b> I am a simple , creative, enthusiastic and fun-loving person. I always like to create something on my own which is helpful for others.
                        <br />
                        <br />
                        I have vast experience in HTML5, CSS3, Javascript, React js , Node js, GraphQL and on. I have already completed over 10 projects of different buyer throughout the world.
                    </div>
                    <br />
                    <div className={classes.info}>
                        <div className={classes.info1}>
                            <li><u style={{ color: '#A1A1A1' }}><b>Name:</b></u> Nazim Firdous Ali</li>
                            <li><u style={{ color: '#A1A1A1' }}><b>Email:</b></u> nazim.mandviwala98@gmail.com</li>
                        </div>
                        <div className={classes.info2}>
                            <li><u style={{ color: '#A1A1A1' }}><b>Phone:</b></u> +92 346 0929379</li>
                            <li><u style={{ color: '#A1A1A1' }}><b>Hobby:</b></u> Cricket, Coding</li>
                        </div>
                    </div>

                    <div className={classes.buttonDiv}>
                        <button className={classes.button1}>
                            MY SKILLS
                        </button>
                        <a href={Resume} download="Resume-Nazim-Fidous-Ali">
                            <button className={classes.button2}>
                                DOWNLOAD CV
                        </button>
                        </a>
                    </div>
                </Grid>
            </Grid>
            <br />
            <br />
            <br />

        </div>

    )
}

export default About
