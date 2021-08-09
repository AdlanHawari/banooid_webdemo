import React from 'react'
// import mvp from '../../images/products/mycro.png'
import mvp from '../../images/products/mycro.png'

export default function Top() {
    return (
        <div className=""> 
            <div className="block bg-banoo py-8 xl:py-20 text-center space-y-4">
                <h2 className="text-lg text-banooWhite xl:text-2xl">
                    Mycrofish
                </h2>
                <div className="px-8 xl:px-0 xl:max-w-prose xl:mx-auto">
                    <h3 className="text-xl xl:text-4xl font-bold text-banooWhite font-spartan xl:leading-tight">
                    Oksigen maksimal, Dengan biaya listrik minimal
                    </h3>

                </div>
                <div className="w-5/6 xl:w-4/6 mx-auto">
                    <p className="text-sm text-banooWhite xl:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis expedita perferendis voluptatibus nobis iste ducimus ab aliquid amet voluptates corporis.
                    </p>

                </div>
                
                
                <div className="block py-2">
                    <del className="text-red-500 font-spartan text-sm xl:text-lg ">
                        Rp2.299.000

                    </del>
                    <p className="font-bold text-lg text-banooWhite xl:text-2xl font-spartan">
                        Rp1.700.000

                    </p>
                </div>

                <div >
                    <a href="https://preorder.banoo.id " target="_blank" rel="noreferrer" className="rounded-xl bg-none border-2 py-4 px-8">
                        <button className="text-white text-lg font-serif-2">
                            Beli sekarang
                        </button>

                    </a>
                </div>

                <img src={mvp} alt="" className="pt-10 h-48 xl:h-96 mx-auto"/>


            </div>
            {/* <div className="flex flex-col py-20 md:flex-row md:px-40 items-center md:space-x-32 bg-blue-200">
                <div className="flex-col space-y-6 order-last md:order-first">
                    <h3 className="pt-0 lg:pt-10 font-bold text-lg leading-normal lg:text-2xl xl:text-4xl">
                        Mycrofish
                    </h3>
                    <p className="">
                        Tingkatkan oksigen di kolam anda hingga 100% dengan konsumsi daya listrik yang lebih rendah. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, modi.
                    </p>
                    <div className="block">
                        <del className="text-red-600">Rp2.299.000</del>
                        <p className="">Rp1.700.000</p>
                    </div>
                    <a href="https://preorder.banoo.id " target="_blank" rel="noreferrer" className="flex w-1/2 justify-center py-4 shadow-lg bg-banoo rounded-xl transition duration-700 ease-in-out hover:bg-banoo75">
                        <span  className="xl:px-16 font-serif-6 font-bold text-white text-sm  ">
                            Pre order
                        </span>
                    </a>


                </div>
                
                <img src={mvp} alt="" className="h-96"/>
                
            </div> */}
            
        </div>
    )
}
