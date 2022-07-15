import React, {useRef} from 'react'
import {motion,AnimatePresence} from 'framer-motion/dist/framer-motion'
import {Canvas} from "@react-three/fiber"
import './IntroductionDiv.scss'
const IntroductionDiv = () =>
{
	const ref = useRef(null)
	// const isInView = useInView(ref, {once: false})
	return(
		<AnimatePresence>
		<Canvas>
			<motion.div id="introduction" className="introductionDiv p-8 flex flex-col h-screen"
			ref = {ref}
			initial = {{opacity: 0}}
			animate = {{opacity: 1}}
			exit = {{opacity: 0}}
			>
			TESTING
			</motion.div>
		</Canvas>
		</AnimatePresence>
		// // <AnimatePresence>
		// <motion.div ref={ref} id="introduction" className="introductionDiv p-8 flex flex-col h-screen"
		// initial = {{opacity: 0}}
		// animate = {{opacity: 1}}
		// exit = {{opacity: 0}}
		// >
		// <motion.h1
		// className="text-white text-3xl md:text-6xl lg:text-7xl"
		// style={{fontFamily:"Montserrat"}}

		// >A short Introduction</motion.h1>
		// </motion.div>
		// // </AnimatePresence>
	)
}
export default IntroductionDiv
