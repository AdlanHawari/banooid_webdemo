import React from 'react'
import YoutubeEmbed from './youtubeembed'

export default function DescriptionSection({t}) {
    return (
        <div>
            <div className="block py-10 space-y-8  ">
                        {/* Video */}
                    <div className="block w-full  xl:w-3/4 sm:px-10 lg:px-40 lg:mx-auto ">
                        
                        {/* <VideoPlayer/> */}
                        <YoutubeEmbed embedId="diwquYeL7DE"/>
                        
                    </div>
                    {/* End of Video */}

                    {/* <h2 className="flex font-bold font-spartan justify-center pt-4 text-xl md:text-4xl px-10 lg:px-40">
                        
                        {t("products.descSec.title")}
                    </h2>

                    <div className="mas-x-prose px-10 lg:px-40">
                        <p className="text-sm lg:text-base font-serif-6 text-banooGray leading-loose pt-4">
                        {t("products.descSec.desc")}
                        
                        </p>
                    </div> */}

                </div>
            
        </div>
    )
}
