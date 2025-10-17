import "./AboutUs.scss"

import project1 from "../../../Assets/Projects/Hamsa-2.jpg"
import project2 from "../../../Assets/Projects/Raseel-2.jpg"

export default function AboutUs() {
    return (
        <section id="project-showcase">
            <div className="project-showcase-section section-container">
                {/* Al Mamsha Details Section */}
                <div className="project-section hamsa-section">
                    <div className="project-content">
                        <div className="content-left">
                            <h2 className="project-title">Al Mamsha Sharjah</h2>
                            <h3 className="project-subtitle">Redefining Urban Living</h3>
                            <p className="project-description">
                                Al Mamsha Sharjah is a state-of-the-art development that redefines urban living in the heart of Sharjah, UAE. Alef Al Mamsha Offering a collection of luxurious 1, 2, and 3-bedroom apartments, Al Mamsha Sharjah combines modern design with unmatched comfort and convenience. Ideally situated just off Sheikh Mohammed Bin Zayed Road, Al Mamsha Sharjah by Alef enjoys a prime location in New Sharjah, ensuring seamless connectivity to key destinations across the Emirates.
                            </p>
                            <p className="project-description">
                                Alef Al Mamsha this innovative, car-free, mixed-use community is designed to offer a unique lifestyle that blends modern living, retail, leisure, and entertainment in a vibrant urban setting. Mamsha Sharjah features walkable spaces, active retail zones, and dynamic entertainment districts, all enhanced by distinctive architecture and a high-quality public realm. Divided into two engaging zones – an active sports area and a family-focused live entertainment space – Mamsha Sharjah is more than just a residential address; it is a thriving destination for residents and visitors seeking a holistic, contemporary lifestyle in Sharjah.
                            </p>
                            
                            {/* <div className="project-features">
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    <span className="feature-text">Luxurious 1, 2, and 3-bedroom apartments with modern design.</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    <span className="feature-text">Car-free, mixed-use community with walkable spaces.</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    <span className="feature-text">Active retail zones and dynamic entertainment districts.</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    <span className="feature-text">Prime location with seamless connectivity across Emirates.</span>
                                </div>
                            </div> */}
                        </div>
                        <div className="content-right">
                            <div className="project-image">
                                {/* Image will be added from src/Assets/Projects */}
                                <div className="placeholder-image">
                                    <img src={project1} alt="Al Mamsha Sharjah" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project Details Section */}
                <div className="project-section raseel-section">
                    <div className="project-content">
                        <div className="content-left">
                            <div className="project-image">
                                {/* Image will be added from src/Assets/Projects */}
                                <div className="placeholder-image">
                                    <img src={project2} alt="Al Mamsha Projects" />
                                </div>
                            </div>
                        </div>
                        <div className="content-right">
                            <h2 className="project-title">Our Projects</h2>
                            <h3 className="project-subtitle">Discover Our Developments</h3>
                            
                            {/* Project 1 */}
                            <div className="project-detail">
                                <h4 className="project-name">Al Mamsha Hamsa</h4>
                                <p className="project-desc">
                                    A premium residential development featuring modern apartments with world-class amenities. Al Mamsha Hamsa offers residents a unique living experience with state-of-the-art facilities and prime location benefits.
                                </p>
                            </div>
                            
                            {/* Project 2 */}
                            <div className="project-detail">
                                <h4 className="project-name">Al Mamsha Raseel</h4>
                                <p className="project-desc">
                                    An innovative mixed-use development that combines residential, retail, and entertainment spaces. Al Mamsha Raseel creates a vibrant community hub with walkable streets, diverse retail options, and engaging entertainment zones.
                                </p>
                            </div>
                            
                            {/* <div className="project-features">
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    <span className="feature-text">Premium residential developments with modern amenities.</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    <span className="feature-text">Mixed-use communities with retail and entertainment.</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    <span className="feature-text">Walkable urban design promoting healthy lifestyle.</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    <span className="feature-text">Strategic locations with excellent connectivity.</span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
