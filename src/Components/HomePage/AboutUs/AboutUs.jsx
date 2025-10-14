import "./AboutUs.scss"

import project1 from "../../../Assets/Projects/Hamsa-2.jpg"
import project2 from "../../../Assets/Projects/Raseel-2.jpg"

export default function AboutUs() {
    return (
        <section id="project-showcase">
            <div className="project-showcase-section section-container">
                {/* Al Mamsha Hamsa Section */}
                <div className="project-section hamsa-section">
                    <div className="project-content">
                        <div className="content-left">
                            <h2 className="project-title">Al Mamsha Raseel</h2>
                            <h3 className="project-subtitle">Explore Al Mamsha</h3>
                            <p className="project-description">
                                Al Mamsha is Strategically located just off Sheikh Mohammed Bin Zayed Road in the Heart of New Sharjah, and is just 5 minutes away from Sharjah International Airport and University City and 10 minutes from the Sharjah-Dubai border.
                            </p>
                            
                            <div className="project-features">
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    <span className="feature-text">Strategic location with easy access to major highways and airports.</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    <span className="feature-text">Prime connectivity to Dubai and other Emirates within minutes.</span>
                                </div>
                            </div>
                        </div>
                        <div className="content-right">
                            <div className="project-image">
                                {/* Image will be added from src/Assets/Projects */}
                                <div className="placeholder-image">
                                    <img src={project1} alt="Al Mamsha Hamsa" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Al Mamsha Raseel Section */}
                <div className="project-section raseel-section">
                    <div className="project-content">
                        <div className="content-left">
                            <div className="project-image">
                                {/* Image will be added from src/Assets/Projects */}
                                <div className="placeholder-image">
                                    <img src={project2} alt="Al Mamsha Raseel" />
                                </div>
                            </div>
                        </div>
                        <div className="content-right">
                            <h2 className="project-title">Al Mamsha Hamsa</h2>
                            <h3 className="project-subtitle">Walkthrough Al Mamsha</h3>
                            <h4 className="project-tagline">A New Living Experience By Alef Group In The Heart Of New Sharjah.</h4>
                            
                            <div className="project-features">
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    <span className="feature-text">Open to all nationalities with FREEHOLD ownership.</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    <span className="feature-text">Flexible payment plans directly from developer.</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    <span className="feature-text">Sharjah's first fully walkable car-free community.</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    <span className="feature-text">Wide array of retail for the first time in Sharjah.</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    <span className="feature-text">Unique residential buildings with international quality standards.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
