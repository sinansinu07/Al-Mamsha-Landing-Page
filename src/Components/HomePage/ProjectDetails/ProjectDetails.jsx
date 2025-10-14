import "./ProjectDetails.scss"

import project1 from "../../../Assets/Projects/Hamsa.png"
import project2 from "../../../Assets/Projects/Raseel.jpg"

export default function ProjectDetails() {
    return (
        <section id="about-us">
            <div className="about-company-section section-container">
                <div className="head-div">
                    <div className="head-top">
                        <h3 className="top-title">About Al Mamsha</h3>
                    </div>
                    <h1 className="main-title">Discover Our <span className="color">Two Iconic Projects</span></h1>
                    <p className="description">Experience the pinnacle of modern living with our two exceptional Al Mamsha developments, each offering unique lifestyle experiences in Sharjah's first fully walkable community.</p>
                </div>
                
                <div className="projects-container">
                    {/* Al Mamsha Hamsa Project */}
                    <div className="project-card">
                        <div className="project-image">
                            {/* Image will be added from src/Assets/Project */}
                            <div className="placeholder-image">
                                <img src={project1} alt="Al Mamsha Hamsa" />
                            </div>
                        </div>
                        <div className="project-content">
                            <h2 className="project-title">Al Mamsha Hamsa</h2>
                            <h3 className="project-tagline">A NEW EDGE OF MODERNITY</h3>
                            <p className="project-description">
                                Experience the future of urban living with Al Mamsha Hamsa, where cutting-edge design meets sustainable lifestyle. This innovative development redefines modern living with its contemporary architecture and smart community features.
                            </p>
                            <div className="project-features">
                                <span className="feature-tag">Modern Architecture</span>
                                <span className="feature-tag">Smart Living</span>
                                <span className="feature-tag">Sustainable Design</span>
                            </div>
                        </div>
                    </div>

                    {/* Al Mamsha Raseel Project */}
                    <div className="project-card">
                        <div className="project-image">
                            {/* Image will be added from src/Assets/Project */}
                            <div className="placeholder-image">
                                <img src={project2} alt="Al Mamsha Raseel" />
                            </div>
                        </div>
                        <div className="project-content">
                            <h2 className="project-title">Al Mamsha Raseel</h2>
                            <h3 className="project-tagline">LUXURY REDEFINED</h3>
                            <p className="project-description">
                                Indulge in the ultimate luxury living experience at Al Mamsha Raseel, where sophistication meets comfort. This premium development offers unparalleled amenities and world-class finishes for the discerning resident.
                            </p>
                            <div className="project-features">
                                <span className="feature-tag">Luxury Amenities</span>
                                <span className="feature-tag">Premium Finishes</span>
                                <span className="feature-tag">Exclusive Living</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}