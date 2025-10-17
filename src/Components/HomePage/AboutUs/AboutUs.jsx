import "./AboutUs.scss"

import project1 from "../../../Assets/Projects/Hamsa-2.jpg"
import project2 from "../../../Assets/Projects/Raseel-2.jpg"

export default function AboutUs() {
    return (
        <section id="about-us">
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
                        
                        </div>
                        {/* <div className="content-right"> */}
                            <div className="project-image">
                                <img src={project1} alt="Al Mamsha Sharjah" />
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
