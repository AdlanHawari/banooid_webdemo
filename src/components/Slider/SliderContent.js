import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
// import { require } from 'yargs'
import hary from '../../images/story/hary.jpg'
import Dots from './Dots';


function SliderContent({slideIndex, dataSlider, setSlideIndex}) {
    const w = '../../images/story/hary.jpg';
    return (
        <div className="flex gap-x-4 md:gap-x-0">
            
            {dataSlider.map((obj,index) =>(
                <div
                    key={index}
                    className={index === slideIndex ? 
                    "w-screen md:w-auto md:relative transition-opacity opacity-100 duration-1000 ease-in" 
                    // "transition-all duration-700 ease-in-out" 
                    : 
                    // "transition-opacity opacity-0 duration-700 ease-in "}
                    "relative w-screen md:fixed md:left-0 md:transition-opacity  md:opacity-50 md:duration-1000 md:ease-in "}
                >
                    {/* <img src={require('../../images/story/hary.jpg').default}/> */}
                    
                        
                    {/* <div className=" border-2 border-banoo rounded-3xl p-10 shadow-xl"> */}
                    <div className="block lg:flex items-center rounded-lg gap-x-4 py-8 lg:py-0 shadow-lg bg-banooWhite">
                        
                        {/* <img src={obj.url} className="mx-auto rounded-full h-40"/>
                        <h3 className="text-center pt-10">
                            {obj.name}
                            
                        </h3>
                        <div className="flex mx-auto w-1/2">
                            <FontAwesomeIcon icon={faQuoteLeft} size="2x" className="text-banooGray25"/>
                            <p className="text-center pt-4 ">
                                {obj.comment}
                            </p>
                            <FontAwesomeIcon icon={faQuoteLeft} size="2x" className="text-banoo"/>
                        </div>
                        
                        <h3 className="text-center pt-4">
                            {obj.addr}
                        </h3> */}
                        
                        <img src={obj.url} className="mx-auto object-cover h-60 lg:h-80 xl:h-96 lg:mx-0 rounded-full lg:rounded-l-lg lg:rounded-r-none  lg:w-1/2"/>
                        
                        
                        <div className="lg:w-1/2 flex-col py-4 px-6 lg:px-0 lg:py-2">
                            <div className="hidden xl:flex">
                            <FontAwesomeIcon icon={faQuoteLeft} size="3x" className="text-banooDark"/>
                            </div>
                            <div className="flex xl:hidden">
                            <FontAwesomeIcon icon={faQuoteLeft} size="lg" className="text-banooDark"/>
                            </div>

                        
                            <p className="text-justify lg:text-left text-xs xl:text-sm px-6 leading-snug xl:leading-loose">
                                {obj.comment}
                            </p>
                            <h3 className="text-center lg:text-left font-serif-6 px-6 font-extrabold text-lg pt-4 xl:pt-8 text-banooDark">
                                {obj.name}
                            
                            </h3>
                            <h3 className="text-center lg:text-left text-xs xl:text-sm px-6 font-bold pt-1">
                                {obj.addr}
                            </h3>


                            <div className="hidden md:flex md:justify-center md:relative md:pt-10 xl:pt-6">
                            {/* <div className="relative"> */}
                                <Dots 
                                slideIndex={slideIndex}
                                onclick={(slideIndex) => setSlideIndex(slideIndex)}
                                dataSlider={dataSlider}
                                />
                            </div>

                        </div>



                    </div>
                
                </div>
            ))}
        </div>
    )
}

export default SliderContent
