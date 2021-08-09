import React, {  } from 'react'
import urlFor from './urlFor'
import dateFormatting from './dateFormatting'
import { Link } from 'react-router-dom'

export default function Recently({data}) {
    


    return (
        <ul className="grid lg:grid-cols-2 space-y-0 sm:space-y-12 lg:space-y-0 lg:gap-x-8 xl:gap-x-14">
            <li className="lg:order-last">
                <img 
                className="w-full object-cover md:rounded-xl"
                src={urlFor(data.mainImage).url()} alt=""
                style={{ height: "400px" }}/>
            </li>
            
            <li className="block pt-10 md:pt-0 px-4 md:px-0 space-y-10">

                <h2 className="text-center md:text-left font-bold text-2xl md:text-3xl text-banooGray">
                    {data.title}
                </h2>
                <p className="text-sm sm:text-base text-justify">
                    {data.body.children[0].text.substr(0,400)}
                    . . .
                </p>
                
                <div className="flex justify-between items-center font-bold">
                    <div className="flex  space-x-4">
                        <img className=" w-10 h-10 rounded-full" src={urlFor(data.authorImage).url()} alt=""/>
                    
                        <div className="block my-auto text-xs">
                            <span>{data.name}</span>
                            <div>{dateFormatting(data.publishedAt)}</div>
                        </div>

                    </div>
                    <Link to={"/blog/" + data.slug.current} key={data.slug.current}>
                        <div className="hover:text-banoo hover:border-banoo flex items-center border-b-2 border-black py-2 text-banooGray hover:text-banoo">
                            <button className="px-2 font-bold  font-spartan text-xs">Read more</button>
                        </div>
                    </Link>
                    
                </div>

            </li>
           
           
            

            
            {/* <BlockContent
            blocks={body}
            /> */}
        </ul>
    )
}
