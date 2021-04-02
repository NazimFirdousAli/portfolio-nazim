import React from 'react'

import image1 from '../Images/2.jpg'

import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({

    root: {
        marginTop:'7%',
        color:'white'
    },
    background: {
        backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ),url(${image1})`,
        height:'500px',
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat', 
        backgroundAttachment: 'fixed',

    },
    heading1:{
        paddingTop:'8%',
        textAlign:'center',
        fontFamily:'Montserrat, sans-serif',
        fontSize:'40px'
    }
})
)

function MySkills() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.background}>
            <p className={classes.heading1}>MY <span style={{color:'#03ABD5'}}>SKILLS</span> </p>
            <div>

            </div>
            </div>

        </div>
    )
}

export default MySkills
