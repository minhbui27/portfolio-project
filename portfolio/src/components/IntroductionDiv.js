import React, {useRef,Suspense} from 'react'
import {motion,AnimatePresence} from 'framer-motion/dist/framer-motion'
import {Canvas} from "@react-three/fiber"
import {Text} from "@react-three/drei"
import './IntroductionDiv.scss'
function ScrollingText(props) {
	const ref = useRef();
	return(
		<group ref={ref}>
			<mesh position={props.position}>
				<Text color="yellow">{props.text}</Text>
			</mesh>
		</group>
	)
}
const IntroductionDiv = () =>
{
	const ref = useRef(null)
	// const isInView = useInView(ref, {once: false})
	return(
		<AnimatePresence>
		<motion.div id="introduction" className="introductionDiv p-8 flex flex-col h-screen"
		ref = {ref}
		initial = {{opacity: 0}}
		animate = {{opacity: 1}}
		exit = {{opacity: 0}}
		>
			<Canvas shadows camera={{position:[0,0,0],fov:70}}>
				<ambientLight intensity={1}/>	
				<Suspense fallback={null}>
					<ScrollingText text={"TESTING"} position={[0,0,-1]}/>	
				</Suspense>
			</Canvas>
		</motion.div>
		</AnimatePresence>
	)
}
export default IntroductionDiv
