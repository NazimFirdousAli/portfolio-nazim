import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import schoolImage from '../Images/1.png'
import collegeImage from '../Images/2.png'
import universityImage from '../Images/3.png'
import verticleRoad from '../Images/4.png'
import horizontalRoad from '../Images/road-hori.png'
import StudentGif from '../Images/StudentGif.gif'




const useStyles = makeStyles((theme) => ({

    root: {
        marginTop: '5%'

    },
    school: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
        marginTop: '2%',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '-10px'
        },
        [theme.breakpoints.down('xs')]: {
            height: '90%',
            width: '90%',
            marginBottom: '-1%',
            marginTop: '13%'
        }

    },
    road1: {
        height: '20px',
        width: '100%',
        marginTop: '-18px',
        position: 'absolute',

    },
    college: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.down('md')]: {
            marginLeft: '-140px',
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: '-8px',
            marginLeft: '-36%'
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: '-85%',
            // height: '200px',
            width: '550px'
        }

    },
    road2: {
        marginTop: '-17.6%',
        height: '20px',
        width: '100%',
        position: 'absolute',
        [theme.breakpoints.down('md')]: {
            marginTop: '-235px'

        }

    },
    university: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        // marginTop: '-14%',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '-.2%'
        },
        [theme.breakpoints.down('xs')]: {
            height: '80%',
            width: '80%',
            marginBottom: '-3%',
            marginTop: '1%'
        }

    },
    road3: {
        height: '20px',
        width: '100%',
        position: 'absolute',
        [theme.breakpoints.down('xs')]: {
            marginTop: '23%'
        },
        

    },
    horiRoad: {
        position: 'absolute',
        marginLeft: '98%',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '97.4%'
        },

    },
    horiRoad1: {
        marginTop: '-2.5%',
        position: 'absolute',
        [theme.breakpoints.down('sm')]: {
            marginTop: '-3.5%'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '-9%'
        }

    },
    gif: {
        position: 'absolute',
        marginTop: '-6%',
        zIndex: '4',
        [theme.breakpoints.down('sm')]: {
            marginTop: '-8%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '32px',
            height: '30px',
            marginTop: '-11%'
        }
    }
})
)


function Education() {
    const classes = useStyles();



    function second(a) {
        Element.animate([
            { transform: 'translate(650px,0)' },


        ], {
            duration: a,
            fill: 'forwards'

        })
    }

    function third(a) {
        Element.animate([
            { transform: 'translate(0px,0px)' },
            { transform: 'translate(1320px,0px)' },
            { transform: 'translate(1320px,186px) scaleX(-1)' },
            { transform: ' translate(650px,186px) scaleX(-1)' },
        ], {
            duration: a,
            fill: 'forwards'

        })
    }

    function forth(a) {
        Element.animate([
            { transform: 'translate(0px,0px)' },
            { transform: 'translate(1250px,0px)' },
            { transform: ' translate(1250px,186px)' },
            { transform: ' translate(0px,186px)' },
            { transform: 'translate(0px,386px)' },
            { transform: 'translate(650px,370px)' },
        ], {
            duration: a,
            fill: 'forwards'

        })
    }

    return (
        <div className={classes.root}>
            <div>
                <img className={classes.school} id="School" src={schoolImage} alt="" height="120px" width="450px"
            /*onclick=doSomething()*/ /><br />
            </div>

            <div class="gif">
                <img id="student" className={classes.gif} src={StudentGif} alt="GIF" height="50px" width="50px" />
            </div>

            <div>
                <img className={classes.road1} src={horizontalRoad} alt="" />
                <img className={classes.horiRoad} src={verticleRoad} alt="" height="180px" width="20px" />
            </div>

            <div style={{ marginLeft: "3%" }}>
                <img className={classes.college} id="College" src={collegeImage} height="380px" width="850px" alt=""
            /*onclick="doSomething1()"*/ />
            </div>

            <div>
                <img className={classes.road2} src={horizontalRoad} alt="" />
            </div>

            <div style={{ marginTop: '-190px' }} >
                <img className={classes.horiRoad1} src={verticleRoad} alt="" height="180px" width="20px" />

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
