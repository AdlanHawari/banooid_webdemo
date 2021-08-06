import React, { useEffect, useRef, useState } from 'react'
import { HelmetProvider,Helmet } from 'react-helmet-async'
import fajar from '../images/fajar_sweden.jpg'
import hary from '../images/story/hary.jpg'
import bakrie from '../images/story/bakrie.jpeg'
import fajargem from '../images/story/fajar2.jpg'
import value from '../images/banoo1.png'
import un2 from '../images/values/UN2.png'
import un14 from '../images/values/UN14.png'
import un7 from '../images/values/UN7.png'
import gal1 from '../images/gallery/site_1.jpg'
import gal2 from '../images/gallery/sensor.jpg'
import gal3 from '../images/gallery/10.png'
import gal4 from '../images/gallery/site_2.JPG'
import gal5 from '../images/gallery/kick_andy.jpeg'
import gal6 from '../images/gallery/pancasila.JPG'
import Aos from 'aos'
import 'aos/dist/aos.css'



function About() {

    const [isMobile, setMobile] = useState(false);

    document.title="Banoo - About";
    const changeMobile = () =>{
        if(window.innerWidth<768){
            setMobile(true);
        }else{
            setMobile(false);
        }
    }
    useEffect(() => {
        Aos.init();
        changeMobile();
        
    }, [])
    
    return (
        <div>
            {/* <HelmetProvider> */}
                {/* <Helmet>
                    <title>Banoo - About</title>
                    <meta name="description" content="About" />
                </Helmet> */}
            {/* </HelmetProvider> */}

            {/* About Content */}
            
            <div className="pb-20">

           {/* Headline */}
                {/* <div className="block sm:flex py-40 xl:py-0 xl:h-screen lg:items-center lg:justify-center "> */}
                <div className=" h-auto xl:h-screen pt-20">

                    
                    <div className="bg-blue-300 block sm:flex py-16 md:py-20 xl:py-40 h-auto xl:h-full sm:items-center lg:justify-center ">
                        <div className=" flex flex-col-reverse items-center lg:flex-row lg:justify-between px-10 lg:px-40  lg:space-x-10 xl:space-x-40 ">
                            <div className=" flex-col block space-y-10">
                                {/* <h2 className="leading-loose xl:leading-loose xl:text-2xl">
                                    Bersama kami memperbaiki kualitas air yang sehat untuk kehidupan ikan budidaya
                                </h2> */}
                                <h2 className="text-center lg:text-left uppercase font-spartan font-extrabold text-2xl  leading-loose xl:leading-loose"> {/*leadingloose harus diset di responsive*/}
                                BERSAMA kami tingkatkan produktifitas dan kesehatan lingkungan
                                </h2>
                                <p className="text-base text-center lg:text-left">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora saepe, rerum suscipit distinctio natus corporis vitae temporibus dolores sunt laboriosam?
                                </p>

                            </div>
                            
                            {/* <img src={value} className="pb-10 lg:pb-0 mx-auto sm:mx-0 w-60 sm:w-auto sm:h-40 md:h-80 xl:h-96" /> */}

                            <img src={value} className="lg:mx-auto pb-10 lg:pb-0 w-60 sm:w-80 h-auto lg:w-auto lg:h-80 xl:h-96 "/>

                        </div>
                    </div>
                    



                </div>
           {/* End of Headline */}

           {/* Founder Story */}
           <div className=" py-20"
        //    "flex py-20 bg-white sm:py-20 px-14 iphone7:px-10 xl:px-40"
        
        >
                <div className="block lg:flex lg:items-start xl:items-center space-y-10 lg:space-y-0 lg:space-x-20 xl:space-x-20 bg-white px-10 lg:px-40" >

                
                    <img src={fajar} alt="" className="mx-auto lg:mx-0 w-60 h-auto xl:w-auto xl:h-80 rounded-xl"/> 
                    
                    <div className="block text-center lg:text-left space-y-10">
                        <h3 className="uppercase font-spartan text-2xl font-extrabold tracking-wide">Petani kuat,
                        <br className="md:hidden lg:flex xl:hidden"></br> rakyat sehat</h3>
                        <p className="text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, quaerat! Iusto, consequatur adipisci placeat tenetur modi inventore veniam rem eos exercitationem eum corrupti aperiam repellat! Quibusdam obcaecati ratione ab reiciendis labore doloribus? Non delectus minima placeat.</p>
                    </div>
                
               </div>
           </div>
           {/* End of Founder Story */}

            {/* Value */}
            <div className="py-20 px-10 lg:px-40">
                <div className="block">
                    <h2 className="font-sans-6 text-center pb-10 text-4xl">
                        Our Goals
                    </h2>
                    <ul className="grid sm:grid-cols-3 gap-4 xl:gap-8">
                        <li className=" rounded-lg shadow-xl p-6">
                            <div className="flex-col text-center space-y-4">

                                <img src={un2} className="h-40 mx-auto" />
                                {/* <div className="h-20 shadow-xl bg-no-repeat"
                                    style={{backgroundImage: `url(${fajar})`}}></div> */}
                                <h4 className="text-lg xl:text-base font-bold">
                                Achieve national and regional<br/> food security
                                </h4>
                                <p className="text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta labore earum provident optio dignissimos beatae nemo corporis ipsam totam quae.
                                </p>

                            </div>

                        </li>

                        <li className="rounded-lg shadow-xl p-6">
                            <div className="flex-col  text-center space-y-4">
                                <img src={un14} className="h-40 mx-auto" />
                                <h4 className="text-lg xl:text-base font-bold">
                                    Improving water environment<br/> and life below water
                                </h4>
                                <p className="text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta labore earum provident optio dignissimos beatae nemo corporis ipsam totam quae.
                                </p>

                            </div>

                        </li>

                        <li className=" rounded-lg shadow-xl p-6">
                            <div className="text-center space-y-4">
                            <img src={un7} className="h-40 mx-auto" />
                            <h4 className="text-lg xl:text-base font-bold">
                                    Increasing yield of aquaculture  
                                    <br className="hidden xl:flex"></br> and fish farmer income
                                </h4>
                                <p className="text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta labore earum provident optio dignissimos beatae nemo corporis ipsam totam quae.
                                </p>

                            </div>

                        </li>

                    </ul>
                </div>

            </div>
            {/* End of Value */}

            
            {/* Gallery */}
            <div className="flex-1 px-10 py-20 xl:px-40">
                <ul className="grid grid-cols-2 md:grid-cols-7 grid-rows-7 md:grid-rows-2 gap-2 h-screen md:h-60 lg:h-80 grid-flow-row md:grid-flow-col">
                    <li data-aos="fade-right"
                    data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="md:col-span-2 rounded-lg shadow-xl bg-cover bg-center"
                    style={{backgroundImage: `url(${gal1})`}}>
                        {/* <img src={fajar} className="object-fill object-center" /> */}
                        
                    </li>
                    <li data-aos={isMobile?"fade-left":"fade-right"} data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className=" rounded-lg shadow-xl bg-cover bg-right-top"
                    style={{backgroundImage: `url(${gal2})`}}>
                        {/* <div className="w-24">1</div> */}
                    </li>
                    <li data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="col-span-2 bg-yellow-400 rounded-lg shadow-xl bg-cover bg-center"
                    style={{backgroundImage: `url(${gal3})`}}>
                        {/* <div className="w-24">2</div> */}
                    </li>
                    <li data-aos={isMobile?"fade-right":"fade-down"} data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="bg-yellow-400 rounded-lg shadow-xl bg-cover bg-center"
                    style={{backgroundImage: `url(${gal4})`}}>
                        {/* <div className="w-24">3</div> */}
                    </li>
                    <li data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="row-span-2 bg-yellow-400 rounded-lg shadow-xl bg-cover bg-center"
                    style={{backgroundImage: `url(${fajar})`}}>
                        {/* <div className="w-24">4</div> */}
                        </li>
                    <li data-aos={isMobile?"fade-right":"fade-down"} data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="bg-yellow-400 rounded-lg shadow-xl bg-cover bg-top"
                    style={{backgroundImage: `url(${gal5})`}}>
                        {/* <div className="w-24">5</div> */}
                        </li>
                    <li data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="col-span-2 bg-yellow-400 rounded-lg shadow-xl bg-cover bg-center"
                    style={{backgroundImage: `url(${gal6})`}}>
                        {/* <div className="w-24">6</div> */}
                        </li>
                    <li data-aos={isMobile?"fade-right":"fade-left"} data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="md:col-span-2 bg-yellow-400 rounded-lg shadow-xl bg-cover bg-top"
                    style={{backgroundImage: `url(${hary})`}}>
                        {/* <div className="w-24">7</div> */}
                        </li>
                    <li data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="bg-yellow-400 rounded-lg shadow-xl bg-cover"
                    style={{backgroundImage: `url(${fajar})`}}>
                        {/* <div className="w-24">8</div> */}
                        </li>
                    
                    
                    
                    
                    
                    
                </ul>

            </div>
 

            {/* End of Gallery */}
            

            </div>
        
        {/* End of About Content */}

        </div>
    )
}

export default About
