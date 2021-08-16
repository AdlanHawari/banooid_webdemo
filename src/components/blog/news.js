import { Pagination } from 'antd'
import React, { useState, useEffect, useMemo, useRef } from 'react'
import 'antd/dist/antd.css'
import urlFor from './urlFor';
import dateFormatting from './dateFormatting';
import { Link } from 'react-router-dom';


export default function News({data}) {
    

    const [pageSize, setPageSize] = useState(4);
    const [current, setCurrent] = useState(1);

    const paginatedPosts = useMemo(() =>{
        const lastIndex = current * pageSize
        const firstIndex = lastIndex - pageSize

        return data.slice(firstIndex, lastIndex)
    }, [current, pageSize, data])

    const newsref = useRef()

    const newsScroll = (a) => 
    {
        window.scrollTo({
        top: newsref.current.offsetTop - 180,
        behavior:"smooth"

    });
    setCurrent(a);
    
    }
    

    // function gotonewsSection(){
    //     window.scrollTo({
    //         top: newsref.current.offsetTop - 200,
    //         behavior:"smooth"
    //     })
    // } 
        
    
    // function paginateOnChange(){
    //     setCurrent;
    //     gotonewsSection();
    // }

    

    useEffect(() => {
        // window.scroll({
        //     top:newsref.current.offsetTop,
        //     left:0,
        //     behavior: 'smooth'
        // })
        // console.log(msg);
        // console.log(paginatedPosts.title);
        // console.log(newsref.current)
        // gotonewsSection() 
        
        // console.log("current: ",current)
        // console.log("pageSize: ",pageSize)
        // console.log("type: ", urlFor(data[0].mainImage).url())
        // console.log(paginatedPosts)
        
    }, [current, pageSize])

    const span = 
    [
        
        [
            "lg:row-start-1 lg:row-span-2",
            "lg:col-start-2 lg:col-span-2",
            "",
            "" 
        ],
        [
            "lg:row-start-1 lg:row-span-2",
            "",
            "",
            "lg:col-start-2 lg:col-span-2" 
        ]
    ]

    return (
        <section ref={newsref} className="">
            <section className="grid lg:grid-cols-3 gap-10 lg:gap-4 h-auto lg:h-128 ">
            {paginatedPosts.map((post,index) =>(
              
                
                    
                    <Link to={"/blog/" + post.slug.current} key={post.slug.current}
                    className={
                        `relative 
                        transition duration-500 ease-in-out transform z-10 hover:z-50 hover:-translate-y-1 hover:scale-105 
                        md:rounded-lg border shadow-sm bg-center h-128 lg:h-auto lg:${span[current%2][index]}
                        ` 
                         
                    }
                    style={{backgroundImage: `url( ${urlFor(post.mainImage).url()} )` }}
                        
                    
                    >
                        
                        <div className="absolute w-full bottom-0 py-5 bg-black bg-opacity-60 md:rounded-b-lg">
                            <div className="px-4">

                            
                                <h2 className="text-white text-xl">
                                    {post.title}
                                   
                                    
                                </h2>
                                <div className="flex text-gray-300 text-xs">
                                    <p className="">
                                        {post.name}
                                        </p>
                                    <p className="px-2">-</p>
                                    {post.publishedAt&&
                                    <p className="">    
                                        {dateFormatting(post.publishedAt)}
                                    </p>
}
                                </div>
                            </div>
                        </div>
                        
                    </Link>
                    
                   
                
                ))
            }

            </section>
            {/* <button className="rounded-lg p-4" onClick={gotonewsSection}>mantap</button> */}
            <section className="text-center pt-8">
                <Pagination
                className=""
                simple 
                defaultCurrent={current}
                total={data.length}
                
                
                showSizeChanger
                onShowSizeChange={setPageSize}
                pageSize={pageSize}
            
                onChange={newsScroll}
                // onChange= {setCurrent}
                // onChange={paginateOnChange()}
                />
            </section>
            
            
        </section>
    )
}
