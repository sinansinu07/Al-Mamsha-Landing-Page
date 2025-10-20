import React, { useEffect, useState } from 'react'
import "./Header2.scss"

import logo from "../../../Assets/Logo/Al-Mamsha-logo-final.png"

import { useLocation } from 'react-router-dom'
import { navs } from '../../../App.util'
export default function Header2(){
    const location = useLocation()
    const [ isSticky, setIsSticky ] = useState(false)
    const [ activeSection, setActiveSection ] = useState("")
    const isFullWidthRoute = location.pathname === '/thank-you' || location.pathname !== '/'

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
        <nav className='navbar-container-2'>
            <div className={`navbar2 ${isSticky ? "sticky" : ""} ${location.pathname === "/thank-you" ? "thank-you-header" : ""} ${isFullWidthRoute ? "full" : ""}`}>
                <div className="logo-div">
                    <a href="/"><img src={!isSticky ? logo : logo} alt="Logo" className="logo"/></a>
                </div>
                <div className="btn-div">
                    <button className="btn btn-white">Contact Us</button>
                </div>
            </div>
        </nav>
    )
}