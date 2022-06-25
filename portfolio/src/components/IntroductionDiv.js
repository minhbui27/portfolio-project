import React from 'react'
import {motion} from 'framer-motion'
import './IntroductionDiv.scss'
const IntroductionDiv = () =>
{
    return(
        <motion.div id="introduction" className="introductionDiv p-8 flex flex-col h-screen"
        
        >
        <motion.h1
        className="text-white text-3xl md:text-6xl lg:text-7xl"
        style={{fontFamily:"Montserrat"}}

        >A short Introduction</motion.h1>
        </motion.div>
    )
}
export default IntroductionDiv