import React, {  useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import sanityClient from '../client.js'
import Loading from '../components/blog/loading.js';
import News from '../components/blog/news.js';
import PostGrid from '../components/blog/post-grid.js';

import Recently from '../components/blog/Recently.js';

function Blog() {

    document.title="Banoo - Blog";

    const {t, i18n}  =useTranslation();
    const [postData, setpostData] = useState(null)
    const [banooEdu, setBanooEdu] = useState(null)
    const [news, setNews] = useState(null)
    const [pressRel, setPressRel] = useState(null)
    

    function filterCategory(data,category){
        // console.log("category: ", category)
        // console.log("data: ", data)

        return data.filter(post => post.categories[0] === category)
        // console.log("filtered: ",a)
        
        // return(a)

    }

    const sanityGet = async () =>{
        try{
            const data = await sanityClient.fetch(
                        `*[_type == "post"]
                        | order(publishedAt desc)
                        {
                            title,
                            "categories": categories[]->title,
                            _updatedAt,
                            publishedAt,
                            slug,
                            mainImage{
                                asset->{
                                    _id,
                                    url
                                }
                            },
                            "body": body[0],
                            "name":author->name,
                            "authorImage": author->image,
                            
                        }`
                    );
                // console.log(data)
                setpostData(data)
                setBanooEdu(filterCategory(data, "Banoo Edu"))
                setNews(filterCategory(data,"News"))
                setPressRel(filterCategory(data,"Press Release"))

        }
        catch(err){

        }
    }
   
    useEffect(() => {
        if(postData ===null){
            
            sanityGet();
            // console.log("bd: ",banooEdu)
            
            
            
    }
    else{
        // console.log("udah download");
        // setBlogReq(true)
        setBanooEdu(filterCategory(postData, "Banoo Edu"))
        setNews(filterCategory(postData,"News"))
        setPressRel(filterCategory(postData,"Press Release"))
        // console.log("bd: ",banooEdu)
        

        

        
    }
        
        
        
    }, [])


    return (
        <section className="py-20 px-0 sm:px-20 xl:px-40 bg-banooWhite">
            {/* <div className="sm:py-10">
                <h2 className="font-spartan font-bold text-center text-2xl py-6">
                    
                    {t("blog.recently")}
                </h2>
                {postData ? 
                <div className="sm:py-10">
                <Recently 
                    data={postData[0]}
                    />
                    
                </div>
                :
                <Loading/>
                }
            </div> */}


            {/* <div className="py-10">
                <h2 className="font-spartan font-bold text-center text-2xl py-6">
                    
                    {t("blog.news")}
                </h2>
                
                {news ?
                <div className="py-4">
                    <News data={news}/>
                </div>
                :
                <Loading/>
                }
            </div> */}
            
            {/* <div className="py-10 ">
                <h2 className="font-spartan font-bold text-center text-2xl py-6">
                    {t("blog.edu")}
                </h2>
                {banooEdu ?
                <PostGrid data={banooEdu}/>
                :
                <Loading/>
                
                }
            </div> */}

            <div className="py-10">
                <h2 className="font-spartan font-bold text-center text-2xl py-6">
                    {/* Press Release */}
                    {t("blog.press")}

                </h2>

                {pressRel ?
                <div>
                    <PostGrid data={pressRel} />
                </div>

                :
                <Loading/>
                
                }
            </div>


        </section>
            
    )
}

export default Blog
