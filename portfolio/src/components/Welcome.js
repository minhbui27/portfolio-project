import * as THREE from 'three'
import React, {Suspense, useRef, useState} from 'react'
import {Canvas, useFrame, useThree} from '@react-three/fiber'
import {softShadows, MeshWobbleMaterial, Text, Points, PointMaterial} from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import { Html } from '@react-three/drei/web'
import BB8 from './Bb8'
import Car from './Car'
import './Welcome.scss'
// Bounds file was made by some random guy on github and i straight up yanked his code. Link to the fork:
// https://codesandbox.io/s/bounds-and-makedefault-forked-y12ie?file=/src/App.js
// Compared to the original Bounds import from @react-three/drei, this version ensures that on window resize(first render or reload) the objects within the bounds doesn't get rotated
import {Bounds} from './BoundsNoRotation.tsx'
function Stars(props) {
    const ref = useRef()
    const [sphere] = useState(() => random.inSphere(new Float32Array(10000), { radius: 15 }))
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 80
        ref.current.rotation.y -= delta / 100
    })
    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
          <PointMaterial transparent color="white" size={0.04} sizeAttenuation={true} depthWrite={false} />
        </Points>
      </group>
    )
  }
function Rig() {
    const { camera, mouse } = useThree()
    const vec = new THREE.Vector3()
    return useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 1, camera.position.z), 0.02))
}
const Welcome = () => {
    return(
        <div className="background h-screen w-full">
            {/* the camera position takes parameter x,y,z. x and y already gives full sphere of rotation, z specifies how
            "far way the camera is from the origin" */}
            <Canvas shadows colorManagement camera={{position: [0,0,8],fov: 70}}>
                <ambientLight intensity={1}/>
                <directionalLight 
                    castShadow
                    position={[0,10,0]}
                    intensity={1} 
                    shadow-mapSize-width={1024} 
                    shadow-mapSize-height={1024} 
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />
                <pointLight position={[-10,0,-20]} intensity={0.5}/>
                <pointLight position={[0,-10,0]} intensity={1.5}/>

                {/* <group>
                    <mesh receiveShadow rotation={[-Math.PI/2,0,0]} position={[0,-3,0]}>
                        <planeBufferGeometry attach="geometry" args={[100,100]}/>
                        <shadowMaterial attach="material" opacity="0.3"/>
                    </mesh>
                </group> */}

                
                <Suspense fallback={null}>
                    <Bounds fit clip observe margin={3} fixedOrientation>
                    <Html position={[-1,4,0]}>
                        <div className='text-white md:opacity-0 opacity-100 align-center'>Use desktop for the best experience</div></Html>
                    {/* <Car position={[0,0,0]}/> */}
                    <BB8 position={[0,0,0]}/>
                    <mesh position={[-6,0,1]}>
                        <Text color="white" anchorX="left" anchorY="middle" fontSize="1" 
                        font="/Inter-Bold.ttf">HI!</Text>
                    </mesh>
                    <mesh position={[-6,-1.2,1]}>
                        <Text color="white" anchorX="left" anchorY="middle" fontSize="1" 
                        font="/Inter-Bold.ttf">I'M MINH</Text>
                    </mesh>
                    <mesh position={[-6,-2.4,1]}>
                        <Text color="white" anchorX="left" anchorY="middle" fontSize="1" 
                        font="/Inter-Bold.ttf">WELCOME TO MY SITE</Text>
                    </mesh>
                    </Bounds>    
                </Suspense>
                <Rig/>
                <Stars position={[0,-5,0]}/>
            
            </Canvas>
        </div>
        
    )
}
export default Welcome;