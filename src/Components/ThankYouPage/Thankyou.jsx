import React, { useEffect } from "react";
import "./ThankYou.css";
import { FaHandshake } from "react-icons/fa";


import Helmet from "../../General/Helmet";
import { initThankYouPageScripts } from "../../Utils/scripts";

export default function Thankyou() {    
    // On Thank You Page
    useEffect(() => {
        const cleanup = initThankYouPageScripts();
        return cleanup;
    }, []);

    return (
        <>
            <Helmet title="Thank You | DAMAC Island Phase 2" />
            <section id="thankyou" className="thankyou">
                {/* <div> */}
                    <FaHandshake className="icon-thankyou"/>
                {/* </div> */}
                <h1>THANK YOU</h1>
                <h2>We'll get back to you soon</h2>
                <div>
                    <a href="/">
                        <button className="btn btn-blue-fill">Back To Home
                            <span className="line">
                                <span className="circle"></span>
                            </span>
                        </button>
                    </a>
                </div>
            </section>
        </>
    );
} 