import "./QuickContact.scss"

import banner from "../../../Assets/Banner/Banner-3.jpg"
import { FaPaperPlane } from "react-icons/fa"

export default function QuickContact() {
    return (
        <section>
            <div className="quick-contact">
                <img src={banner} alt="" />
                <div className="overlay"></div>
                <div className="quick-contact-content">
                        <h1>Experience Al Mamsha<br/> Sharjah's First Walkable Community</h1>
                    <div className="button-div">
                        <a href="#contact-us"><button className="btn btn-white-fill">
                            <div className="icon-div">
                                <FaPaperPlane />
                            </div>
                            <span className="text">
                                Get Exclusive Offer
                            </span>
                            <span className="loading-animate"></span>
                        </button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}