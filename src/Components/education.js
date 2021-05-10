import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import schoolImage from '../Images/1.png'
import collegeImage from '../Images/2.png'
import universityImage from '../Images/3.png'
import verticleRoad from '../Images/4.png'
import horizontalRoad from '../Images/road-hori.png'
import StudentGif from '../Images/StudentGif.gif'

import useWebAnimations from "@wellyshen/use-web-animations";





const useStyles = makeStyles((theme) => ({

    root: {
        marginTop: '5%'

    },
    school: {
        position: 'relative',
        marginTop: '2%',
        [theme.breakpoints.down('sm')]: {
            // marginBottom: '-10px'
        },
        [theme.breakpoints.down('xs')]: {
            height: '60px',
            width: '250px',
            marginBottom: '-1%',
            marginTop: '13%'
        }

    },
    road1: {
        height: '20px',
        width: '100%',
        marginTop: '-18px',
        position: 'absolute',
        [theme.breakpoints.down('xs')]: {
            height: '10px',
            marginTop: '-1px'
        }


    },
    college: {
        marginTop: '2%',
        marginBottom: '-1%',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '5%',
            marginBottom: '-13px',
            marginTop: '20px'
        },
        [theme.breakpoints.down('xs')]: {
            height: '70%',
            width: '70%',
            marginTop: '13%'
        }

    },
    road2: {
        height: '20px',
        width: '100%',
        position: 'absolute',
        [theme.breakpoints.down('sm')]: {
            marginTop: '0px'
        },
        [theme.breakpoints.down('xs')]: {
            height: '10px',
        }

    },
    university: {
        marginTop: '3%',
        marginBottom: '-.5%',
        [theme.breakpoints.down('sm')]: {
            // marginBottom: '-.2%',
            marginTop: '30px'
        },
        [theme.breakpoints.down('xs')]: {
            height: '70%',
            width: '70%',
            marginBottom: '-1%',
        }

    },
    road3: {
        height: '20px',
        width: '100%',
        position: 'absolute',
        [theme.breakpoints.down('xs')]: {
            height: '10px'
        },
    },
    horiRoad: {
        position: 'absolute',
        marginLeft: '98.5%',
        [theme.breakpoints.down('md')]: {
            marginLeft: '98%'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '97.4%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '10px',
            height: '100px',
            marginLeft: '97%'
        }

    },
    horiRoad1: {
        marginTop: '1%',
        position: 'absolute',
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.down('xs')]: {
            width: '10px',
            height: '100px',
        }

    },
    gif: {
        position: 'absolute',
        marginTop: '-4%',
        zIndex: '4',
        [theme.breakpoints.down('sm')]: {
            marginTop: '-8%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '32px',
            height: '30px',
            // marginTop: '-11%'
        }
    }
})
)


function Education() {
    const classes = useStyles();

    const { ref, getAnimation } = useWebAnimations({
        keyframes: { transform: "translateX(600px)" },
        timing: { duration: 1000, fill: "forwards" },
    });

    const speedUp = () => {
        const animation = getAnimation();
        animation.updatePlaybackRate(animation.playbackRate * 2);
        
    };

    const jumpToHalf = () => {
        const animation = getAnimation();
        animation.currentTime = animation.effect.getTiming().duration / 2;
    };


    return (
        <div className={classes.root}>
            <div style={{ textAlign: 'center' }}>
                <img className={classes.school} id="School" src={schoolImage} alt="" height="120px" width="450px"
                    onClick={speedUp} /><br />
            </div>

            <div class="gif">
                <img id="student" className={classes.gif} src={StudentGif} alt="GIF" height="50px" width="50px" />
            </div>

            <div>
                <img className={classes.road1} src={horizontalRoad} alt="" />
                <img className={classes.horiRoad} src={verticleRoad} alt="" height="180px" width="20px" />
            </div>

            <div style={{ textAlign: 'center' }}>
                <img className={classes.college} id="College" src={collegeImage} height="150px" width="450px" alt=""
                    onclick="doSomething1()" />
            </div>

            <div>
                <img className={classes.road2} src={horizontalRoad} alt="" />
                <img className={classes.horiRoad1} src={verticleRoad} alt="" height="180px" width="20px" />
            </div>

            <div style={{ textAlign: 'center' }} >

                <img className={classes.university} id="University" src={universityImage} height="140px" width="450px" alt=""
            /*onclick="doSomething2()"*/ />
            </div>

            <div>
                <img className={classes.road3} src={horizontalRoad} alt="" />
            </div>

        </div>
    )
}

export default Education
