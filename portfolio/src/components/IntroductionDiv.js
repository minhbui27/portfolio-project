import React, {useRef,Suspense} from 'react'
import {motion,AnimatePresence} from 'framer-motion/dist/framer-motion'
import {Canvas} from "@react-three/fiber"
import {Text} from "@react-three/drei"
import './IntroductionDiv.scss'
function ScrollingText(props) {
	const ref = useRef();
	let displacement = 0;
	return(
		<group ref={ref}>
		<mesh position={props.position}> 
				// This function below splits the introText intro array elements based on newline, then creates Text elements for each line
				// that are vertically spaced by displacement apart.
				{props.text.split("\n").map((t) => {
				displacement += 1.2;
				console.log(t);
				return <Text key={t} position={[props.position[0],props.position[1]-(displacement-1.2),props.position[2]]} 
				color="yellow"
				anchorX="center" anchorY="middle" fontSize="0.5"
				font='/Inter-Bold.ttf'>{t}</Text>
			})}
		</mesh>
		</group>
	)
}
const IntroductionDiv = () =>
{
	const introText =
		`TESTING 1 
	I'm a student at UCSB`;
	const ref = useRef(null)
	// const isInView = useInView(ref, {once: false})
	return(
		<AnimatePresence>
		<motion.div id="introduction" className="introductionDiv p-8 flex flex-col h-screen"
		ref = {ref}
		// initial = {{opacity: 0}}
		// animate = {{opacity: 1}}
		// exit = {{opacity: 0}}
		>
		<Canvas shadows camera={{position:[0,0,5],fov:70}}>
		<ambientLight intensity={1}/>	
			<Suspense fallback={null}>
				<ScrollingText text={introText} position={[0,0,-1]}/>	
			</Suspense>
		</Canvas>
		</motion.div>
		</AnimatePresence>
	)
}
export default IntroductionDiv
