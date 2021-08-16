import { faFacebookSquare, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import logo_footer from '../images/logo_footer.png'

const address1 = 'Jl. Cindelaras 7 Wedomartani,'
const address2 = 'Kec. Ngemplak, Kabupaten Sleman,'
const address3 =  'Daerah Istimewa Yogyakarta 55584';

const full_addr= 'Jl. Cindelaras 7 Wedomartani, Kec. Ngemplak, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55584';

const Footer = () => {
    const {t, i18n}  =useTranslation();

    return (
        <footer className="relative bg-banoo pt-12 items-center pb-6 px-10 inset-x-0 bottom-0">
            <div>
                <img src={logo_footer} alt="banoo footer " className='h-8 lg:h-14 '/>
            </div>
            <div className="grid pl-2 pt-6 grid-row-2 gap-y-8 divide-y-4 divide-white">
                <div className="grid justify-between gap-y-10 lg:grid-cols-3 gap-x-30 text-white  font-spartan">
                    <div className=" block justify-start">
                        <h3 className="text-white font-spartan font-bold">
                            {t("footer.legal")}
                            {/* PT Banoo Inovasi Indonesia */}
                        </h3>
                        <div className="text-xs mt-6 leading-relaxed">
                        <p>
                            {/* {address1} */}
                            {t("footer.address.0")}
                        </p>
                        <p>
                            {/* {address2} */}
                            {t("footer.address.1")}
                        </p>
                        <p>
                            {/* {address3} */}
                            {t("footer.address.2")}
                        </p>
                        {/* <p className="w-60">{full_addr}</p> */}
                        </div>
                    </div>
                    <div className="block lg:ml-20">
                        <h3 className="font-bold text-white">
                            {/* Contact */}
                            {t("footer.contact")} 
                        </h3>
                        <Link to='/contact' className="text-xs  text-white hover:text-blue-500" >
                            <p className="mt-6">
                                {/* Contact Us */}
                                {t("contact.title")} 
                            </p>
                        </Link>
                        
                    </div>
                    <div className=" block lg:mx-20">
                        <h3 className="font-bold text-white">
                            {/* Find Us at */}
                            {t("footer.find")}
                        </h3>
                        {/* <div className="flex mt-6 space-6 "> */}
                        <div className="flex mt-6 text-white">
                            <a href="https://web.facebook.com/banooindonesia/" className="mx-2" rel="noreferrer" target="_blank" >
                                <FontAwesomeIcon icon={faFacebookSquare} size="lg" className="text-white"/>
                            </a>
                            
                            <a href="https://twitter.com/banoo_id" rel="noreferrer" className="mx-2" target="_blank" >
                                <FontAwesomeIcon icon={faTwitter} size="lg" className="text-white"/>
                            </a>
                            <a href="https://www.instagram.com/banoo.id/" className="mx-2" rel="noreferrer" target="_blank" >
                                <FontAwesomeIcon icon={faInstagram} size="lg" className="text-white"/>
                            </a>
                            <a href="https://www.linkedin.com/company/banoo-indonesia/" className="mx-2" rel="noreferrer" target="_blank" >
                                <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-white"/>  
                            </a>
                            <a href="https://www.youtube.com/channel/UCpf-ywAWqQ9gSmqWH6OiCgg" className="mx-2" rel="noreferrer" target="_blank" >
                                <FontAwesomeIcon icon={faYoutube} size="lg" className="text-white"/>
                            </a>                      
                            
                            
                        </div>
                        
                        
                    </div>
                </div>
                <div className=" flex justify-center text-white text-sm">
                    <span className="mt-6 text-center">
                    © Copyright 2021 Banoo Indonesia All rights reserved.
                    </span>

                </div>
            </div>
        </footer>
    )
}

export default Footer
