import { Pagination } from 'antd'
import React, { useState, useMemo, useRef } from 'react'
import 'antd/dist/antd.css'
import urlFor from './urlFor';
import dateFormatting from './dateFormatting';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export default function PostGrid({data}) {

    const {t, i18n}  =useTranslation();
    const [pageSize, setPageSize] = useState(6);
    const [current, setCurrent] = useState(1);
    

    const paginatedPosts = useMemo(() =>{
        const lastIndex = current * pageSize
        const firstIndex = lastIndex - pageSize

        return data.slice(firstIndex, lastIndex)
    }, [current, pageSize, data])


    const postref = useRef()

    const postScroll = (a) => 
    {
        window.scrollTo({
        top: postref.current.offsetTop - 180,
        behavior:"auto"

    });
    setCurrent(a);
    
    }

    

    return (
        <section ref={postref} className="">
            <section className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-4">
                {paginatedPosts.map((post,index) =>(
                    <div
                    className="md:rounded-lg border shadow-lg bg-white pb-4"
                    key={index}>
                        <img src={urlFor(post.mainImage).url()} alt="" className="w-full h-80 xl:h-52 shadow-lg object-cover md:rounded-lg"/>
                        
                        
                        <div className="px-4 pt-4 space-y-6">
                            <h2 className="text-xl xl:text-lg">
                                {post.title}
                            </h2>
                            
                            
                            <p className="text-sm text-justify">
                                {post.body.children[0].text.substr(0,200)}
                                . . .
                            </p>

                            <div className="flex justify-between items-center font-bold">
                                <div className="flex  space-x-4">
                                    <img className=" w-10 h-10 rounded-full" src={urlFor(post.authorImage).url()} alt=""/>
                                
                                    <div className="block my-auto text-xs">
                                        <span>{post.name}</span>
                                        <div>{dateFormatting(post.publishedAt)}</div>
                                    </div>

                                </div>
                                <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
                                <div className="hover:text-banoo hover:border-banoo flex items-center border-b-2 border-black py-2 text-banooGray hover:text-banoo">
                                <button className="px-2 font-bold  font-spartan text-xs">{t("blog.read")}</button>
                                </div>
                               
                                    
                                    </Link>
                                
                            </div>
                        </div>
                        
                    </div>
                ))
            }

            </section>
            

            <div className="text-center pt-8">
            <Pagination
            simple 
            defaultCurrent={current}
            total={data.length}
            
            
            showSizeChanger
            onShowSizeChange={setPageSize}
            pageSize={pageSize}
          
            onChange={postScroll}
            />
            </div>
            
        </section>
    )
}
