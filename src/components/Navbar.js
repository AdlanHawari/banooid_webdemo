import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo_text from '../images/logo_teks.png'

const Navbar = ({isOpen,toggle}) => {

    const [navbar, setNavbar] = useState(false);
    const changeNavbarBg = () => {
        if(window.scrollY >=20){
            
            setNavbar(true);
        }else{ 
            setNavbar(false);            
        }
    };

    window.addEventListener('scroll',changeNavbarBg);

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

{/* Language */}
                
                {/* <button className="items-center ml-6 lg:flex"> */}
                    {/* <p className="text-xs md:text-sm">English</p>
                    <div className="pl-2 cursor-pointer">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div> */}

                {/* </button> */}
                
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

            <div className="justify-between text-sm lg:block hidden">
                <NavLink activeClassName="text-banoo" className='px-4 hover:text-blue-500 xl:px-6 ' exact to='/'>Home</NavLink>
                <NavLink activeClassName="text-banoo" className='px-4 hover:text-blue-500 xl:px-6' to='/products'>Products</NavLink>
                <NavLink activeClassName="text-banoo" className='px-4 hover:text-blue-500 xl:px-6' to='/about'>About Us</NavLink>
                <NavLink activeClassName="text-banoo" className='px-4 hover:text-blue-500 xl:px-6' to='/solutions'>Solutions</NavLink>
                <NavLink activeClassName="text-banoo" className='px-4 hover:text-blue-500 xl:px-6' to='/blog'>Blog</NavLink>
                <NavLink activeClassName="text-banoo" className='px-4 hover:text-blue-500 xl:px-6' to='/contact'>Contact Us</NavLink>
                {/* <Link className='p-4 hover:text-blue-500 xl:p-6 ' to='/'>Home</Link>
                <Link className='p-4 hover:text-blue-500 xl:p-6' to='/products'>Products</Link>
                <Link className='p-4 hover:text-blue-500 xl:p-6' to='/about'>About Us</Link>
                <Link className='p-4 hover:text-blue-500 xl:p-6' to='/solutions'>Solutions</Link>
                <Link className='p-4 hover:text-blue-500 xl:p-6' to='/blog'>Blog</Link>
                <Link className='p-4 hover:text-blue-500 xl:p-6' to='/contact'>Contact Us</Link> */}
             </div>
        </div>
        </nav>
    )
}

export default Navbar
