import React from 'react'
import { useEffect } from 'react'

export default function TechSpec({t}) {

    // const a = t("products.spec")
    // // const a = t("products.spec")
    // useEffect(() => {
    //     console.log("t: ",typeof(a))
        
    // }, [])

    const techspec= [
        {
            title : t("products.spec.0.title"),
            spec : t("products.spec.0.spec")
        },
        {  
            title : t("products.spec.1.title"),
            spec : t("products.spec.1.spec")
        },
        {  
            title : t("products.spec.2.title"),
            spec : t("products.spec.2.spec")

        },
        {  
            title : t("products.spec.3.title"),
            spec : t("products.spec.3.spec")

        },
        {  
            title : t("products.spec.4.title"),
            spec : t("products.spec.4.spec")

        },
        {  
            title : t("products.spec.5.title"),
            spec : t("products.spec.5.spec")

        }

    ]
    return (
        <ul className="divide-y divide-banooGray10">
            {techspec.map((content,index) =>(
                <li
                key={index}
                className="flex py-6 items-start">
                    <h3 className="w-1/2 font-bold text-sm sm:text-xl">{content.title}</h3>
                    <p className="pl-4 text-banooGray text-xs sm:text-base xl:text-lg">{content.spec}</p>

                </li>

            ))}

           
            
            
            
        </ul>
    )
}
