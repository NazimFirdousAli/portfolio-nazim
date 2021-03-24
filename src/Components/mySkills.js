import React from 'react'

import image1 from '../Images/2.jpg'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    root: {
        marginTop:'7%',
        // backgrounColor:'linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) )'
        // backgroundColor: 'rgba(52, 52, 52, 0.8)'

        // backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ),url(${image1})`,
        // height: '630px',
        // backgroundPosition: 'center',
        // backgroundSize: '100%',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition:'fixed'
    },
    background:{
    }
})
)

function MySkills() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.background}>
                hwllo
                hello
                <br/>
                <br/>
            </div>

        </div>
    )
}

export default MySkills
