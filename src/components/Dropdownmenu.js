import React from 'react';
import {NavLink} from 'react-router-dom'

const DropdownMenu = ({isOpen, toggle}) => {
    return (
       
        <div className=
        {
            isOpen ? 
            "fixed pt-20 h-3/5 w-3/5 right-0 transition-all duration-700 ease-in z-50" : 
            "fixed pt-20 h-3/5 w-3/5 -right-full transition-all duration-700 ease-in z-50"
        } 
        onClick={toggle}
        >
            
            <div className=" grid py-4 grid-row-6 divide-y px-10 divide-banoo gap-y-6 text-center items-center text-sm font-extrabold font-spartan items-center border-2 rounded-md rounded-tr-none border-gray-300 bg-white 
            ">
                <NavLink activeClassName="text-banoo" className='pt-3' exact to='/'>Home</NavLink>
                <NavLink activeClassName="text-banoo" className='pt-6' to='/products'>Products</NavLink>
                <NavLink activeClassName="text-banoo" className='pt-6' to='/about'>About Us</NavLink>
                <NavLink activeClassName="text-banoo" className='pt-6 items-center' to='/solutions'>Solutions</NavLink>
                <NavLink activeClassName="text-banoo" className='pt-6' to='/blog'>Blog</NavLink>
                <NavLink activeClassName="text-banoo" className='pt-6 pb-3' to='/contact'>Contact Us</NavLink>
            </div> 
        </div>
        
    )
}

export default DropdownMenu
