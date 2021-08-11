import React, { useEffect } from 'react'
import { useState } from 'react';
import { Helmet } from 'react-helmet-async'
import { Parallax } from 'react-parallax'
import YouTube from 'react-youtube';
import Model3D from '../components/Model3D';
import Feature from '../components/products/feature';
import Spec from '../components/products/Spec';
import Top from '../components/products/top';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Section3d from '../components/products/section3d';
import VideoPlayer from '../components/products/videoPlayer';
import YoutubeEmbed from '../components/products/youtubeembed';
import DescriptionSection from '../components/products/descriptionSection';



function Products() {

    

    

    // const checkMobile = () =>{
    //     if(window.innerWidth<768){
            
    //     }
    // }
    
    useEffect(() => {
        // checkMobile();
        console.log("view:", view3d)
        Aos.init();
        
    }, [])
    const [view3d, setView3d] = useState(false)    

    document.title= "Banoo - Products";
    return (
        <section>
            
            
            <div className="pt-20 bg-banooWhite">

                {/* Gambar */}
                <Top/>

                {/* Feature */}
                <div className="px-10 lg:px-40 py-8 lg:py-10">
                    <Feature/>

                </div>
                

              
                {/* Deskripsi */}
                
                <DescriptionSection/>
                

               
                  {/* 3D model */}
               

                <div className="px-10 lg:px-40">
                    <Section3d/>
                </div>
                {/* end of 3D model */}


                {/* Spesifikasi */}
                <div className="block px-10 md:px-40 items-center justify-center h-screen bg-yellow-200">
                    <div className="">
                        Spesifikasi
                    </div>
                    <Spec/>
                </div>

                {/* FAQ */}
                
                
            </div>

        </section>
     
        
    )
}

export default Products
