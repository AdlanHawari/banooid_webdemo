import React, { useEffect, useState } from 'react'
import un2 from '../images/values/UN2.png'
import un14 from '../images/values/UN14.png'
import un7 from '../images/values/UN7.png'
import fajar from '../images/fajar_sweden.jpg'
import DescriptionSection from '../components/about/descriptionSection';
import GalMob from '../components/GalMob'
import Gal from '../components/Gal'
import { useTranslation } from 'react-i18next'



function About() {
    const {t, i18n}  =useTranslation();

    const [isMobile, setMobile] = useState(false);
    const [isIpad, setiPad] = useState(false);

    document.title="Banoo - About";
    const changeMobile = () =>{
        if(window.innerWidth<768){
            setMobile(true);
        }else{
            setMobile(false);
        }
        // console.log("rendered")
    }

    const changeiPad = () => {
        if(window.innerWidth>=768&&window.innerWidth<1022){
            setiPad(true);
        }else{
            setiPad(false);
        }
    }

    useEffect(() => {
        // Aos.init();
        changeMobile();
        changeiPad();
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
                {/* <div className="absolute inset-0 bg-black bg-opacity-30"/> */}
               
               
               <div className="bg-hero-about bg-cover bg-no-repeat relative h-screen pt-20">
                   
                   <div className="absolute bg-black inset-0 bg-opacity-40"/>
                   <div className="absolute top-1/2 transform -translate-y-1/2 left-0 w-full">
                       <div className="block space-y-10 px-4 md:px-20 lg:px-0">
                        <h2 className="text-white text-center uppercase font-spartan font-extrabold text-2xl md:leading-loose">
                                {t("about.hero.title")}
                            </h2>
                            <p className="text-white text-lg text-center">
                                {t("about.hero.desc")}
                            </p>
                       </div>
                   </div>
                   {/* <div className="absolute top-0 left-0 bg-gray-500 h-screen">
                        <h2 className="text-white text-center uppercase font-spartan font-extrabold text-2xl leading-loose">
                            {t("about.hero.title")}
                        </h2>
                        <p className="text-white text-lg text-center">
                            {t("about.hero.desc")}
                        </p>

                   </div> */}

               </div>


               {/* <div className="relative h-auto xl:h-screen pt-20">
                    <div className="bg-hero-about block sm:flex py-16 md:py-20 xl:py-40 h-auto xl:h-full sm:items-center lg:justify-center ">
                        <div className=" flex flex-col-reverse items-center lg:flex-row lg:justify-between px-10 lg:px-40  lg:space-x-10 xl:space-x-40 ">
                            <div className="flex-col block space-y-10">
                                <h2 className="text-white text-center uppercase font-spartan font-extrabold text-2xl  leading-loose xl:leading-loose">
                                {t("about.hero.title")}
                                </h2>
                                <p className="text-white text-base text-center">
                                {t("about.hero.desc")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
           {/* End of Headline */}

           {/* Founder Story */}
           <div className=" py-20"
        //    "flex py-20 bg-white sm:py-20 px-14 iphone7:px-10 xl:px-40"
        
        >
                {/* <div className="block lg:flex lg:items-start xl:items-center space-y-10 lg:space-y-0 lg:space-x-20 xl:space-x-20 bg-white px-10 lg:px-40" > */}
                <div className="lg:pt-20 block lg:flex lg:items-start xl:items-center space-y-10 lg:space-y-0 lg:space-x-10 xl:space-x-20 bg-white px-10 lg:px-20 xl:px-40" >

                
                    {/* <img src={fajar} alt="" className="mx-auto lg:mx-0 w-60 h-auto xl:w-auto xl:h-80 rounded-xl"/>  */}
                    <img src={fajar} alt="" className="mx-auto lg:mx-0 w-60 h-auto lg:w-auto lg:h-80 xl:h-80 rounded-xl"/> 
                    
                    <div className="block text-center lg:text-left space-y-10">
                        {/* <h3 className="uppercase font-spartan text-2xl font-extrabold tracking-wide">Petani kuat, */}
                        <h3 className="uppercase font-spartan text-xl xl:text-2xl font-extrabold tracking-wide">{t("about.founder.title_1")}
                        {/* <br className="md:hidden lg:flex xl:hidden"></br> rakyat sehat</h3> */}
                        <br className="md:hidden lg:flex xl:hidden"></br> {t("about.founder.title_2")}</h3>
                        
                        <p className="text-base text-center lg:text-left">
                        {t("about.founder.desc")}    
                        {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, quaerat! Iusto, consequatur adipisci placeat tenetur modi inventore veniam rem eos exercitationem eum corrupti aperiam repellat! Quibusdam obcaecati ratione ab reiciendis labore doloribus? Non delectus minima placeat. */}
                        </p>
                    </div>
                
               </div>
           </div>
           {/* End of Founder Story */}

            {/* Value */}
            <div className="py-20 px-10 xl:px-40">
                <div className="block">
                    <h2 className="font-sans-6 text-xl xl:text-4xl font-extrabold text-center pb-10 text-4xl">
                        {t("about.goals.title")}
                        {/* Our Goals */}
                    </h2>
                    <ul className="grid lg:grid-cols-3 gap-4 xl:gap-8">
                        <li className=" rounded-lg shadow-xl p-6">
                            <div className="flex-col text-center space-y-4">

                                <img src={un2} className="h-40 mx-auto" alt=""/>
                                {/* <div className="h-20 shadow-xl bg-no-repeat"
                                    style={{backgroundImage: `url(${fajar})`}}></div> */}
                                <h4 className="px-4 capitalize text-lg xl:text-base font-bold">
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
                                <h4 className="px-4 capitalize text-lg xl:text-base font-bold">
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

                                <h4 className="px-4 capitalize text-lg xl:text-base font-bold">
                                    {/* Increasing yield of aquaculture  
                                    <br className="hidden xl:flex"></br> and fish farmer income */}
                                    {t("about.goals.point.2.title_1")}
                                    {!isIpad?
                                        <br/>
                                        :
                                        ` ` 
                                    }
                                    {t("about.goals.point.2.title_2")}
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


            <DescriptionSection t={t}/>
            

            <div className="py-20 px-10 xl:px-40 ">
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
