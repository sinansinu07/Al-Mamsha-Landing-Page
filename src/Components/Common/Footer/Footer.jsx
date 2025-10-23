import logo from "../../../Assets/Logo/Al-Mamsha-logo-final.png"

import { FaFacebook, FaLinkedin, FaTelegram, FaTelegramPlane, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

import "./Footer.scss"


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer_row">
                {/* Column 1: Logo and Description */}
                <div className="footer_col logo_col">
                    <img src={logo} className="company_logo" alt="Al Mamsha" />
                    <p className="description">
                        Al Mamsha is Sharjah's first fully walkable community, offering modern lifestyle living with two iconic projects - Hamsa and Raseel. Experience sustainable urban living with premium amenities in the heart of New Sharjah.
                    </p>
                </div>

                {/* Column 2: Navigation Links */}
                <div className="footer_col">
                    <h3 className="footer_heading">Quick Links</h3>
                    <ul className="footer_links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#floorplan">Floor Plans</a></li>
                        <li><a href="#amenities">Amenities</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#location">Location</a></li>
                    </ul>
                </div>

                {/* Column 3: Amenities */}
                <div className="footer_col">
                    <h3 className="footer_heading">Amenities</h3>
                    <ul className="footer_links">
                        <li>Swimming Pool</li>
                        <li>Gym & Fitness</li>
                        <li>Kids Play Area</li>
                        <li>Retail Center</li>
                        <li>Waterfront Views</li>
                        <li>Security System</li>
                        <li>Restaurant & Cafe</li>
                    </ul>
                </div>

                {/* Column 4: Contact & Location */}
                <div className="footer_col">
                    <h3 className="footer_heading">Contact & Location</h3>
                    <ul className="footer_links">
                        <li>University City of Sharjah</li>
                        <li>Schools' Complex</li>
                        <li>06 Mall</li>
                        <li>Sheikh Mohammad Bin Zayed Road</li>
                        <li>Sharjah International Airport</li>
                        <li>Dubai International Airport</li>
                    </ul>
                </div>
            </div>

            {/* Disclaimer Section */}
            <div className="disclaimer_section">
                <h4 className="disclaimer_title">Disclaimer</h4>
                <p className="disclaimer_text">
                    The information provided on this website is intended exclusively for informational purposes and should not be construed as an offer of services. This site is managed by a RERA authorized real estate agency namely Propwise Property Real Estate Brokers LLC. The pricing information presented on this website is subject to alteration without advance notification, and the assurance of property availability cannot be guaranteed. The images showcased on this website are for representational purposes only and may not accurately reflect the actual properties. We may share your data with Real Estate Regulatory Agency (RERA) registered Developers for further processing as necessary. Additionally, we may send updates and information to the mobile number or email address registered with us. All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws. For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is recommended to contact us directly through the provided contact information on this website. Thank you for visiting our website.
                </p>
            </div>

            {/* Bottom Footer Section */}
            <div className="bottom_footer">
                <div className="left_section">
                    <p>Privacy Policy</p>
                    <span className="separator">|</span>
                    <p>Terms & Conditions</p>
                </div>
                <div className="right_section">
                    <p>© 2025. All Rights Reserved by Al Mamsha.</p>
                </div>
            </div>
        </footer>
    );
}