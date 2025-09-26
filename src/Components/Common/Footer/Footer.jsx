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
                                Experience the ultimate island lifestyle at DAMAC Islands Phase 2, where luxury meets nature in Dubai's most exclusive waterfront community.
                            </p>
                            <p className="address">
                                DAMAC Islands Phase 2,<br /> Dubai, United Arab Emirates
                            </p>
                            <p className="email">
                                <a href="mailto:islands@damacgroup.com">islands@damacgroup.com</a>
                            </p>
                            <p className="phone">
                                <a href="tel:+97144249044">+971 4 424 9044</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Column 2: Island Activities */}
                <div className="footer_col">
                    <h2 className="head">Island Activities</h2>
                    <ul>
                        <li>Aqua Dome & Water Sports</li>
                        <li>Jungle River & Zipline</li>
                        <li>Wildlife Parks & Nature</li>
                        <li>Yoga & Wellness</li>
                        <li>Private Boat Rides</li>
                    </ul>
                </div>

                {/* Column 3: Island Amenities */}
                <div className="footer_col">
                    <h2 className="head">Island Amenities</h2>
                    <ul>
                        <li>Luxury Villas (4-6 Bedrooms)</li>
                        <li>Private Pools & Gardens</li>
                        <li>Hot Springs Spa</li>
                        <li>Fitness Centers</li>
                        <li>Wedding Venues</li>
                    </ul>
                </div>

                {/* Column 4: Island Experience */}
                <div className="footer_col">
                    <h2 className="head">Island Experience</h2>
                    <ul>
                        <li>Lagoon Tours & Hammocks</li>
                        <li>Mini Golf & Sports</li>
                        <li>Parrot Park & Wildlife</li>
                        <li>Central Hub Fountain</li>
                        <li>Gondola Style Paddling</li>
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
                    <p>© 2025. All Rights Reserved by DAMAC Islands Phase 2.</p>
                </div>
            </div>
        </footer>
    );
}