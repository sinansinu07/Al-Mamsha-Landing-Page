import React, { useEffect, useState } from 'react'
import "./Header.scss"

import logo from "../../../Assets/Logo/Al-Mamsha-logo-final.png"
import whatsapp from "../../../Assets/Common/whatsapp.svg"

import { useLocation } from 'react-router-dom'
import { navs } from '../../../App.util'
import { RiMenu2Line } from 'react-icons/ri'
import { IoClose } from 'react-icons/io5'
import { MdCall } from 'react-icons/md'
import useIsMobile from '../../../Utils/useIsMobile'
import HamburgerButton from '../../../Designs/HamburgerButton/HamburgerButton'

export default function Header(){
    const location = useLocation()
    const [ isSticky, setIsSticky ] = useState(false)
    const [ activeSection, setActiveSection ] = useState("")

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

            // Section detection logic
            if (location.pathname === "/") {
                const sections = ['about-us', 'services', 'pricing', 'gallery', 'contact-us'];
                let currentSection = '';

                sections.forEach(section => {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        const isVisible = rect.top <= 100 && rect.bottom >= 100;
                        if (isVisible) {
                            currentSection = section;
                        }
                    }
                });

                // If no section is detected but we're scrolled past hero, default to first section
                if (!currentSection && window.scrollY > window.innerHeight * 0.5) {
                    currentSection = '';
                }

                setActiveSection(currentSection);
            } else {
                setActiveSection('');
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

    // Handle click outside to close menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileMenu && !event.target.closest('.desktop-side-menu') && !event.target.closest('.hamburger-btn')) {
                setMobileMenu(false);
            }
        };

        if (mobileMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [mobileMenu]);

    return (
        <nav className='navbar-container'>
            <div className={`navbar ${isSticky ? "sticky" : ""} ${location.pathname === "/thank-you" ? "thank-you-header" : ""}`}>
                <div className="logo-div">
                    <a href="/"><img src={!isSticky ? logo : logo} alt="Logo" className="logo"/></a>
                </div>
                <div className="nav-links-div">
                    {/* Desktop navigation is now hidden - only show on mobile */}
                    <ul className={`menu-bar ${mobileMenu ? "" : "hide-menu-bar"}`}>
                        {navs.map((ele) => {
                            // Determine if this nav item should be active
                            const isActive = () => {
                                if (ele.path === "/") {
                                    return location.pathname === "/" && activeSection === "";
                                } else if (ele.path.startsWith("#")) {
                                    const sectionId = ele.path.substring(1); // Remove the # symbol
                                    return activeSection === sectionId;
                                }
                                return location.pathname === ele.path;
                            };

                            return (
                                <li
                                    className="menu-items"
                                    key={ele.id}
                                    >
                                        <a href={ele.path} className={isActive() ? "active" : ""}>
                                            {ele.name}
                                        </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="btn-icon-div">
                    <a className="btn-white-div" 
                    href="tel:+971987654321"
                    >
                        <div className="btn btn-white-fill phone" >
                            {(isMobile) ? <MdCall className="login-icon"/> :
                                <div className="phone-number">
                                    <MdCall className="login-icon"/>
                                    {/* +971987654321 */}
                                </div>
                            }
                        </div>
                    </a>
                    <HamburgerButton onClick={toggleMenu} isActive={mobileMenu} />
                </div>
                
                {/* Desktop Side Menu */}
                <div className={`desktop-side-menu ${mobileMenu ? "show" : ""}`}>
                    
                    <div className="side-menu-content">
                        <ul className="side-menu-nav">
                            {navs.map((ele) => {
                                const isActive = () => {
                                    if (ele.path === "/") {
                                        return location.pathname === "/" && activeSection === "";
                                    } else if (ele.path.startsWith("#")) {
                                        const sectionId = ele.path.substring(1);
                                        return activeSection === sectionId;
                                    }
                                    return location.pathname === ele.path;
                                };

                                return (
                                    <li className="side-menu-item" key={ele.id}>
                                        <a href={ele.path} className={isActive() ? "active" : ""} onClick={() => setMobileMenu(false)}>
                                            {ele.name}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                        {/* <div className="side-menu-contact">
                            <a href="tel:++971987654321" className="btn btn-white-fill" onClick={() => setMobileMenu(false)}>
                                <MdCall className="contact-icon"/>
                                +971987654321
                            </a>
                        </div> */}
                    </div>
                </div>
                
            </div>
        
            <div  className="contact-us-div"><a href="#contact-us">
                Contact Us
            </a></div>
            <div  className="whatsapp-div"><a href="https://wa.me/++971987654321">
                <img src={whatsapp} alt="WhatsApp" />
            </a></div>
            <div  className="call-us-div"><a href="tel:+971987654321">
                <MdCall className="contact-icon"/>
            </a></div>
        </nav>
    )
}