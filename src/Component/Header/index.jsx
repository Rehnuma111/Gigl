import React from "react";
import logo from "../Assests/Img/logo.png";
import { FaGlobe } from "react-icons/fa";
import {AiOutlineMenu} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";


const Header = () => {
    return (
        <div className="w-full bg-[#F8F9FA]">
            <header className="max-w-[1240px] mx-auto p-3 flex items-center justify-between">
                <div>
                    <img src={logo} alt="Logo" />
                </div>

                <AiOutlineMenu className="ml-auto min-[998px]:hidden"/>

                <nav>
                    <ul className="hidden min-[998px]:flex items-center gap-x-7 text-gray-500 cursor-pointer">
                        <li>Listen</li>
                        <li>Watch</li>
                        <li>Blog</li>
                        <li>
                            <input type="text" className="w-full border border-gray-500 focus:ring-0 focus:outline-none focus:border-none p-2" placeholder="Search Here..."/>
                        </li>
                        <li>Premium</li>
                        <li>Login</li>
                        <li>Sign Up</li>
                        <li className="text-blue-500 text-2xl"><FaGlobe /></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
