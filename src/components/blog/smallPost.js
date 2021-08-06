import React from 'react'
import dateFormatting from './dateFormatting'
import urlFor from './urlFor'

export default function SmallPost({data}) {
    return (
        <div className="block rounded-xl shadow-sm bg-white border-gray-100">
            {/* img */}
            <img 
                className="bg-yellow-200 w-full h-40 object-contain rounded-lg"
                src={urlFor(data.mainImage).url()} alt=""
                // style={{ height: "20px" }}
                />
            <div className="px-4 pb-4">
                <h1>
                    {data.title}
                </h1>
                <p className="text-sm text-justify">
                    {data.body.children[0].text.substr(0,200)}
                    . . .
                </p>
                <div className="flex justify-between ">
                    <div className="flex">
                        <img className="w-10 h-10 rounded-full" src={urlFor(data.authorImage).url()} alt=""/>
                    
                        <div className="block items-center">
                            <p>{data.name}</p>
                            
                            <p>{dateFormatting(data.publishedAt)}</p>
                        </div>

                    </div>
                    <div className="bg-green-200 flex items-center border-b-2 border-black">
                        <button className="bg-gray-200">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
