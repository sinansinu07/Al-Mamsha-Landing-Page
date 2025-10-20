import logo from "../../../Assets/Logo/Al-Mamsha-logo-final.png"

import { FaFacebook, FaLinkedin, FaTelegram, FaTelegramPlane, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

import "./Footer2.scss"


export default function Footer2() {
    return (
        <footer className="footer2">
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