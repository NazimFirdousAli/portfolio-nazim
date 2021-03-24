import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    root: {
        backgroundColor:'white'
    }
})
)

function MyProjects() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            hello
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            hello
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            hello
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>


        </div>
    )
}

export default MyProjects
