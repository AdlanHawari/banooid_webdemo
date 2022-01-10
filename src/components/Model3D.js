import React, { Suspense, useRef, useState  } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
// import Model from './Three/Mf_1021'
// import Model from './Three/Model'
// import Model from './Three/Mf_1121'
import Lights from './Three/lights'


// function Model(props) { 
//     // const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/umbrella/model.gltf') 
//     // const { scene } = useGLTF('https://banoo.id/asset/model.gltf') 
    
//     // const { scene } = useGLTF('../') 
//     return <primitive object={scene} {...props}/> 
// }

export default function Model3D({view}) {

    const [clicked, setClicked] = useState(false)

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

                <Suspense fallback={<div>Constructing</div>}>
                    {/* <Model/> */}
                </Suspense>
            </Canvas>
            
        </>
    )
}
