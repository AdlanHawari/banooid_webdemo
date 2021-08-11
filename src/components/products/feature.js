import React, { useEffect } from 'react'
import mvp from '../../images/products/mycro.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Feature() {

    const featureContent = [
        {
            title : "Performa",
            subtitle : "DO semakin tinggi, ikan semakin sehat",
            desc : " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis labore cupiditate iure. Tempora delectus exercitationem deleniti magni rem reiciendis praesentium, accusamus quod illo omnis laboriosam saepe ullam veniam doloremque vel id nihil a atque animi similique? Corporis maxime tempora illo.",
            order:"",
            effect:"fade-up"
        },
        {
            title : "Hemat listrik",
            subtitle : "Konsumsi listrik yg minimal",
            desc : " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis labore cupiditate iure. Tempora delectus exercitationem deleniti magni rem reiciendis praesentium, accusamus quod illo omnis laboriosam saepe ullam veniam doloremque vel id nihil a atque animi similique? Corporis maxime tempora illo.",
            order:"lg:order-first",
            effect:"fade-right"
        },
        {
            title : "Seimbang dan fleksibel",
            subtitle : "Floating system didesain agar sesuai kondisi kolam anda",
            desc : " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis labore cupiditate iure. Tempora delectus exercitationem deleniti magni rem reiciendis praesentium, accusamus quod illo omnis laboriosam saepe ullam veniam doloremque vel id nihil a atque animi similique? Corporis maxime tempora illo.",
            order:"",
            effect:"fade-up"
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
                    data-aos= {content.effect}
                    data-aos-easing="ease-in-sine" 
                    data-aos-duration="1000"
                    data-aos-delay="0"
                    >
                        <div className="w-full md:w-1/2   mx-auto"
                        >
                            <img src={mvp} className="w-3/4 xl:w-1/2 mx-auto "/>

                        </div>
                        <div className={`lg:w-1/2 ${content.order} max-w-prose space-y-4`}>
                            <h2 className="text-banooGray font-semibold">
                                {content.title}

                            </h2>
                            
                            <h3 className="text-black font-bold text-xl">
                                {content.subtitle}
                            </h3>

                            
                            
                            <p>
                               {content.desc}

                            </p>
                        </div>
                        

                    </li>
                ))}
            </ul>
            
        </div>
    )
}
