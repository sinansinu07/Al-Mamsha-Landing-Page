import "./Pricing.scss"

export default function Pricing({ openPopup }) {
    const pricingData = [
        {
            type: "1 Bedroom",
            area: "608 - 934 Sq.ft.",
            price: "AED 729 K Onwards"
        },
        {
            type: "2 Bedroom", 
            area: "2125 - 2187 Sq.ft.",
            price: "AED On Request"
        },
        {
            type: "3 Bedroom",
            area: "On Request",
            price: "AED On Request"
        }
    ];

    return (
        <section id="pricing">
            <div className="pricing-section section-container">
                <div className="pricing-header">
                    <h2 className="pricing-title">Pricing</h2>
                    <p className="pricing-description">
                        Choose your perfect home in Al Mamsha Sharjah
                    </p>
                </div>

                <div className="pricing-content">
                    <div className="pricing-table-container">
                        <table className="pricing-table">
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Carpet Area</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pricingData.map((item, index) => (
                                    <tr key={index}>
                                        <td className="type-cell">{item.type}</td>
                                        <td className="area-cell">{item.area}</td>
                                        <td className="price-cell">{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="pricing-cta">
                        <button className="cta-button" onClick={openPopup}>
                            Request Complete Costing Details
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}