import React, { useEffect, useState } from 'react'
import "./Header.scss"

import logo from "../../../Assets/Logo/damac-white-logo.webp"
import whatsapp from "../../../Assets/Common/whatsapp.svg"

import { useLocation } from 'react-router-dom'
import { navs } from '../../../App.util'
import { RiMenu2Line } from 'react-icons/ri'
import { IoClose } from 'react-icons/io5'
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri"
import { FaXTwitter } from "react-icons/fa6";
import { MdCall } from 'react-icons/md'
import useIsMobile from '../../../Utils/useIsMobile'

export default function Header(){
    const location = useLocation()
    const [ isSticky, setIsSticky ] = useState(false)

    const [ mobileMenu, setMobileMenu ] = useState(false)
    const isMobile = useIsMobile(600)

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    useEffect(() => {
        const handleScroll = () => {
            // Debug logs - remove after testing
            console.log('Current pathname:', location.pathname);
            console.log('Scroll Y:', window.scrollY);
            console.log('Is sticky currently:', isSticky);
            
            if(location.pathname === "/thank-you" || location.pathname !== "/") {
                setIsSticky(true)
            } else if(window.scrollY > 100) {
                setIsSticky(true)
            } else {
                console.log('Setting sticky to false');
                setIsSticky(false)
            }
        };


        // Add the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Run once on mount to set initial sticky state
        handleScroll();

        // Cleanup the event listener on unmount
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, [location.pathname, isSticky]);

    return (
        <nav className='navbar-container'>
            <div className={`navbar ${isSticky ? "sticky" : ""}`}>
                <div className="logo-div">
                    <a href="/"><img src={!isSticky ? logo : logo} alt="Logo" className="logo"/></a>
                </div>
                <div className="nav-links-div">
                    <ul className={`menu-bar ${mobileMenu ? "" : "hide-menu-bar"}`}>
                        {navs.map((ele) => {
                            return (
                                <li
                                    className="menu-items"
                                    key={ele.id}
                                    >
                                        <a href={ele.path} className={location.pathname===ele.path ? "active" : ""}>
                                            {/* <FlipLinkText> */}
                                                {ele.name}
                                            {/* </FlipLinkText> */}
                                        </a>
                                </li>
                            )
                        })}
                        <div className="mobile-menu-footer">
                            <p className="social-head">Follow us On :</p>
                            <div className="social-links">
                                <a href=""><FaFacebook /></a>
                                <a href=""><RiInstagramFill /></a>
                                <a href=""><FaYoutube /></a>
                                <a href=""><FaXTwitter /></a>
                                <a href=""><FaTiktok /></a>
                            </div>
                        </div>
                    </ul>
                    {/* <hr className='menu-hr'/>
                    <BiLogIn className='login-icon'/> */}
                </div>
                <div className="btn-icon-div">
                    <a className="btn-white-div" href="#contact-us">
                        <div className="btn-white phone" >
                            {/* <FlipLinkBtn isHovered={isHovered}> */}
                                {(isMobile) ? <MdCall className="login-icon"/> : "Contact Us"}
                            {/* </FlipLinkBtn> */}
                        </div>
                    </a>
                    {!mobileMenu ? <RiMenu2Line className="menu-icon" onClick={toggleMenu}/> : <IoClose onClick={toggleMenu} className="menu-icon close"/> }
                </div>
                
            </div>
            
            <div  className="whatsapp-div"><a href="https://api.whatsapp.com/send/?phone=971558739884&text&type=phone_number&app_absent=0">
                <img src={whatsapp} alt="WhatsApp" />
            </a></div>
        </nav>
    )
}