import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import gambar from '../../images/fajar.jpg'
import BtnSlider from './BtnSlider';
import dataSlider from './dataSlider'
import SliderContent from './SliderContent';
import Dots from './Dots';

export default function Slider() {
    const[slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length-1){
            setSlideIndex(slideIndex +1)
        }
        else if(slideIndex === dataSlider.length -1){
            setSlideIndex(0)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 0){
            setSlideIndex(slideIndex - 1)
        }
        else if(slideIndex === 0){
            setSlideIndex(dataSlider.length -1)
        }
    }

    // const moveDot = index => {
    //     setSlideIndex(index)
    // }
    
    return(
        <section className="block">
            <div className="relative flex md:justify-center items-center gap-x-10 md:mx-auto overflow-x-auto py-4">
                <div className="hidden md:flex">
                    <BtnSlider moveSlide={prevSlide} direction={"prev"} />
                </div>
                
                {/* <FontAwesomeIcon icon={faQuoteLeft} size="6x" className="text-banooGray25"/> */}
                <SliderContent slideIndex={slideIndex} dataSlider={dataSlider} setSlideIndex={setSlideIndex}/>
                {/* <FontAwesomeIcon icon={faQuoteLeft} size="6x" className="text-white"/> */}
                <div className="hidden md:flex">
                    <BtnSlider moveSlide={nextSlide} direction={"next"}/>
                </div>
                
            </div>
            {/* <div className="flex md:hidden justify-between px-20">
                <BtnSlider moveSlide={prevSlide} direction={"prev"} />
                
                
                <BtnSlider moveSlide={nextSlide} direction={"next"}/>
            </div> */}

        </section>
        
    )
}
