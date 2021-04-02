import React from 'react'
import Body from './body.js'
import About from './about.js'
import MySkills from './mySkills.js'
import MyProjects from './myProjects.js'
import Education from './education.js'

import './main.css'

// import PersistentDrawerRight from './PersistentDrawerRight'

function Main() {
    return (
        <div class="main">
            {/* <PersistentDrawerRight/> */}
            <Body/>
            <About/>
            <MySkills/>
            <Education/>
            {/* <MyProjects/> */}
            
        </div>
    )
}

export default Main
