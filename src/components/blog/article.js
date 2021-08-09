import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../../client'
import BlockContent from '@sanity/block-content-to-react'
import Loading from './loading'
import urlFor from './urlFor'
import dateFormatting from './dateFormatting'

export default function Article() {

    const [post, setPost] = useState(null)
    const {slug} = useParams();

    const sanityGet = async () =>{
        try{
            const data = await sanityClient.fetch(
                        `*[slug.current == "${slug}"]
                        
                        {
                            title,
                            "categories": categories[]->title,
                            publishedAt,
                            slug,
                            mainImage{
                                asset->{
                                    _id,
                                    url
                                }
                            },
                            body,
                            "name":author->name,
                            "authorImage": author->image,
                            
                        }`
                    );
                console.log(data)
                setPost(data[0])
                // console.log(typeof()
               
                

        }
        catch(err){

        }
    }

    

    const highlight = (props) => {
    return <span style={{backgroundColor: props.mark.color}}>{props.children}</span>
    }

    useEffect(() => {
        sanityGet();
        if(post!==null){
            console.log("isinya: ",post)
            console.log("body: ",post.body)
        }else{
            console.log("belom")
        }
        
    })

    return (
        <div className="pt-20 bg-banooWhite">
            
            {post ?
            <div>
                 <img src={urlFor(post.mainImage).url()} alt="" className="mx-auto h-128 w-auto object-cover" />
     
                <div className="px-10 md:px-40">
                    <h2 className="py-10 font-bold text-3xl text-banooGray text-center font-spartan">
                        {post.title}
                    </h2>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-6">
                            <img className=" w-14 h-14 rounded-full" src={urlFor(post.authorImage).url()} alt=""/>                
                            <span className="text-base ">
                                {post.name}
                            </span>
                        </div>
                        <span>
                            {dateFormatting(post.publishedAt)}
                        </span>
                    </div>
                    
                    <div className="py-10">
                        <BlockContent
                        className="leading-loose text-base text-banooGray text-justify"
                        blocks={post.body}
                        serializers={{marks: {highlight}}}
                    
                        />

                    </div>
                </div>
                
            </div>
             
            :
            <Loading/>

           

            }
            
        </div>
        

        
    )
}
