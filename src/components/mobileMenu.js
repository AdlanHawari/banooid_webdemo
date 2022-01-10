import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';
import LanguageDropDown from './languageDropDown';
import MobileLanguageDropDown from './mobileLanguageDropdown';

export default function MobileMenu({isOpen, toggle}) {

    const {t, i18n}  =useTranslation();
    const navmenu = [
        {
            title: t("navbar.home"),
            exact: true,
            to: '/' 
        },
        {
            title: t("navbar.products"),
            exact: true,
            to: '/products' 
        },
        {
            title: t("navbar.about"),
            exact: true,
            to: '/about'  
        },
        {
            title: t("navbar.career"),
            exact: true,
            to: '/career'  
        },
        {
            title: t("navbar.blog"),
            exact: true,
            to: '/blog'  
        },
        {
            title: t("navbar.contact_us"),
            exact: true,
            to: '/contact'  
        },
        
        

        
        // t("navbar.products"),
        // t("navbar.about"),
        // t("navbar.contact_us"),
        // t("navbar.blog")     
    ]

    const location = useLocation();
    const page = location.pathname;
    useEffect(() => {
        // console.log("route: ", page)
    }, [])

    return (
        <div className="">

            {/* {isOpen&&( */}
            
    
            <div className={isOpen ? 
                "fixed z-60 bottom-0 top-20 right-0 w-full bg-banooDark transition-all duration-700 ease-in" :
                "fixed z-60 bottom-0 top-20 -right-full w-full bg-banooDark transition-all duration-700 ease-in" }>
              
                
                <div className="relative">
                <ul className="grid grid-flow-row divide-y divide-banooGray25 px-14 pt-4">
                    {navmenu.map((menu, index) =>(
                        <li 
                        key={index}
                        className="flex items-center py-2 sm:py-4 font-spartan text-sm text-left text-white">
                            {page === menu.to?
                            
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd">

                                </path>
                            </svg>
                            :
                            <div/>
                            }
                            
                            <NavLink activeClassName="text-white" className="py-2 sm:py-4 pl-2 text-white font-bold" exact={menu.exact} to={menu.to} onClick={toggle}>
                                {menu.title}
                                
                            </NavLink>
                        </li>

                    ))}
                
                    <li className="py-4">
                        <MobileLanguageDropDown func={toggle}/>
                    </li>
                </ul>

                </div>
                
                
            </div>
        
            {/* )} */}

        
        {/* {isOpen&&(
            
    
            <div className="fixed z-60 bottom-0 top-20 w-full bg-banooDark" >
              
                
                <div className="relative">
                <ul className="grid grid-flow-row divide-y divide-banooGray25 px-14 pt-4">
                    {navmenu.map((menu, index) =>(
                        <li 
                        key={index}
                        className="flex items-center py-4 font-spartan text-sm text-left text-white">
                            {page === menu.to?
                            
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd">

                                </path>
                            </svg>
                            :
                            <div/>
                            }
                            
                            <NavLink activeClassName="text-white" className="py-4 pl-2 text-white font-bold" exact={menu.exact} to={menu.to} onClick={toggle}>
                                {menu.title}
                                
                            </NavLink>
                        </li>

                    ))}
                
                    <li className="py-4">
                        <MobileLanguageDropDown func={toggle}/>
                    </li>
                </ul>

                </div>
                
                
            </div>
        
            )} */}
        </div>
    )
}
