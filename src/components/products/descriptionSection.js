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

                    <h2 className="flex font-bold font-spartan justify-center pt-4 text-xl md:text-4xl px-10 lg:px-40">
                        {/* Dapatkan mycrofish sekarang */}
                        {t("products.descSec.title")}
                    </h2>

                    <div className="mas-x-prose px-10 lg:px-40">
                        <p className="text-sm lg:text-base font-serif-6 text-banooGray leading-loose pt-4">
                        {t("products.descSec.desc")}
                        {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo excepturi rerum autem quas corrupti, blanditiis a, recusandae eligendi ea sequi iure quasi pariatur saepe, commodi est eos vero non! Deleniti voluptate tempore porro nostrum possimus dolorem asperiores cumque quam velit vero omnis doloremque similique voluptatum accusantium corrupti dolores iusto neque, reiciendis nam quae dolor adipisci! Nemo possimus itaque perspiciatis vero culpa, odio nihil quos repellat nam voluptate exercitationem totam labore modi quo voluptatem a explicabo dolores quia veniam voluptates hic ipsam earum est. Saepe, corporis modi. */}
                        </p>
                    </div>

                </div>
            
        </div>
    )
}
