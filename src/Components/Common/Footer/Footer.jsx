import logo from "../../../Assets/Logo/damac-white-logo.webp"

import { FaFacebook, FaLinkedin, FaTelegram, FaTelegramPlane, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

import "./Footer.scss"


export default function Footer() {
    return (
        <footer className="footer">
            {/* <div className="footer-head"></div> */}

            <div className="footer_row">
                {/* Column 1: Contact Us */}
                <div className="footer_col contact_us_col">
                    <div className="contact_content">
                        {/* DAMAC Logo */}
                        <img src={logo} className="company_logo" alt="DAMAC Properties" />
                        <div className="contact_details_group">
                            <p className="description">
                                Since 2002, DAMAC Properties has been redefining luxury living with iconic developments across Dubai and around the world.
                            </p>
                            <p className="address">
                                DAMAC Hills, Al Hebiah Third,<br /> Dubai, United Arab Emirates
                            </p>
                            <p className="email">
                                <a href="mailto:info@damacgroup.com">info@damacgroup.com</a>
                            </p>
                            <p className="phone">
                                <a href="tel:+97144249044">+971 4 424 9044</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Column 2: Overview */}
                <div className="footer_col">
                    <h2 className="head">Overview</h2>
                    <ul>
                        <li>About DAMAC</li>
                        <li>Our Communities</li>
                        <li>Investor Relations</li>
                        <li>News & Media</li>
                        <li>Careers</li>
                    </ul>
                </div>

                {/* Column 3: Our Developments */}
                <div className="footer_col">
                    <h2 className="head">Our Developments</h2>
                    <ul>
                        <li>Luxury Residences</li>
                        <li>Serviced Apartments</li>
                        <li>Hotels & Resorts</li>
                        <li>Golf Communities</li>
                        <li>Commercial Properties</li>
                    </ul>
                </div>

                {/* Column 4: Services */}
                <div className="footer_col">
                    <h2 className="head">Services</h2>
                    <ul>
                        <li>Property Sales</li>
                        <li>Property Management</li>
                        <li>Mortgage Assistance</li>
                        <li>Customer Care</li>
                        <li>Leasing Services</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Footer Section */}
            <div className="bottom_footer">
                <div className="left_section">
                    <p>Privacy Policy</p>
                    <span className="separator">|</span>
                    <p>Terms & Conditions</p>
                </div>
                <div className="right_section">
                    <p>© 2025. All Rights Reserved by DAMAC Properties.</p>
                </div>
            </div>
        </footer>
    );
}