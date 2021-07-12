import React from 'react'
import { Helmet } from 'react-helmet'
import logo_main from '../images/logo_main.png'
import hero from '../images/hero.jpg'
import fajar from '../images/fajar.jpg'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <Helmet>
                <title>
                    Banoo - Home
                </title>
            </Helmet>

            {/* hero - section */}
            {/* <div className="bg-hero-img bg-cover h-screen w-screen">
                <h1>mampus</h1>
            </div> */}

            
            <div className="container py-20">
                {/* why banoo? */}
                {/* <div className="">

                    
                    <div className="flex pb-20 justify-center">
                        <h2 className="font-spartan font-extrabold text-3xl ">
                            Why Banoo!
                        </h2>
                        
                    </div>
                    <div className="grid md:grid-cols-3  justify-items-center">
                        <div className="grid grid-row-2 gap-y-6 justify-items-center text-center">
                            <img src={logo_main} alt="why 1" className=" h-60"/>
                            <h3 className="font-spartan font-bold text-xl">
                                Microbubble Generator
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tempore?</p>
                        </div>
                        <div className="grid grid-row-2 gap-y-6 justify-items-center text-center">
                            <img src={logo_main} alt="why 1" />
                            <h3 className= "font-spartan font-bold text-xl">
                                Fisko
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tempore?</p>
                        </div>
                        <div className="grid grid-row-2 gap-y-6 justify-items-center text-center">
                            <img src={logo_main} alt="why 1" />
                            <h3 className= "font-spartan font-bold text-xl">
                                Banoo Mobile App                            
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tempore?</p>
                        </div>
                        
                    </div>

                </div> */}

                {/* shortcut product */}
                <div className="">
                    {/* 1st content  */}
                    <div className="grid grid-cols-2 gap-x-6 lg:gap-x-20 bg-bluebg to-white py-20 lg:px-40 ">

                       
                        <div className="font-serif-6  text-banooGray">
                            <div>
                                <h4 className="font-bold text-xs lg:text-base">
                                    Dissolved Oxygen Arouser
                                </h4>

                            </div>
                            <div className="pt-6 lg:pt-10">
                                <h3 className="font-bold text-md leading-normal lg:text-4xl">
                                    Fullfill oxygen demand in your pond
                                </h3>
                                
                            </div>
                            <div className="pt-6 lg:pt-10">
                                <p className="text-xs leading-normal lg:text-lg ">
                                Increase Oxygen rate for better fish and shrimp productions to accelerate your revenue and get better life
                                </p>
                                
                            </div>
                            <div className="pt-4 lg:pt-10 grid grid-cols-2 gap-x-6 lg:gap-x-2 lg:gap-x-8">
                                <div className="flex py-4 shadow-lg bg-banoo rounded-xl justify-center transition duration-700 ease-in-out hover:bg-banoo75">
                                    <Link className="lg:px-16 font-serif-6 font-bold text-white text-sm ">
                                        Learn More
                                    </Link>

                                </div>
                                <div className="flex py-4 border-2 border-banoo rounded-xl justify-center text-banoo transition duration-700 ease-in-out hover:text-banooGray hover:border-banooGray ">
                                    <Link className="lg:px-16 font-serif-6 font-bold   text-sm  ">
                                        Pre order
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <div className="">
                            <img src={fajar} className="rounded-xl"/>

                        </div>

                    </div>

                    {/* 2nd content  */}
                    <div className="grid grid-cols-2 gap-x-20 to-white py-20 px-40 ">

                        <div className="">
                            <img src={fajar} className="rounded-xl"/>

                        </div>

                        <div className="font-serif-6  text-banooGray">
                            <div>
                                <h4 className="font-bold text-md">
                                    Fiskö
                                </h4>

                            </div>
                            <div className="pt-10">
                                <h3 className="font-bold text-4xl leading-normal">
                                    Your Pond Assistant
                                </h3>
                                
                            </div>
                            <div className="pt-10">
                                <p className="leading-loose">
                                Monitor and Control the water quality of your pond 
                                <br/>to maintain the best performance of your fish
                                <br/>for maximum productivity
                                </p>
                                
                            </div>
                            <div className="py-10 flex gap-x-10">
                                <div className="">
                                    <Link className="py-4 px-16 font-serif-6 font-bold text-white shadow-lg bg-banoo rounded-xl text-sm  transition duration-700 ease-in-out hover:bg-banoo75 ">
                                        Learn More
                                    </Link>

                                </div>
                                <div>
                                    <Link className="py-4 px-16 font-serif-6 font-bold text-banoo border-2 border-banoo rounded-xl text-sm  transition duration-700 ease-in-out hover:text-banooGray hover:border-banooGray ">
                                        Pre order
                                    </Link>
                                </div>
                            </div>

                        </div>
                        

                    </div>
                    {/* end 2nd content                    */}

                    {/* 3rd content  */}
                    <div className="grid grid-cols-2 gap-x-20 bg-bluebg to-white py-20 px-40 ">

                       
                        <div className="font-serif-6  text-banooGray">
                            <div>
                                <h4 className="font-bold text-md">
                                Mbah Hary
                                </h4>

                            </div>
                            <div className="pt-10">
                                <h3 className="font-bold text-4xl leading-normal">
                                Your Pond Report directly 
                                <br/>to Your Hand 
                                </h3>
                                
                            </div>
                            <div className="pt-10">
                                <p className="leading-loose">
                                It is just get easier for you to control your pond condition at its best 
                                performance to bring maximum revenue to your arms
                                </p>
                                
                            </div>
                            <div className="py-10 flex gap-x-10">
                                <div className="">
                                    <Link className="py-4 px-16 font-serif-6 font-bold text-white shadow-lg bg-banoo rounded-xl text-sm  transition duration-700 ease-in-out hover:bg-banoo75 ">
                                        Learn More
                                    </Link>

                                </div>
                            </div>

                        </div>
                        <div className="">
                            <img src={fajar} className="rounded-xl"/>

                        </div>

                    </div>
                    {/* end 3rd content */}

                </div>

                {/* kawan banoo story */}
                {/* <div className="container">
                    <div>
                        <h2>
                            
                        </h2>
                    </div>

                </div> */}

                
                

            </div>

            
        </>
    )
}

export default Home
