import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import gal1 from '../images/gallery/site_1.jpg'
import gal2 from '../images/gallery/sensor.jpg'
import gal3 from '../images/gallery/10.png'
import gal4 from '../images/gallery/site_2.JPG'
import gal5 from '../images/gallery/kick_andy.jpeg'
import gal6 from '../images/gallery/pancasila.JPG'
import fajar from '../images/fajar_sweden.jpg'
import hary from '../images/story/hary.jpg'



export default function Gal() {

    const gal = [
        {
            img : gal1,
            span : "col-span-2",
            effect: "fade-right",
            delay:"0"

        },
        {
            img : gal2,
            span : "",
            effect: "fade-right",
            delay:"0"

        },
        {
            img : gal3,
            span : "col-span-2",
            effect: "fade-up",
            delay:"0"

        },
        {
            img : gal4,
            span : "",
            effect: "fade-down",
            delay:"0"

        },
        {
            img : fajar,
            span : "row-span-2",
            effect: "zoom-in",
            delay:"0"

        },
        {
            img : gal5,
            span : "",
            effect: "fade-down",
            delay:"0"

        },
        {
            img : gal6,
            span : "col-span-2",
            effect: "fade-up",
            delay:"0"


        },
        {
            img : hary,
            span : "col-span-2",
            effect: "fade-down",
            delay:"500"

        },
        {
            img : fajar,
            span : "",
            effect: "fade-up",
            delay:"200"
        }
    ]

    useEffect(() => {
        Aos.init();
    }, [])

    

    return (
        <div>
            <ul className="grid md:grid-cols-7 md:grid-rows-2 grid-cols-2 grid-rows-7  grid-flow-row md:grid-flow-col gap-2 h-60 lg:h-80">
                {gal.map((gall,index) =>(
                    <li
                    key={index}
                    className={`bg-cover bg-center 
                    bg-yellow-400 rounded-lg ${gall.span}`}
                    data-aos= {gall.effect}
                    data-aos-easing="ease-in-sine" data-aos-duration="1000"
                    data-aos-delay={gall.delay}
                    style={{backgroundImage: `url(${gall.img})`}}
                    
                    >
                        {/* <img src={gall.img} className="object-cover h-full  rounded-lg"/> */}

                    </li>
                ))}

            </ul>
            
        </div>
    )
}
