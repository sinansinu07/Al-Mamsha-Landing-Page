import "./CTA.scss";
import bannerImage from "../../../Assets/Banner/banner-4.jpg";

export default function CTA() {
    const handleCTAClick = () => {
        // Scroll to contact form or open contact modal
        const contactSection = document.getElementById('contact-us');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="cta-section">
            <div className="cta-section">
                <div className="cta-background">
                    <img src={bannerImage} alt="Al Mamsha Development" className="cta-banner-image" />
                    <div className="cta-overlay"></div>
                </div>
                
                <div className="cta-content section-container">
                    <div className="cta-text">
                        <h2 className="cta-title">
                            Ready to Experience 
                            <span className="highlight"> Al Mamsha?</span>
                        </h2>
                        <p className="cta-description">
                            Join the future of urban living in Sharjah's first fully walkable community. 
                            Discover premium residential options with world-class amenities and 
                            unmatched connectivity to Dubai and other Emirates.
                        </p>
                        <div className="cta-features">
                            <div className="feature-item">
                                <span className="feature-icon">✓</span>
                                <span className="feature-text">Freehold ownership for all nationalities</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">✓</span>
                                <span className="feature-text">Flexible payment plans available</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">✓</span>
                                <span className="feature-text">Prime location with excellent connectivity</span>
                            </div>
                        </div>
                        <button className="cta-button" onClick={handleCTAClick}>
                            Get Started Today
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
