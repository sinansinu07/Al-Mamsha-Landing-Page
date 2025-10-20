import { useState } from "react";
import { ImEnlarge } from "react-icons/im";
import "./Location.scss";

import locationMap from "../../../Assets/Common/location.webp";

export default function Location({ openPopup }) {
    const [enlargedImage, setEnlargedImage] = useState(null);

    const locationDetails = [
        {
            id: 1,
            time: "2 Minutes",
            destination: "University City of Sharjah"
        },
        {
            id: 2,
            time: "5 Minutes",
            destination: "Schools' Complex"
        },
        {
            id: 3,
            time: "5 Minutes",
            destination: "06 Mall"
        },
        {
            id: 4,
            time: "4 Minutes",
            destination: "Sheikh Mohammad Bin Zayed Road"
        },
        {
            id: 5,
            time: "5 Minutes",
            destination: "Sharjah International Airport"
        },
        {
            id: 6,
            time: "15 Minutes",
            destination: "Dubai International Airport"
        }
    ];

    const handleImageClick = (imageSrc, imageAlt) => {
        setEnlargedImage({ src: imageSrc, alt: imageAlt });
    };

    const closeEnlargedImage = () => {
        setEnlargedImage(null);
    };

    return (
        <section id="location">
            <div className="location-section section-container">
                <div className="location-header">
                    <h2 className="location-title">Location</h2>
                    <p className="location-description">
                        Strategically located in the heart of Sharjah with easy access to key destinations
                    </p>
                </div>

                <div className="location-content">
                    {/* Left Side - Google Maps */}
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.1234567890!2d55.1234567!3d25.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA3JzI0LjQiTiA1NcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Al Mamsha Location Map"
                        ></iframe>
                    </div>

                    {/* Right Side - Map Image with Enlarge */}
                    <div className="map-image-container">
                        <div className="map-image-box">
                            <img 
                                src={locationMap} // Replace with actual map image
                                alt="Al Mamsha Location Map"
                                className="map-image"
                                onClick={() => handleImageClick(locationMap, "Al Mamsha Location Map")}
                            />
                            <button 
                                className="enlarge-btn"
                                onClick={() => handleImageClick(locationMap, "Al Mamsha Location Map")}
                            >
                                <ImEnlarge />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="btn-container">
                    <button className="btn btn-primary-fill" onClick={openPopup}>
                        Know More About Location
                    </button>
                </div>

                {/* Location Details Section */}
                <div className="location-details">
                    <h3 className="details-title">Nearby Destinations</h3>
                    <div className="details-grid">
                        {locationDetails.map((detail) => (
                            <div key={detail.id} className="detail-item">
                                <div className="detail-time">{detail.time}</div>
                                <div className="detail-destination">{detail.destination}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Enlarged Image Modal */}
                {enlargedImage && (
                    <div className="image-modal-overlay" onClick={closeEnlargedImage}>
                        <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-btn" onClick={closeEnlargedImage}>
                                ✕
                            </button>
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
