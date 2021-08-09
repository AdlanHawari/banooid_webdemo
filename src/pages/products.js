import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Parallax } from 'react-parallax'
import YouTube from 'react-youtube';
import Model3D from '../components/Model3D';
import Feature from '../components/products/feature';
import Spec from '../components/products/Spec';
import Top from '../components/products/top';


function Products() {

    const onReady = (e) => {
        e.target.pauseVideo();
    }

    const opts = {
        // height: '390',
        height: '240',
        // width: '640',
        width: 'window.innerwidth',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    // const checkMobile = () =>{
    //     if(window.innerWidth<768){
            
    //     }
    // }
    
    // useEffect(() => {
    //     checkMobile();
        
    // }, [])
    

    document.title= "Banoo - Products";
    return (
        <section>
            
            
            <div className="pt-20">

                {/* Gambar */}
                <Top/>

                {/* Feature */}
                <div className="px-10 xl:px-40 py-20">
                    <Feature/>

                </div>
                

                {/* 3D model */}
                <div className="block bg-yellow-400 px-10 xl:px-20 py-20 space-y-10 bg-brown-200">
                    <h2 className="flex justify-center">
                        3D Model
                    </h2>
                    <div className="rounded-lg border-2 border-gray-200 bg-white h-96 xl:w-1/2">
                        <Model3D/>
                    </div>
                    
                </div>
                {/* end of 3D model */}

                {/* Deskripsi */}
                <div className="block py-20 space-y-10 bg-green-200 px-10 md:px-40">
                    <h2 className="flex justify-center">
                        Deskripsi
                    </h2>
                    <div className="">
                        <p className="">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo excepturi rerum autem quas corrupti, blanditiis a, recusandae eligendi ea sequi iure quasi pariatur saepe, commodi est eos vero non! Deleniti voluptate tempore porro nostrum possimus dolorem asperiores cumque quam velit vero omnis doloremque similique voluptatum accusantium corrupti dolores iusto neque, reiciendis nam quae dolor adipisci! Nemo possimus itaque perspiciatis vero culpa, odio nihil quos repellat nam voluptate exercitationem totam labore modi quo voluptatem a explicabo dolores quia veniam voluptates hic ipsam earum est. Saepe, corporis modi. Veniam quos esse, aperiam provident asperiores facere harum ipsum nemo ratione odio blanditiis exercitationem.
                        </p>
                    </div>
                </div>

                {/* Video */}
                <div className="flex justify-center px-40 py-20 bg-red-200">
                    <div className="">
                        <YouTube
                            videoId="diwquYeL7DE" 
                            opts={opts} 
                            onReady={onReady}
                            className="rounded-xl"
                        />
                        {/* Video */}
                    </div>
                </div>

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
