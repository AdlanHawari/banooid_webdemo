import { faFacebookSquare, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import logo_footer from '../images/logo_footer.png'

const address1 = 'Jl. Cindelaras 7 Wedomartani,'
const address2 = 'Kec. Ngemplak, Kabupaten Sleman,'
const address3 =  'Daerah Istimewa Yogyakarta 55584';

const Footer = () => {
    return (
        <footer className="relative bg-banoo pt-12 items-center pb-6 px-10 inset-x-0 bottom-0">
            <div>
                <img src={logo_footer} alt="banoo footer " className='h-8 lg:h-14 '/>
            </div>
            <div className="grid pl-2 pt-6 grid-row-2 gap-y-8 divide-y-4 divide-white">
                <div className="grid justify-between gap-y-10 lg:grid-cols-3 gap-x-30  text-white font-spartan">
                    <div className=" font-extrabold block justify-start">
                        <h3>
                            PT Banoo Inovasi Indonesia
                        </h3>
                        <div className="text-xs mt-6 leading-relaxed">
                        <p>
                            {address1}
                        </p>
                        <p>
                            {address2}
                        </p>
                        <p>
                            {address3}
                        </p>
                        </div>
                    </div>
                    <div className=" font-extrabold block lg:ml-20">
                        <h3>
                            Contact Us
                        </h3>
                        <Link to='/contact' className="text-xs  hover:text-blue-500" >
                            <p className="mt-6">Contact Us</p>
                        </Link>
                        
                    </div>
                    <div className="font-extrabold block lg:mx-20">
                        <h3>
                            Find Us at
                        </h3>
                        <div className="flex mt-6 gap-6 ">
                            <a href="https://web.facebook.com/banooindonesia/" rel="noreferrer" target="_blank" >
                                <FontAwesomeIcon icon={faFacebookSquare} size="lg"/>
                            </a>
                            
                            <a href="https://twitter.com/banoo_id" rel="noreferrer" target="_blank" >
                                <FontAwesomeIcon icon={faTwitter} size="lg"/>
                            </a>
                            <a href="https://www.instagram.com/banoo.id/" rel="noreferrer" target="_blank" >
                                <FontAwesomeIcon icon={faInstagram} size="lg"/>
                            </a>
                            <a href="https://www.linkedin.com/company/banoo-indonesia/" rel="noreferrer" target="_blank" >
                                <FontAwesomeIcon icon={faLinkedin} size="lg"/>  
                            </a>
                            <a href="https://www.youtube.com/channel/UCpf-ywAWqQ9gSmqWH6OiCgg" rel="noreferrer" target="_blank" >
                                <FontAwesomeIcon icon={faYoutube} size="lg"/>
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
