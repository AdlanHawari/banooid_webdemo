import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
    return (
        <div className="relative bg-banooWhite h-screen">
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div className="hidden iphone7plus:flex items-center">
                    <h2 className=" text-sm md:text-xl font-semibold font-spartan text-banooGray">
                        404 - No such page found
                    </h2>
                   
                    {/* <Link className="bg-green-200 text-xl font-semibold font-spartan text-banooGray" to="/">Home</Link> */}
                </div>
                <div className="block text-center iphone7plus:hidden items-center">
                    <h2 className=" text-sm font-bold font-spartan text-banooGray">
                        404
                    </h2>
                    <h2 className=" text-sm font-semibold font-spartan text-banooGray">
                    No such page found
                    </h2>
                   
                    {/* <Link className="bg-green-200 text-xl font-semibold font-spartan text-banooGray" to="/">Home</Link> */}
                </div>
            </div>
            
        </div>
    )
}
