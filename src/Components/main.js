import React from 'react'
import Body from './body.js'
import About from './about.js'
import MySkills from './mySkills.js'
import MyProjects from './myProjects.js'
import image1 from '../Images/2.jpg'
import './main.css'

// import PersistentDrawerRight from './PersistentDrawerRight'

function Main() {
    return (
        <div class="main">
            <Body/>
            <About/>
            <MySkills/>
            <MyProjects/>
            
        </div>
    )
}

export default Main
