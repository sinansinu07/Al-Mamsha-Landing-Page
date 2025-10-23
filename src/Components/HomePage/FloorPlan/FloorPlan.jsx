import { useState } from "react";
import "./FloorPlan.scss";

import masterPlanImg from "../../../Assets/Floor-Plans/master-plan.jpg";
import bedroom1 from "../../../Assets/Floor-Plans/1-bedroom.webp";
import bedroom2 from "../../../Assets/Floor-Plans/2-bedroom.webp";
import bedroom3 from "../../../Assets/Floor-Plans/3-bedroom.webp";
import { ImEnlarge } from "react-icons/im";
import { IoClose } from "react-icons/io5";

export default function FloorPlan({ openPopup }) {
    const [enlargedImage, setEnlargedImage] = useState(null);

    const masterPlan = {
        title: "Alef Hayyan - Master Plan",
        image: masterPlanImg,
        alt: "Alef Hayyan Master Plan"
    };

    const floorPlans = [
        {
            id: 1,
            name: "1 Bedroom",
            image: bedroom1,
            alt: "1 Bedroom Floor Plan"
        },
        {
            id: 2,
            name: "2 Bedroom",
            image: bedroom2,
            alt: "2 Bedroom Floor Plan"
        },
        {
            id: 3,
            name: "3 Bedroom",
            image: bedroom3,
            alt: "3 Bedroom Floor Plan"
        }
    ];

    const handleImageClick = (imageSrc, imageAlt) => {
        setEnlargedImage({ src: imageSrc, alt: imageAlt });
    };

    const closeEnlargedImage = () => {
        setEnlargedImage(null);
    };

    const handleGetPlanDetails = () => {
        openPopup();
    };

    return (
        <section id="floor-plan">
            <div className="floorplan-section section-container">
                <div className="floorplan-header">
                    <h2 className="floorplan-title">Floor Plans</h2>
                    <p className="floorplan-description">
                        Explore our carefully designed floor plans for every lifestyle
                    </p>
                </div>

                {/* Master Plan Section */}
                <div className="master-plan-section">
                    <div className="master-plan-container">
                        <div className="master-plan-image-box">
                            <img 
                                src={masterPlan.image} 
                                alt={masterPlan.alt}
                                className="master-plan-image"
                                onClick={() => handleImageClick(masterPlan.image, masterPlan.alt)}
                            />
                            <button 
                                className="hover-button"
                                onClick={() => handleImageClick(masterPlan.image, masterPlan.alt)}
                            >
                                View Master Plan
                            </button>
                            <button 
                                className="plan-details-hover-btn"
                                onClick={handleGetPlanDetails}
                            >
                                Get Full Plan Details
                            </button>
                            <button 
                                className="enlarge-btn"
                                onClick={() => handleImageClick(masterPlan.image, masterPlan.alt)}
                            >
                                <ImEnlarge />
                            </button>
                        </div>
                        <h3 className="master-plan-title">{masterPlan.title}</h3>
                    </div>
                </div>

                {/* Floor Plans Section */}
                <div className="floor-plans-section">
                    <h3 className="floor-plans-title">Alef Hayyan - Floor Plans</h3>
                    <div className="floor-plans-grid">
                        {floorPlans.map((plan) => (
                            <div key={plan.id} className="floor-plan-item">
                                <div className="floor-plan-image-box">
                                    <img 
                                        src={plan.image} 
                                        alt={plan.alt}
                                        className="floor-plan-image"
                                        onClick={() => handleImageClick(plan.image, plan.alt)}
                                    />
                                    {/* <button 
                                        className="hover-button"
                                        onClick={() => handleImageClick(plan.image, plan.alt)}
                                    >
                                        View Floor Plan
                                    </button> */}
                                    <button 
                                        className="plan-details-hover-btn"
                                        onClick={handleGetPlanDetails}
                                    >
                                        Get Details
                                    </button>
                                    <button 
                                        className="enlarge-btn"
                                        onClick={() => handleImageClick(plan.image, plan.alt)}
                                    >
                                        <ImEnlarge />
                                    </button>
                                </div>
                                <h4 className="floor-plan-name">{plan.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="floorplan-cta">
                    <button className="cta-button" onClick={openPopup}>
                        Request for More Floor Plans
                    </button>
                </div>

                {/* Enlarged Image Modal */}
                {enlargedImage && (
                    <div className="image-modal-overlay" onClick={closeEnlargedImage}>
                        <button className="close-btn" onClick={closeEnlargedImage}>
                            <IoClose />
                            </button>
                        <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                            <div className="img-div">
                                <img 
                                    src={enlargedImage.src} 
                                        alt={enlargedImage.alt}
                                        className="enlarged-image"
                                    />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
