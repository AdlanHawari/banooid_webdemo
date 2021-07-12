import React, { useEffect, useState } from 'react'
import { Parallax } from 'react-parallax'
import hero from '../images/wew.png'

function Products() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);

        return()=> window.removeEventListener('scroll', handleScroll);

    },[])
    return (
        <section>
            <div className="">
                <Parallax bgImage={hero} strength={200} className="flex h-screen">
                <div className="justify-end">
                    mantap
                </div>
                </Parallax>
                
            </div>

        </section>
        // <section className="flex">
        //     <div className="flex">
        
        //         <div className="absolute top-0 inset-x-0 h-screen bg-hero-img bg-cover bg-no-repeat" style={{ 
        //                 transform: `translateY(${offsetY * 0.2}px)`
        //                 }}/>
                

        //         <div className="flex h-screen w-screen pt-80 z-20">
        //             <h2>mantap</h2>
        //         </div>

        //         <div>

        //         </div>
            
        //     </div>

            

        // </section>
        
    )
}

export default Products
