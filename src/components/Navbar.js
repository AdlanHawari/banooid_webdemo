import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo_text from '../images/logo_teks.png'
import LanguageDropDown from './languageDropDown';


const Navbar = ({isOpen,toggle}) => {
    const {t, i18n}  =useTranslation();

    const location = useLocation();
    // console.log(location.pathname);
    // if(location.pathname == '/'){
    //     console.log("ini di home");
    // }
    console.log(location.pathname);

    const [navbar, setNavbar] = useState(true);
    const changeNavbarBg = () => {
        if( window.scrollY >20){
        // if( location.pathname=='/'){
            
            setNavbar(true);
        }else{ 
            setNavbar(false);            
        }
    };

    // const [navbar, setNavbar] = useState(true);
    // useEffect(() =>{
    //     const changeNavbarBg = () => {
    //         if(location.pathname == '/'){
    //             setNavbar(false);
    //             console.log("ini home")
    //             // if(window.scrollY >=20){
    //             //     setNavbar(true);
    //             // }
    //             // else{
    //             //     setNavbar(true);
    //             // }
    //         }
    //         else{
    //             setNavbar(true);
    //         }
    //     };
        // window.addEventListener('scroll',changeNavbarBg);
        // // window.addEventListener('resize',changeNavbarBg);
        // return () =>{
        //     window.removeEventListener('resize',changeNavbarBg);
            
        //   }


    // });
    

    return (
        <nav className="fixed w-screen z-50" role='navigation'>
        <div className={navbar ?
        "flex justify-between items-center h-10 bg-white shadow-sm  font-spartan px-10 lg:px-20 h-20"
        :
        "flex justify-between items-center h-10 bg-white shadow-sm  font-spartan px-10 lg:px-20 h-20 bg-opacity-10"
        }>
                

            <div className="flex items-center">
                <Link to='/'>
                    <img src={logo_text} alt='logo' className='h-6 lg:h-8'/>
                </Link>

                
            </div>

            {/* <div className={isOpen ? "flex justify-end" : "hidden"} onClick={toggle}></div> */}
            
            <div className={isOpen ? "hidden" : "cursor-pointer lg:hidden"} onClick={toggle }>
                 <svg className="w-6 h-6 text-banoo" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                 </svg>
            </div>

            <div className={isOpen ? "cursor-pointer lg:hidden":"hidden"} onClick={toggle }>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            </div>

            {/* <div className="justify-between text-sm lg:block hidden "> */}

            {/* <div class="grid grid-cols-3 divide-x divide-green-500 bg-green-200 gap-2">
                <div className="">1</div>
                <div>2</div>
                <div></div>
            </div> */}




            <div className="text-sm hidden lg:flex divide-x-2 items-center divide-banooGray10 space-x-8">
                <div className=" space-x-8 ">
                    <NavLink activeClassName="text-banoo" className='px-4 hover:text-blue-500 xl:px-6 text-gray-500 font-bold' exact to='/'>{t("home")}</NavLink>
                    <NavLink activeClassName="text-banoo" className='px-4 hover:text-blue-500 xl:px-6 text-gray-500 font-bold' to='/products'>{t("products")}</NavLink>
                    <NavLink activeClassName="text-banoo" className='px-4 hover:text-blue-500 xl:px-6 text-gray-500 font-bold' to='/about'>{t("about")}</NavLink>
                    
                    <NavLink activeClassName="text-banoo" className='px-4 hover:text-blue-500 xl:px-6 text-gray-500 font-bold' to='/blog'>{t("blog")}</NavLink>
                    <NavLink activeClassName="text-banoo" className='px-4 hover:text-blue-500 xl:px-6 text-gray-500 font-bold' to='/contact'>{t("contact_us")}</NavLink>
                    
                </div>

                <div className="px-10">
                    <LanguageDropDown/>
                    {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, iure? */}
                    
                    

                </div>

            </div>
            
        </div>
        </nav>
    )
}

export default Navbar
