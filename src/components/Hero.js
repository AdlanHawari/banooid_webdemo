import React from 'react'
import { Parallax } from 'react-parallax'
import hero from '../images/wew.png'

const Hero = () => {
    return (
        <div>
            <Parallax bgImage={hero} strength={300}>

            </Parallax>
            
        </div>
    )
}

export default Hero
