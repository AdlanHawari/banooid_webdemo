import React, { useEffect, useRef, useState } from 'react'
import { HelmetProvider,Helmet } from 'react-helmet-async'
import fajar from '../images/fajar_sweden.jpg'
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

            {/* About Content */}
            
            <div className="pb-20">

            

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
           <div className="h-screen bg-blue-200">


           </div>
           {/* End of Headline */}

           {/* Founder Story */}
           <div className=
        //    "flex py-20 bg-white sm:py-20 px-14 iphone7:px-10 xl:px-40"
        "flex items-center space-x-20 py-20 bg-white px-14 xl:px-40"
        >
               <img src={fajar} alt="" className="h-80"/>
               <div className="block space-y-10">
                <h3>Founder title</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, quaerat! Iusto, consequatur adipisci placeat tenetur modi inventore veniam rem eos exercitationem eum corrupti aperiam repellat! Quibusdam obcaecati ratione ab reiciendis labore doloribus? Non delectus minima placeat. Excepturi pariatur rerum reiciendis!</p>
               </div>
            
           </div>
           {/* End of Founder Story */}

            {/* Benefit */}
            {/* End of Benefit */}

            {/* Gallery */}
            <div className="py-20 bg-pink-200 px-14 xl:px-40">
                <div className="grid grid-rows-2 grid-flow-col gap-4">
                    <span className="h-40 w-80 bg-hero-img bg-cover">1</span>
                    <div>3</div>
                    <div className="place-self-center">1</div>
                    <div>3</div>
                {/* <img src={fajar} alt="" className="w-20 place-self-auto object-fit"/>
                <img src={fajar} alt="" className="w-20 place-self-auto object-fit"/>
                <img src={fajar} alt="" className="w-20 place-self-auto object-fit"/>
                <img src={fajar} alt="" className="w-20 place-self-auto object-fit"/>
                <img src={fajar} alt="" className="w-20 place-self-auto object-fit"/>
                <img src={fajar} alt="" className="w-20 place-self-auto object-fit"/>
                <img src={fajar} alt="" className="w-20 place-self-auto object-fit"/>
                <img src={fajar} alt="" className="w-20 place-self-auto object-fit"/>
                <img src={fajar} alt="" className="w-20 place-self-auto object-fit"/>
                <img src={fajar} alt="" className="w-20 place-self-auto object-fit"/>
                <img src={fajar} alt="" className="w-20 place-self-auto object-fit"/>
                <img src={fajar} alt="" className="w-20 place-self-auto object-fit"/> */}
                    

                </div>
            </div>

            {/* End of Gallery */}
            

            </div>
        
        {/* End of About Content */}

        </div>
    )
}

export default About
