import React from 'react'
import { Link } from 'react-router-dom';


const NavbarMenu = [

    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "Register",
        link: "#",
    },
    {
        id: 3,
        title: "UserInfo",
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Coverage",
        link: "#",
    },
    {
        id: 5,
        title: "AboutUs",
        link: "#",
    },
    {
        id: 6,
        title: "Trends",
        link: "#",
    },
    



]
const Nav = () => {
  return (
    <nav>

        <div className="container flex justify-between items-center py-4 md:pt-4">
            <div className="text-2xl flex items-center gap-1 font-bold">
                <p className="text-secondary whitespace-pre-wrap">RFIDPAY BrakeLimitsStayWithit</p>
                
            </div>
            <div className="hidden md:block">
                
                <ul className="flex items-center gap-3 text-gray-950">
                   {NavbarMenu.map((menu) => (
                    <li key={menu.id} className="text-xl">
                        <a href={menu.link} className="inline-block py-1 px-3 hover:text-secondary hover:shadow-[0_3px_o_-1px_#23034b] font-semibold
                        relative text-black before:content-[''] before:absolute before:top-full before:left-0 before:w-0 before:h-[2px] before:bg-secondary before:transition-all before:duration-300 hover:before:w-full" >
                            {menu.title}
                            </a>
                    </li>
                   ) )}
                   <Link to = "/Signup" className=" font-semibold text-1xl hover:bg-secondary hover:text-white rounded-full border-3 border-secondary py-1 px-4 duration-200">
                    <p>SIGNUP</p>
                   </Link>
                </ul>      
            </div>
        </div>
    
    </nav>
  );
    };


export default Nav