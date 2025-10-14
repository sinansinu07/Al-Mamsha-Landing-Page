import logo from "../../../Assets/Logo/Al-Mamsha-logo-final.png"

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
                        <img src={logo} className="company_logo" alt="Al Mamsha" />
                        <div className="contact_details_group">
                            <p className="description">
                                Al Mamsha is Sharjah's first fully walkable community, offering modern lifestyle living with two iconic projects - Hamsa and Raseel. Experience sustainable urban living with premium amenities in the heart of New Sharjah.
                            </p>
                            {/* <p className="address">
                                DAMAC Islands Phase 2,<br /> Dubai, United Arab Emirates
                            </p> */}
                            {/* <p className="email">
                                <a href="mailto:islands@damacgroup.com">islands@damacgroup.com</a>
                            </p>
                            <p className="phone">
                                <a href="tel:+97144249044">+971 4 424 9044</a>
                            </p> */}
                        </div>
                    </div>
                </div>

                {/* Column 2: Community Features */}
                <div className="footer_col">
                    <h2 className="head">Community Features</h2>
                    <ul>
                        <li>Walkable Neighborhoods</li>
                        <li>Retail & Shopping</li>
                        <li>Modern Architecture</li>
                        <li>Sustainable Living</li>
                        <li>Smart Community</li>
                    </ul>
                </div>

                {/* Column 3: Project Amenities */}
                <div className="footer_col">
                    <h2 className="head">Project Amenities</h2>
                    <ul>
                        <li>Al Mamsha Hamsa</li>
                        <li>Al Mamsha Raseel</li>
                        <li>Premium Residences</li>
                        <li>Retail Spaces</li>
                        <li>Community Facilities</li>
                    </ul>
                </div>

                {/* Column 4: Location Benefits */}
                <div className="footer_col">
                    <h2 className="head">Location Benefits</h2>
                    <ul>
                        <li>Sheikh Mohammed Bin Zayed Road</li>
                        <li>5 Minutes to Sharjah Airport</li>
                        <li>10 Minutes to Dubai Border</li>
                        <li>University City Access</li>
                        <li>New Sharjah Heart</li>
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
                    <p>© 2025. All Rights Reserved by Al Mamsha.</p>
                </div>
            </div>
        </footer>
    );
}