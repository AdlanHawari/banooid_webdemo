import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function Preorderform({className}) {

    const [btnClicked, setbtnClicked] = useState(false);

    const clicked = (e) =>{
        e.preventDefault();
        setbtnClicked(true);

        setTimeout(()=>{
            setbtnClicked(false);
        },30000)

    }

    return (
        <div className={className}>
            <div className="block">

                <div className="bg-white py-6 px-6 shadow rounded-lg">
                    
                    <form className="space-y-6" onSubmit={clicked}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-gray-700">Name</label>
                            <div className="mt-1">
                                <input id="name" name="name" placeholder="Enter your name" type="text" autoComplete="" required className=" text-sm w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-banooDark focus:ring-1 focus:ring-banooDark"/>
                            </div>
                        </div>


                        <div>
                            <label htmlFor="phone" className="block text-sm font-bold text-gray-700">Whatsapp/Phone number</label>
                            <div className="mt-1">
                                <input id="phone" name="phone" placeholder="Include your country code" type="number" autoComplete="" required className=" text-sm w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-banooDark focus:ring-1 focus:ring-banooDark "/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-sm font-bold text-gray-700">Address</label>
                            <div className="mt-1">
                                <textarea id="address" name="address" placeholder="Enter your address" type="text" autoComplete="" required className="h-40 text-sm w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-banooDark focus:ring-1 focus:ring-banooDark"/>

                            </div>
                        
                        </div>

                        <div>
                            <label htmlFor="species" className="block text-sm font-bold text-gray-700">Cultivated species</label>
                            <div className="mt-1">
                                <input id="species" name="species" placeholder="Species of your cultivation" type="text" autoComplete="" required className=" text-sm w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-banooDark focus:ring-1 focus:ring-banooDark"/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="pond size" className="block text-sm font-bold text-gray-700">Pond Size</label>
                            <ul className="grid sm:grid-cols-2 mt-1">
                                <li className="text-lg">
                                    <div className="flex items-center">

                                        <input id="" type="radio" />
                                        <label className="px-2">Circular</label>

                                    </div>

                                    <ul className="grid grid-cols-2">
                                        <li className="block">
                                            <label>Diameter</label>
                                            <div className="mt-1">
                                                <input type="number" className=" text-sm w-1/3 border-0 border-b-2 focus:outline-none focus:border-banooDark focus:ring-0"/>
                                                <label>m</label>
                                               
                                            </div>
                                        </li>
                                        <li>
                                            <label>Depth</label>
                                            <div className="mt-1">
                                                <input type="number" className=" text-sm w-1/3 border-0 border-b-2 focus:outline-none focus:border-banooDark focus:ring-0"/>
                                                <label>m</label>
                                               
                                            </div>
                                        </li>
                                        

                                    </ul>

                                </li>

                                <li className="text-lg bg-yellow-200">
                                    <div className="flex items-center">

                                    <input id="" type="radio" />
                                    <label className="px-2">Rectangular</label>

                                    </div>
                                    <ul className="grid grid-cols-3">
                                        <li>
                                            <label>Width</label>
                                        </li>
                                        <li>
                                            <label>Length</label>
                                        </li>
                                        <li>
                                            <label>Depth</label>
                                        </li>
                                        

                                    </ul>

                                </li>

                            </ul>
                            
                        </div>

                        <div>
                        <button disabled={btnClicked?
                        true:false} 
                        type="submit" className="w-full flex justify-center py-6 px-4 border border-transparent rounded-md shadow-xl text-sm font-medium text-white bg-banooDark hover:bg-banooDarker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-banooDark" 
                        >
                            {btnClicked ? 
                            <FontAwesomeIcon icon={faSpinner} className="animate-spin"></FontAwesomeIcon>:
                            'ORDER NOW'}
                            

                            {/* </svg> */}
                            
                        
                        

                        </button>
                        
                    </div>


                    </form>
                    
                </div>
            </div>

        </div>
    )
}
