import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import prod1 from '../images/home/test.jpg'
import prod2 from '../images/home/fisko.jpg'
import antaranews from '../images/media/antaranews.png'
import gatra from '../images/media/gatra.png'
import kickandy from '../images/media/kickandy.png'
import matagaruda from '../images/media/matagaruda.png'
import metrotv from '../images/media/metrotv.png'
import pertamina from '../images/media/pertamina.png'
import sindonews from '../images/media/sindonews.png'
import media_indo from '../images/media/media_indonesia.png'
import cisco from '../images/cisco_gps.png'
import tff from '../images/TFF.png'
import logo from '../images/logo_main.png'
import Slider from '../components/Slider/Slider'
import { useTranslation } from 'react-i18next'
import Aos from 'aos'
import 'aos/dist/aos.css'
import LanguageDropDown from '../components/languageDropDown'
import digital from '../images/home/vision/digitalxhdpi.png'
import productivity from '../images/home/vision/productivityxhdpi.png'
import renewable from '../images/home/vision/renewablexhdpi.png'



function Home() {
    const {t, i18n}  =useTranslation();

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        Aos.init();

        return()=> window.removeEventListener('scroll', handleScroll);

    },[])

    document.title="Banoo - Home";

    return (
        <div>
            {/* <Helmet>
                <title>
                    Banoo - Home
                </title>
            </Helmet> */}
            {/* <HelmetProvider>
                <Helmet>
                    <title>Home</title>
                    <meta name="description" content="Home" />
                </Helmet>
            </HelmetProvider> */}
            
            {/* HomePage -Content */}
            <div className="pb-20">

                {/* Hero - section */}

                
                {/* <div className="flex h-screen"> */}
                <div className="relative h-screen bg-black bg-opacity-30">
        
                {/* Background parallax */}
                    <div className="absolute -z-50 top-0 inset-x-0 h-screen bg-hero-img bg-cover bg-no-repeat" style={{ 
                            transform: `translateY(${offsetY * 0.5}px)`
                            }}/>

                {/* End of Background parallax */}
                {/* Content Parallax */}

                    <div className="absolute bottom-20 iphone7:top-1/2 xl:bottom-20 px-8 sm:px-20 xl:px-40 space-y-10 ">
                        <div className="font-spartan text-xl md:text-4xl "
                        data-aos= "fade-down"
                        data-aos-easing="ease-in-sine" 
                        data-aos-duration="1000"
                        data-aos-delay="0">
                            <h2 className="text-white font-extrabold">
                                {/* {t("about.goals.title")} */}
                                {t("home.hero.title_line_1")}
                                {/* Invest in water */}
                            </h2>
                            <h2 className="text-white font-extrabold">
                                {t("home.hero.title_line_2")}
                                {/* Relieve hunger */}

                            </h2>

                        </div>
                        
                        
                        <div className= "w-full iphone7plus:w-4/5 md:max-w-prose"
                        data-aos= "fade-up"
                        data-aos-easing="ease-in-sine" 
                        data-aos-duration="1000"
                        data-aos-delay="0">
                            <p className="font-spartan text-white text-sm md:text-lg tracking-wide leading-loose">
                                {t("home.hero.subtitle")}
                                {/* Our IoT water quality sensor works with microbubble generator
                                to monitor the quality of water and increase the aquaculture yield
                                in environmentally conscious manner */}
                            </p>
                        </div>

                        {/* <LanguageDropDown/> */}
                                            

                    </div>

                {/* End of Content Parallax */}
                 
            </div>

            {/* End of Hero - section */}

                {/* Why Banoo - Section */}
                <div className="py-20 bg-white sm:py-20 px-14 iphone7:px-10 xl:px-40">
               
                    <h2 className="justify-center text-center font-spartan sm:text-lg xl:text-4xl text-banooGray font-extrabold">
                        {t("home.why_banoo.title")}?
                        {/* {t("home.product.0.desc")} */}
                    </h2>
                    <ul className="grid gap-y-20 md:gap-y-0 md:grid-flow-col md:grid-cols-3 pt-20">
                        <li className="flex flex-col flex-shrink place-items-center">
                            <img src={productivity} alt="" className="h-24"/>
                            <h3 className="py-6 md:py-10  text-center font-spartan font-extrabold text-base xl:text-lg">
                            {/* Dissolved Oxygen Arouser */}
                            {t("home.why_banoo.content.0.title")}
                            </h3>
                            <p className="text-center px-2 text-xs lg:text-base xl:px-6">
                                {t("home.why_banoo.content.0.desc")}
                                {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit reprehenderit magnam similique fugit, deserunt doloribus. */}
                            </p>

                        </li>

                        <li className="flex flex-col place-items-center">
                            <img src={digital} alt="" className="h-24"/>
                            <h3 className="py-6 md:py-10  text-center font-spartan font-extrabold text-base xl:text-lg">
                            {/* Fiskö */}
                            {t("home.why_banoo.content.1.title")}
                            </h3>
                            <p className="text-center px-2 text-xs lg:text-base xl:px-6">
                                {t("home.why_banoo.content.1.desc")}
                                {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit reprehenderit magnam similique fugit, deserunt doloribus. */}
                            </p>

                        </li>

                        <li className="flex flex-col place-items-center">
                            <img src={renewable} alt="" className="h-24"/>
                            <h3 className="py-6 md:py-10  text-center font-spartan font-extrabold text-base xl:text-lg">
                            {/* Banoo Mobile App */}
                            {t("home.why_banoo.content.2.title")}
                            </h3>
                            <p className="text-center px-2 text-xs lg:text-base xl:px-6">
                                {t("home.why_banoo.content.2.desc")}
                                {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit reprehenderit magnam similique fugit, deserunt doloribus. */}
                            </p>

                        </li>
                    </ul>

                    

                </div>
                {/* End of Why Banoo - Section */}

                {/* Shortcut product - Section */}
                <div className="">
                    {/* 1st content  */}
                    <div className="flex flex-col-reverse items-start sm:grid sm:grid-cols-2 space-x-0 sm:space-x-10 bg-bluebg to-white py-10 sm:py-20 px-8 sm:px-20 xl:px-40 ">
                        <div className="pt-8 sm:pt-0 font-serif-6  text-banooGray">
                            <h4 className="font-bold text-xs lg:text-sm xl:text-base">
                                        {/* Mycrofish */}
                                       
                                        {t("home.product.0.title")}
                            </h4>
                            <h3 className="pt-0 lg:pt-10 font-bold text-lg leading-normal lg:text-2xl xl:text-4xl">
                                        {t("home.product.0.subtitle")}
                                        {/* Fullfill oxygen demand in your pond */}
                            </h3>
                            <p className="pt-6 xl:pt-10 text-xs leading-normal lg:text-lg ">
                                {t("home.product.0.desc")}
                                {/* Increase Oxygen rate for better fish and shrimp productions to accelerate your revenue and get better life */}
                            </p>
                            <div className="flex justify-center sm:grid sm:grid-cols-2 pt-4 lg:h-30 lg:pt-10 flex-col sm:space-x-4 space-y-4  sm:space-y-0">
                                <Link to ='/products' className="flex justify-center py-4 shadow-lg bg-banoo rounded-xl transition duration-700 ease-in-out hover:bg-banoo75">
                                    <span  className="xl:px-16 font-serif-6 font-bold text-white text-sm ">
                                        {t("learn_more")}
                                    </span>
                                </Link>
                                <a href="https://preorder.banoo.id " className="flex justify-center py-4 border-2 border-banoo rounded-xl text-banoo transition duration-700 ease-in-out hover:text-banooGray hover:border-banooGray ">
                                    <span  className="xl:px-16 font-serif-6 font-bold   text-sm  ">
                                    {t("preorder")}
                                    </span>
                                    {/* <Link to='/preorder' className="xl:px-16 font-serif-6 font-bold   text-sm  ">
                                        Pre order
                                    </Link> */}
                                </a>
                            </div>

                        </div>
                        <div className="">
                            {/* <img src={fajar} alt=""className="rounded-xl"/> */}
                            <img src={prod1} alt=""className="rounded-xl"/>

                        </div>

                    </div>
                    {/* End of 1st content  */}

                    {/* 2nd content  */}
                    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-x-6 gap-x-10 xl:gap-x-20 bg-white to-white py-10 sm:py-20 px-8 sm:px-20 xl:px-40 ">

                        <div className="">
                            <img src={prod2} alt="" className="rounded-xl"/>

                        </div>

                        <div className="pt-8 sm:pt-0 font-serif-6  text-banooGray">
                            <h4 className="font-bold text-xs lg:text-sm xl:text-base">
                            {t("home.product.1.title")}
                            </h4>
                            <h3 className="pt-0 lg:pt-10 font-bold text-lg leading-normal lg:text-2xl xl:text-4xl">
                            {t("home.product.1.subtitle")}
                            </h3>
                            <p className="pt-6 xl:pt-10 text-xs leading-normal lg:text-lg ">
                            {t("home.product.1.desc")}
                            </p>

                            {/* <div className="flex justify-center sm:grid sm:grid-cols-2 pt-4 lg:h-30 lg:pt-10 flex-col sm:space-x-4 space-y-4  sm:space-y-0">
                                <Link to ='/products' className="flex justify-center py-4 shadow-lg bg-banoo rounded-xl transition duration-700 ease-in-out hover:bg-banoo75">
                                    <span  className="xl:px-16 font-serif-6 font-bold text-white text-sm ">
                                        {t("learn_more")}
                                    </span>
                                </Link>
                                <a href="https://preorder.banoo.id " className="flex justify-center py-4 border-2 border-banoo rounded-xl text-banoo transition duration-700 ease-in-out hover:text-banooGray hover:border-banooGray ">
                                    <span  className="xl:px-16 font-serif-6 font-bold   text-sm  ">
                                    {t("preorder")}
                                    </span>
                                </a>
                            </div> */}

                        </div>
                        

                    </div>
                    {/* End of 2nd content  */}

                    {/* 3rd content  */}
                    <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 space-x-0 sm:space-x-10 xl:space-x-20 bg-bluebg to-white py-10 sm:py-20 px-8 sm:px-20 xl:px-40 ">
                        <div className="pt-8 sm:pt-0 font-serif-6  text-banooGray">
                            <h4 className="font-bold text-xs lg:text-sm xl:text-base">
                            {t("home.product.2.title")}
                            </h4>
                            <h3 className="pt-0 lg:pt-10 font-bold text-lg leading-normal lg:text-2xl xl:text-4xl">
                            {t("home.product.2.subtitle")}
                                {/* <br/>to Your Hand  */}
                            </h3>
                            <p className="pt-6 xl:pt-10 text-xs leading-normal lg:text-lg ">
                            {t("home.product.2.desc")}
                            </p>
                            
                            {/* <div className="flex justify-center sm:grid sm:grid-cols-2 pt-4 lg:h-30 lg:pt-10 flex-col sm:space-x-4 space-y-4  sm:space-y-0">
                                <Link to ='/products' className="flex justify-center py-4 shadow-lg bg-banoo rounded-xl transition duration-700 ease-in-out hover:bg-banoo75">
                                    <span  className="xl:px-16 font-serif-6 font-bold text-white text-sm ">
                                        {t("learn_more")}
                                    </span>
                                </Link>
                            </div> */}

                        </div>
                        <div className="">
                            <img src={prod2} alt="" className="rounded-xl"/>

                        </div>

                    </div>
                    {/* End of 3rd content  */}

                </div>
                {/* End of Shortcut product - Section */}

                {/* Kawan Banoo Story - Section */}
                {/* <div className="py-20 xl:h-screen md:px-20 xl:px-40 bg-gradient-to-b from-bluebg to-white">
                    <h2 className="flex justify-center font-spartan sm:text-lg lg:text-2xl xl:text-4xl text-banooGray font-extrabold">
                        
                        {t("home.story")}
                        
                    </h2>
                    <div className="pt-10 xl:pt-20 relative w-auto">
                       <Slider />
                    </div>
                    
                </div> */}
                
                        {/* End of Slider */}

                        
                {/* End of Kawan Banoo Story - Section */}

                {/* Awards - Section */}
                <div className="py-10 xl:py-40 px-8 iphone7:px-20 xl:px-40 bg-white">
                    <h2 className="flex justify-center text-center font-spartan sm:text-lg lg:text-2xl xl:text-4xl text-banooGray font-extrabold">
                        {/* Awards */}
                        {t("home.awards")}
                    </h2>
                    {/* <div className="pt-10 sm:pt-20 lg:pt-20 grid grid-rows-2 gap-y-6 sm:gap-y-10 md:grid-cols-2 gap-x-2 xl:gap-x-10 place-items-center"> */}
                    {/* <div className="pt-10 sm:pt-20 flex flex-col justify-center place-items-center xl:flex-row gap-y-6 sm:gap-10 xl:gap-20"> */}
                    <div className="pt-10 sm:pt-20 flex flex-col justify-center place-items-center xl:flex-row space-y-6 sm:gap-10 xl:space-x-20">
                        <img src={cisco} alt="" className="h-20 sm:h-40"/>
                        <img src={tff} alt="" className="h-20 sm:h-40"/>
                    </div>
                </div>
                {/* End of Awards - Section */}

                {/* Partners & Media Coverage - Section */}
                <div className="py-10 sm:py-40 px-14 iphone7:px-20 xl:px-40">
                    <h2 className="flex justify-center text-center font-spartan sm:text-lg xl:text-4xl text-banooGray font-extrabold">
                        {/* Partners and Media Coverage */}
                        {t("home.partners")}
                    </h2>
                    <div className="pt-10 sm:pt-20 grid grid-cols-2 sm:grid-cols-4 gap-x-10 lg:gap-x-2 gap-y-10 sm:gap-y-20 place-items-center">
                        <img src={matagaruda} alt="" className="lg:h-20"/>
                        <img src={pertamina} alt="" className="w-40"/>
                        <img src={sindonews} alt="" className="w-40"/>
                        <img src={gatra} alt="" className="w-20"/>
                        <img src={kickandy} alt="" className="lg:h-20"/>
                        <img src={antaranews} alt="" className="w-40"/>
                        <img src={media_indo} alt="" className="w-40"/>
                        <img src={metrotv} alt="" className="w-40"/>

                    </div>
                </div>
                {/* End of Partners & Media Coverage - Section */}


            </div>

            {/* End of HomePage - Content */}

            
        </div>
    )
}

export default Home
