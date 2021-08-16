import React, { useEffect, useState } from 'react'
import value from '../images/banoo1.png'
import un2 from '../images/values/UN2.png'
import un14 from '../images/values/UN14.png'
import un7 from '../images/values/UN7.png'
import fajar from '../images/fajar_sweden.jpg'

import GalMob from '../components/GalMob'
import Gal from '../components/Gal'
import { useTranslation } from 'react-i18next'



function About() {
    const {t, i18n}  =useTranslation();

    const [isMobile, setMobile] = useState(false);

    document.title="Banoo - About";
    const changeMobile = () =>{
        if(window.innerWidth<768){
            setMobile(true);
        }else{
            setMobile(false);
        }
        // console.log("rendered")
    }
    useEffect(() => {
        // Aos.init();
        changeMobile();
        window.addEventListener('resize',changeMobile)

        return () =>{
          window.removeEventListener('resize',changeMobile);
        }
        
    })
    
    return (
        <div className="overscroll-x-none">
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
                                {t("about.hero.title")}
                                {/* BERSAMA kami tingkatkan produktifitas dan kesehatan lingkungan */}
                                </h2>
                                <p className="text-base text-center lg:text-left">
                                {t("about.hero.desc")}
                                    {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora saepe, rerum suscipit distinctio natus corporis vitae temporibus dolores sunt laboriosam? */}
                                </p>

                            </div>
                            
                            {/* <img src={value} className="pb-10 lg:pb-0 mx-auto sm:mx-0 w-60 sm:w-auto sm:h-40 md:h-80 xl:h-96" /> */}

                            <img src={value} className="lg:mx-auto pb-10 lg:pb-0 w-60 sm:w-80 h-auto lg:w-auto lg:h-80 xl:h-96 " alt=""/>

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
                        <p className="text-base">
                        {t("about.founder.desc")}    
                        {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, quaerat! Iusto, consequatur adipisci placeat tenetur modi inventore veniam rem eos exercitationem eum corrupti aperiam repellat! Quibusdam obcaecati ratione ab reiciendis labore doloribus? Non delectus minima placeat. */}
                        </p>
                    </div>
                
               </div>
           </div>
           {/* End of Founder Story */}

            {/* Value */}
            <div className="py-20 px-10 lg:px-40">
                <div className="block">
                    <h2 className="font-sans-6 text-center pb-10 text-4xl">
                        {t("about.goals.title")}
                        {/* Our Goals */}
                    </h2>
                    <ul className="grid sm:grid-cols-3 gap-4 xl:gap-8">
                        <li className=" rounded-lg shadow-xl p-6">
                            <div className="flex-col text-center space-y-4">

                                <img src={un2} className="h-40 mx-auto" alt=""/>
                                {/* <div className="h-20 shadow-xl bg-no-repeat"
                                    style={{backgroundImage: `url(${fajar})`}}></div> */}
                                <h4 className="px-4 text-lg xl:text-base font-bold">
                                    {/* Achieve national and regional<br/> food security */}
                                    {t("about.goals.point.0.title")}
                                </h4>
                                <p className="text-sm">
                                {t("about.goals.point.0.desc")}
                                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta labore earum provident optio dignissimos beatae nemo corporis ipsam totam quae. */}
                                </p>

                            </div>

                        </li>

                        <li className="rounded-lg shadow-xl p-6">
                            <div className="flex-col  text-center space-y-4">
                                <img src={un14} className="h-40 mx-auto" alt=""/>
                                <h4 className="px-4 text-lg xl:text-base font-bold">
                                    {/* Improving water environment<br/> and life below water */}
                                    {t("about.goals.point.1.title")}
                                </h4>
                                <p className="text-sm">
                                {t("about.goals.point.1.desc")}
                                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta labore earum provident optio dignissimos beatae nemo corporis ipsam totam quae. */}
                                </p>

                            </div>

                        </li>

                        <li className=" rounded-lg shadow-xl p-6">
                            <div className="text-center space-y-4">
                                <img src={un7} className="h-40 mx-auto" alt=""/>
                                <h4 className="px-4 text-lg xl:text-base font-bold">
                                    {/* Increasing yield of aquaculture  
                                    <br className="hidden xl:flex"></br> and fish farmer income */}
                                    {t("about.goals.point.2.title")}
                                </h4>
                                <p className="text-sm">
                                {t("about.goals.point.2.desc")}
                                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta labore earum provident optio dignissimos beatae nemo corporis ipsam totam quae. */}
                                </p>

                            </div>

                        </li>

                    </ul>
                </div>

            </div>
            {/* End of Value */}

            
            {/* Gallery */}
            {/* <div className="flex-1 px-10 py-20 xl:px-40">
                {isMobile?
                <GalleryMobile/>
                :<Gallery/>}
                

            </div> */}
            <div className="px-10 xl:px-40 ">
            {isMobile?
               <GalMob/>
               :
               <Gal/>
            }

            </div>
 

            {/* End of Gallery */}
            

            </div>
        
        {/* End of About Content */}

        </div>
    )
}

export default About
