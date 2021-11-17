import React, { Suspense, useRef, useState  } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Model from './Three/Mf_1021'
import Lights from './Three/lights'

export default function Model3D({view}) {

    // const [clicked, setClicked] = useState(false)

    return (
        <>
            <Canvas
                // camera={{position:[-5,4,4], fov:40}}>
                // camera={{position:[-10,4,-5], fov:40}}>
                camera={{position:[10,4,-5], fov:40}}>
                    {/* <Lights/> */}
                    
                    
                <OrbitControls/>
                
                
                <ambientLight intensity={0.5}/>
                <directionalLight intensity={0.5} />

                

                {/* <Suspense 
                fallback={
                    <div>Constructing...</div>
                }> */}
                    <Model/>

                {/* </Suspense> */}
            </Canvas>
            
        </>
    )
}
