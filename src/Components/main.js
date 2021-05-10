import React from 'react'
import Signature from './signature.js'
import Body from './body.js'
import About from './about.js'
import MySkills from './mySkills.js'
import MyProjects from './myProjects.js'
import Education from './education.js'
import PersistentDrawerRight from './PersistentDrawerRight'

import './main.css'

// import PersistentDrawerRight from './PersistentDrawerRight'

function Main() {
    return (
        <div class="main">
            {/* <PersistentDrawerRight/> */}
            <Signature/>
            {/* <Body/> */}
            <About/>
            <MySkills/>
            <Education/>
            {/* <MyProjects/> */}
            
        </div>
    )
}

export default Main
