import React, { useRef, Suspense, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion/dist/framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Points, PointMaterial } from '@react-three/drei'
import './IntroductionDiv.scss'
import { Bounds } from '../helpers/BoundsNoRotation.tsx'
import * as random from 'maath/random/dist/maath-random.esm'
function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(7500), { radius: 15 })
  )
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 80
    ref.current.rotation.y -= delta / 100
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color='white'
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

function ScrollingText(props) {
  const ref = useRef()
  let displacement = 0
  return (
    <group ref={ref}>
      <mesh rotation={props.rotation} position={props.position}>
        // This function below splits the introText intro array elements based
        // on newline, then creates Text elements for each line that are
        // vertically spaced by displacement apart.
        {props.text.split('\n').map((t) => {
          displacement += props.separation
          // console.log(t);
          return (
            <Text
              key={t}
              position={[
                props.position[0],
                props.position[1] - (displacement - props.separation),
                props.position[2],
              ]}
              color='yellow'
              anchorX='center'
              anchorY='middle'
              fontSize='0.5'
              font='/Inter-Bold.ttf'
            >
              {t}
            </Text>
          )
        })}
      </mesh>
    </group>
  )
}
const IntroductionDiv = () => {
  const introText = `Hi, my name is Minh Bui
	I'm currently a student studying Computer Engineering at UCSB
	In the future, I aspire to become an excellent Software Engineer
	because I believe that the solution to many problems, as well as the
	development of society will heavily depend on what we create 
	`
  const ref = useRef(null)
  // const isInView = useInView(ref, {once: false})
  return (
    <AnimatePresence>
      <motion.div
        id='introduction'
        className='introductionDiv flex flex-col h-screen'
        ref={ref}
        // initial = {{opacity: 0}}
        // animate = {{opacity: 1}}
        // exit = {{opacity: 0}}
      >
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 70 }}>
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <ScrollingText
              rotation={[-Math.PI / 6, 0, 0]}
              separation={0.8}
              text={introText}
              position={[0, 1, -1]}
            />
            <Stars position={[0, -5, 0]} />
          </Suspense>
        </Canvas>
      </motion.div>
    </AnimatePresence>
  )
}
export default IntroductionDiv
