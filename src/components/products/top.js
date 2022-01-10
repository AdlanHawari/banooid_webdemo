import React from 'react'
// import mvp from '../../images/products/mycro.png'
import mvp from '../../images/products/main_mf.PNG'

export default function Top({t}) {
    return (
        <div className=""> 
            <div className="block bg-banoo py-8 md:py-20 text-center space-y-4">
                <h2 className="text-lg text-banooWhite md:text-2xl">
                    {/* Mycrofish */}
                    {t("products.top.product")}
                </h2>
                <div className="px-8 md:px-0 md:max-w-prose md:mx-auto">
                    <h3 className="text-xl md:text-4xl font-bold text-banooWhite font-spartan md:leading-tight">
                    {/* Oksigen maksimal, Dengan biaya listrik minimal */}
                    {t("products.top.subtitle")}
                    </h3>

                </div>
                <div className="w-5/6 lg:w-4/6 mx-auto">
                    <p className="text-sm text-banooWhite md:text-base">
                    {t("products.top.desc")}
                    
                    </p>

                </div>
                
                <div className="block py-2">
                    <del className="text-red-500 font-spartan text-sm md:text-lg ">
                        Rp2.800.000

                    </del>
                    <p className="font-bold text-lg text-banooWhite md:text-2xl font-spartan">
                        Rp2.500.000

                    </p>
                    <p className=" text-xs text-banooWhite md:text-xs font-spartan">
                    {t("products.top.promo_period")}

                    </p>
                </div>

                <div >
                    <a href="https://preorder.banoo.id " target="_blank" rel="noreferrer" className="rounded-xl bg-none border-2 py-4 px-8 text-white hover:bg-white hover:text-banoo">
                        <button className=" text-lg font-serif-2 ">
                            {/* Beli sekarang */}
                            {t("products.top.button")}
                        </button>

                    </a>
                </div>

                <img src={mvp} alt="" className="pt-10 h-64 md:h-96 mx-auto"/>
                {/* <img src={mvp} alt="" className=" h-128 mx-auto"/> */}


            </div>
            
        </div>
    )
}
