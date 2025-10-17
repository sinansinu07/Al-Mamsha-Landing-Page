import "./Pricing.scss"

export default function Pricing() {
    const pricingData = [
        {
            type: "1 Bedroom",
            carpetArea: "608 - 934 Sq.ft.",
            price: "AED 729 K Onwards"
        },
        {
            type: "2 Bedroom", 
            carpetArea: "2125 - 2187 Sq.ft.",
            price: "AED On Request"
        },
        {
            type: "3 Bedroom",
            carpetArea: "On Request",
            price: "AED On Request"
        }
    ];

    return (
        <section id="pricing">
            <div className="pricing-section section-container">
                <div className="pricing-header">
                    <h2 className="pricing-title">Al Mamsha Pricing</h2>
                    <h3 className="pricing-subtitle">Investment Opportunities</h3>
                    <p className="pricing-description">
                        Discover our range of premium residential options designed to meet your lifestyle needs. 
                        From cozy 1-bedroom apartments to spacious 3-bedroom units, find your perfect home in Al Mamsha.
                    </p>
                </div>

                <div className="pricing-cards">
                    {pricingData.map((item, index) => (
                        <div key={index} className="pricing-card">
                            <div className="card-header">
                                <h4 className="unit-type">{item.type}</h4>
                                <div className="price-badge">
                                    <span className="price">{item.price}</span>
                                </div>
                            </div>
                            
                            <div className="card-content">
                                <div className="area-info">
                                    <span className="area-label">Carpet Area</span>
                                    <span className="area-value">{item.carpetArea}</span>
                                </div>
                                
                                <div className="card-features">
                                    <div className="feature-item">
                                        <span className="feature-icon">✓</span>
                                        <span className="feature-text">Premium finishes</span>
                                    </div>
                                    <div className="feature-item">
                                        <span className="feature-icon">✓</span>
                                        <span className="feature-text">Modern amenities</span>
                                    </div>
                                    <div className="feature-item">
                                        <span className="feature-icon">✓</span>
                                        <span className="feature-text">Prime location</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card-footer">
                                <button className="inquiry-btn">
                                    Get Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pricing-footer">
                    <div className="disclaimer">
                        <p>
                            <strong>Note:</strong> Prices are subject to change without prior notice. 
                            Please contact our sales team for the most current pricing and availability.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
