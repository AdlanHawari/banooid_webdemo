import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../../client'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'
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

    const serializers = {
        types: {
          code: (props) => (
            <pre data-language={props.node.language}>
              <code>{props.node.code}</code>
            </pre>
          ),
        },
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
        
    }, [])

    return (
        <div className="px-40">
            
            {post ?
            <div>
                {/* <img
                    src={urlFor(post.authorImage).width(100).url()}
                    alt=""
                /> */}
                 <img src={urlFor(post.mainImage).url()} alt="" className="mx-auto" />
     

                <h2 className="font-bold text-3xl text-banooGray text-center">
                    {post.title}
                </h2>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-6">
                        <img className=" w-10 h-10 rounded-full" src={urlFor(post.authorImage).url()} alt=""/>                
                        <span>
                            {post.name}
                        </span>
                    </div>
                    <span>
                        {dateFormatting(post.publishedAt)}
                    </span>
                </div>
                

                <BlockContent
                className="leading-loose text-base text-banooGray text-justify"
                blocks={post.body}
                serializers={{marks: {highlight}}}
            
                />
            </div>
             
            :
            <Loading/>

           

            }
            
        </div>
        

        
    )
}
