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

export default function Gallery() {

    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div>
            {/* <ul className="grid grid-cols-2 md:grid-cols-7 grid-rows-7 md:grid-rows-2 gap-2 h-screen md:h-60 lg:h-80 grid-flow-row md:grid-flow-col">
                    <li data-aos="fade-right"
                    data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="md:col-span-2 rounded-lg shadow-xl bg-cover bg-center"
                    style={{backgroundImage: `url(${gal1})`}}>
                        
                        
                    </li>
                    <li data-aos={isMobile?"fade-left":"fade-right"} data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className=" rounded-lg shadow-xl bg-cover bg-right-top"
                    style={{backgroundImage: `url(${gal2})`}}>
                        
                    </li>
                    <li data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="col-span-2 bg-yellow-400 rounded-lg shadow-xl bg-cover bg-center"
                    style={{backgroundImage: `url(${gal3})`}}>
                        
                    </li>
                    <li data-aos={isMobile?"fade-right":"fade-down"} data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="bg-yellow-400 rounded-lg shadow-xl bg-cover bg-center"
                    style={{backgroundImage: `url(${gal4})`}}>
                        
                    </li>
                    <li data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="row-span-2 bg-yellow-400 rounded-lg shadow-xl bg-cover bg-center"
                    style={{backgroundImage: `url(${fajar})`}}>
                        
                        </li>
                    <li data-aos={isMobile?"fade-right":"fade-down"} data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="bg-yellow-400 rounded-lg shadow-xl bg-cover bg-top"
                    style={{backgroundImage: `url(${gal5})`}}>
                        
                        </li>
                    <li data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="col-span-2 bg-yellow-400 rounded-lg shadow-xl bg-cover bg-center"
                    style={{backgroundImage: `url(${gal6})`}}>
                        
                        </li>
                    <li data-aos={isMobile?"fade-right":"fade-left"} data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="md:col-span-2 bg-yellow-400 rounded-lg shadow-xl bg-cover bg-top"
                    style={{backgroundImage: `url(${hary})`}}>
                        
                        </li>
                    <li data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="bg-yellow-400 rounded-lg shadow-xl bg-cover"
                    style={{backgroundImage: `url(${fajar})`}}>
                        
                        </li>
                </ul> */}

                <ul className="grid grid-cols-2 md:grid-cols-7 grid-rows-7 md:grid-rows-2 gap-2 h-screen md:h-60 lg:h-80 grid-flow-row md:grid-flow-col">
                    <li data-aos="fade-right"
                    data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="md:col-span-2 rounded-lg shadow-xl bg-cover bg-center"
                    style={{backgroundImage: `url(${gal1})`}}>
                        
                        
                    </li>
                    <li data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className=" rounded-lg shadow-xl bg-cover bg-right-top"
                    style={{backgroundImage: `url(${gal2})`}}>
                        
                    </li>
                    <li data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="col-span-2 bg-yellow-400 rounded-lg shadow-xl bg-cover bg-center"
                    style={{backgroundImage: `url(${gal3})`}}>
                        
                    </li>
                    <li data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="bg-yellow-400 rounded-lg shadow-xl bg-cover bg-center"
                    style={{backgroundImage: `url(${gal4})`}}>
                        
                    </li>
                    <li data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="row-span-2 bg-yellow-400 rounded-lg shadow-xl bg-cover bg-center"
                    style={{backgroundImage: `url(${fajar})`}}>
                        
                        </li>
                    <li data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="bg-yellow-400 rounded-lg shadow-xl bg-cover bg-top"
                    style={{backgroundImage: `url(${gal5})`}}>
                        
                        </li>
                    <li data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="col-span-2 bg-yellow-400 rounded-lg shadow-xl bg-cover bg-center"
                    style={{backgroundImage: `url(${gal6})`}}>
                        
                        </li>
                    <li data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="md:col-span-2 bg-yellow-400 rounded-lg shadow-xl bg-cover bg-top"
                    style={{backgroundImage: `url(${hary})`}}>
                        
                        </li>
                    <li data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="bg-yellow-400 rounded-lg shadow-xl bg-cover"
                    style={{backgroundImage: `url(${fajar})`}}>
                        
                        </li>
                </ul>
            
        </div>
    )
}
