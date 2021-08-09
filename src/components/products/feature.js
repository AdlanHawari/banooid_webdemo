import React from 'react'
import mvp from '../../images/products/mvp.JPG'

export default function Feature() {

    const featureContent = [
        {
            title : "Performa",
            subtitle : "DO semakin tinggi, ikan semakin sehat",
            desc : " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis labore cupiditate iure. Tempora delectus exercitationem deleniti magni rem reiciendis praesentium, accusamus quod illo omnis laboriosam saepe ullam veniam doloremque vel id nihil a atque animi similique? Corporis maxime tempora illo.",
            order:""
        },
        {
            title : "Hemat listrik",
            subtitle : "Konsumsi listrik yg minimal",
            desc : " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis labore cupiditate iure. Tempora delectus exercitationem deleniti magni rem reiciendis praesentium, accusamus quod illo omnis laboriosam saepe ullam veniam doloremque vel id nihil a atque animi similique? Corporis maxime tempora illo.",
            order:"xl:order-first"
        },
        {
            title : "Seimbang dan fleksibel",
            subtitle : "Floating system didesain agar sesuai kondisi kolam anda",
            desc : " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis labore cupiditate iure. Tempora delectus exercitationem deleniti magni rem reiciendis praesentium, accusamus quod illo omnis laboriosam saepe ullam veniam doloremque vel id nihil a atque animi similique? Corporis maxime tempora illo.",
            order:""
        },


    ]

    return (
        <div>
            <ul >
                {featureContent.map((content,index) => (
                    <li 
                    key={index}
                    className="block xl:flex py-20 ">
                        <div className="w-1/2">
                            <img src={mvp} className="w-3/4"/>

                        </div>
                        <div className={`xl:w-1/2 ${content.order} `}>
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
