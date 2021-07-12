import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { HelmetProvider,Helmet } from 'react-helmet-async'
import Slider from '../components/Slider/Slider'
import fajar from '../images/story/fajar2.jpg'
import hary from '../images/story/hary.jpg'

function About() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        

        return()=> window.removeEventListener('scroll', handleScroll);

    },[])
    
    
    const styleImg= {
        transform:`translate(-${offsetY * 0.5}px, ${offsetY * 0.5}px)`,
        // transform:`rotate(30deg)`
        
    }
    
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>Banoo - About</title>
                    <meta name="description" content="About" />
                </Helmet>
            </HelmetProvider>

            {/* <div className="fixed"> */}
            {/* <div className="absolute top-0 inset-x-0 h-screen bg-hero-img bg-cover bg-no-repeat" style={{ 
                            transform: `translateY(${offsetY * 0.5}px)`
                            }}/> */}
            {/* <div className=" h-screen w-screen">
                <img src={fajar} className="fixed right-20 top-40  h-20 z-50" 
                    style={{
                        transform:`translate(-${offsetY * 0.5}rem, ${offsetY * 0.5}rem)` 
                        // styleImg
                    }}/>
                <img src={hary} className="fixed right-20 top-40 h-20" 
                    style={{
                        transform:`translate(${offsetY * 0.6}px, ${offsetY * 0.5}px)` 
                        // styleImg
                }}/>
                <h1 className="fixed left-1/2 top-1/2 z-50">
                    waw
                </h1>

            </div>
            {/* </div> */}

           {/* Headline */}
           <div className="relative pt-20 h-screen bg-blue-200">
               <span>test</span>
               

           </div>
           {/* End of Headline */}

           {/* Founder Story */}
           {/* End of Founder Story */}

            {/* Benefit */}
            {/* End of Benefit */}

            {/* Gallery */}
            {/* End of Gallery */}
            




        </div>
    )
}

export default About
