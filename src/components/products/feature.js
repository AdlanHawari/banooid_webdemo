import React, { useEffect } from 'react'
import img1 from '../../images/products/nozzle.png'
import img2 from '../../images/products/elecbox.png'
import img3 from '../../images/products/balance.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Feature({t}) {

    const featureContent = [
        {
            // title : "Performa",
            title : t("products.feature.0.title"),
            subtitle : t("products.feature.0.subtitle"),
            desc : t("products.feature.0.desc"),
            order:"",
            effect:"fade-up",
            image:img1
        },
        {
            title : t("products.feature.1.title"),
            subtitle : t("products.feature.1.subtitle"),
            desc : t("products.feature.1.desc"),
            order:"lg:order-first",
            effect:"fade-right",
            image:img2
        },
        {
            title : t("products.feature.2.title"),
            subtitle : t("products.feature.2.subtitle"),
            desc : t("products.feature.2.desc"),
            order:"",
            effect:"fade-up",
            image:img3
        },


    ]


    useEffect(() => {
        Aos.init();
    }, [])


    

    return (
        <div>
            <ul >
                {featureContent.map((content,index) => (
                    <li 
                    key={index}
                    className="block lg:flex py-10 lg:py-20  space-y-10 lg:space-y-0 lg:gap-x-6" 
                    // data-aos= {content.effect}
                    // data-aos-easing="ease-in-sine" 
                    // data-aos-duration="1000"
                    // data-aos-delay="0"
                    >
                        <div className="w-full md:w-1/2   mx-auto"
                        >
                            {/* <img src={content.image} className="w-3/4 xl:w-1/2 mx-auto "/> */}
                            <img src={content.image} className={index<2?"w-3/4 xl:w-1/2 mx-auto ":" rounded-xl mx-auto "}/>
                            {/* <img 
                                className="w-full object-cover md:rounded-xl"
                                src={urlFor(content.image).url()} alt=""
                                style={{ height: "400px" }}/> */}

                        </div>
                        <div className={`lg:w-1/2 ${content.order} max-w-prose space-y-4`}>
                            <h2 className="text-banooGray font-semibold">
                                {content.title}

                            </h2>
                            
                            <h3 className="text-black font-bold text-xl">
                                {content.subtitle}
                            </h3>

                            
                            
                            <p className="text-lg">
                               {content.desc}

                            </p>
                        </div>
                        

                    </li>
                ))}
            </ul>
            
        </div>
    )
}
