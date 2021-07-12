import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { HelmetProvider,Helmet } from 'react-helmet-async'
import Slider from '../components/Slider/Slider'
import fajar from '../images/story/fajar2.jpg'

function about() {
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>Banoo - About</title>
                    <meta name="description" content="About" />
                </Helmet>
            </HelmetProvider>

           <div className="flex h-screen items-center">
               <h2>
                   kanan
               </h2>
               <div className="flex-col text-center h-80 w-96 bg-blue-200">
                   <img src={fajar} className="mx-1/2"/>
                    <h2>mantap</h2>
               </div>
               <h2>
                   kiri
               </h2>

           </div>

            




        </div>
    )
}

export default about
