import { faFacebookSquare, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useTranslation } from 'react-i18next'

import Contactform from '../components/Contactform'

function Contact() {
    document.title="Banoo - Contact";
    const {t, i18n}  =useTranslation();
    return (
        <div>
            {/* <HelmetProvider>
                <Helmet>
                    <title>Banoo - Contact Us</title>
                    <meta name="description" content="Contact Us" />
                </Helmet>
            </HelmetProvider> */}
        <div className="block xl:h-auto lg:flex lg:space-x-10 xl:space-x-16 py-20 px-8 md:px-20 xl:px-40">
            <div className="lg:w-1/2 pt-10">
                <h1 className="font-spartan font-extrabold text-lg xl:text-4xl">
                    {/* Contact Us */}
                    {t("contact.title")} !
                </h1>
                {/* <p className=" font-spartan pt-10 lg:pt-14 xl:pt-20 text-sm xl:text-base text-left leading-4">
                If you are a fish farmer, an aquaculture company, 
                an institution or company who have programme 
                in aquaculture sector, or just someone interested
                in what we are doing, don’t hesitate to reach out 
                and we will get back to you as soon as possible.
                </p> */}
                <p className=" font-spartan pt-10 lg:pt-14 xl:pt-20 text-sm leading-loose xl:leading-loose xl:text-base text-justify">
                {t("contact.desc")}
                {/* If you are a fish farmer, an aquaculture company, 
                an institution or company who have programme 
                in aquaculture sector, or just someone interested
                in what we are doing, don’t hesitate to reach out 
                and we will get back to you as soon as possible. */}
                </p>
                <div className="block space-y-12 md:space-y-0 md:flex pt-10 lg:pt-20 gap-x-6 font-spartan">
                    <div className="md:w-1/2 text-center">
                        {/* svg */}
                        <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                        <h4 className="text-sm xl:text-base font-spartan font-extrabold pt-2 pb-6">
                            {/* Email Us */}
                            {t("contact.email")}
                        </h4>
                        <p className="text-xs xl:text-sm">
                            support@banoo.id
                        </p>

                    </div>
                    <div className="md:w-1/2 text-center ">
                        {/* svg */}
                        <FontAwesomeIcon icon={faThumbsUp} size="2x"/>
                        <h4 className="text-sm xl:text-base font-extrabold pt-2 pb-6">
                            {t("contact.follow")}
                            {/* Follow Us */}
                        </h4>
                        <div className="flex justify-center space-x-4 ">
                            <a href="https://web.facebook.com/banooindonesia/" rel="noreferrer" target="_blank" >
                                <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="text-black"/>
                            </a>
                            
                            <a href="https://twitter.com/banoo_id" rel="noreferrer" target="_blank" >
                                <FontAwesomeIcon icon={faTwitter} size="2x" className="text-black"/>
                            </a>
                            <a href="https://www.instagram.com/banoo.id/" rel="noreferrer" target="_blank" >
                                <FontAwesomeIcon icon={faInstagram} size="2x" className="text-black"/>
                            </a>
                            <a href="https://www.linkedin.com/company/banoo-indonesia/" rel="noreferrer" target="_blank" >
                                <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-black"/>  
                            </a>
                            <a href="https://www.youtube.com/channel/UCpf-ywAWqQ9gSmqWH6OiCgg" rel="noreferrer" target="_blank" >
                                <FontAwesomeIcon icon={faYoutube} size="2x" className="text-black"/>
                            </a>                      
                            
                            
                        </div>

                    </div>

                </div>
            </div>
            <div className="lg:w-1/2 pt-10">
                <Contactform t={t}/>
            </div>
        </div>
        </div>
    )
}

export default Contact
