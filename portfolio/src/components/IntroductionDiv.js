import React from 'react'
import {motion} from 'framer-motion'
const IntroductionDiv = () =>
{
    return(
        <motion.div className="p-8 bg-gray-800 flex flex-col h-screen">
        <motion.h1
        className="text-white text-3xl md:text-6xl lg:text-7xl"
        style={{fontFamily:"Montserrat"}}

        >A short Introduction</motion.h1>
        </motion.div>
    )
}
export default IntroductionDiv