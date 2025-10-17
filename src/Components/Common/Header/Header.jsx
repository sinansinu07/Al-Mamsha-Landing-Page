import React, { useEffect, useState } from 'react'
import "./Header.scss"

import logo from "../../../Assets/Logo/Al-Mamsha-logo-final.png"

import { useLocation } from 'react-router-dom'
import { navs } from '../../../App.util'
export default function Header(){
    const location = useLocation()
    const [ isSticky, setIsSticky ] = useState(false)
    const [ activeSection, setActiveSection ] = useState("")

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


    return (
        <nav className='navbar-container'>
            <div className={`navbar ${isSticky ? "sticky" : ""} ${location.pathname === "/thank-you" ? "thank-you-header" : ""}`}>
                <div className="logo-div">
                    <a href="/"><img src={!isSticky ? logo : logo} alt="Logo" className="logo"/></a>
                </div>
                <div className="nav-links-div">
                    <ul className="menu-bar">
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
            </div>
        </nav>
    )
}