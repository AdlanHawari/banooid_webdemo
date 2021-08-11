import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'

export default function VideoPlayer() {

    const onReady = (e) => {
        e.target.pauseVideo();
    }

    const ari= {
            height: '390',
            // height: '240',
            width: '640',
            // width: 'window.innerwidth',
            playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            },

    }

    const opts = [
        {
            height: '390',
            // height: '240',
            width: '640',
            // width: 'window.innerwidth',
            playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            },
        },
        {
            // height: '390',
            height: '240',
            // width: '640',
            width: window.innerwidth,
            playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            },
        },

    ];

    const [whichOpts, setWhichOpts] = useState(opts[0])
    const checkMobile = () =>{
        if(window.innerWidth<768){
            setWhichOpts(opts[1])
        }
        else{
            setWhichOpts(opts[0])
        }
    }

    useEffect(() => {
        checkMobile()
       
        window.addEventListener('resize',checkMobile)
        console.log("width:", whichOpts.width)
        console.log("window: ", window.innerWidth)

        return () =>{
         window.removeEventListener('resize',checkMobile);
        }
    }, [])

    return (
        <div>
             <YouTube
                            videoId="diwquYeL7DE" 
                            // opts={opts} 
                            // {...window.innerWidth<768? 
                            //     opts={{opts[1]}} :                                :
                            //     opts=opts[0]
                            // }
                            
                            // opts = {window.innerWidth<768?opts[1]:opts[0]}
                            opts= {{
                                height: window.innerWidth*0.609,
                                // height: '240',
                                width: window.innerWidth,
                                // width: 'window.innerwidth',
                                playerVars: {
                                // https://developers.google.com/youtube/player_parameters
                                autoplay: 1,
                                },

                            }}
                            // opts={whichOpts}
                            onReady={onReady}
                            className="rounded-xl"
                        />
            
        </div>
    )
}
