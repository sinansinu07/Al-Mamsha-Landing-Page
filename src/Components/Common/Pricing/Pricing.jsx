import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './Pricing.scss';

import villa11 from "../../../Assets/Pricing/villa-11.webp";
import villa12 from "../../../Assets/Pricing/villa-12.webp";
import villa21 from "../../../Assets/Pricing/villa-21.webp";
import villa22 from "../../../Assets/Pricing/villa-22.webp";
import villa31 from "../../../Assets/Pricing/villa-31.webp";
import villa32 from "../../../Assets/Pricing/villa-32.webp";

const pricingData = [
    {
        id: 1,
        bedrooms: "4 BED",
        price: "2.45M",
        size: "2,208",
        sizeUnit: "sq ft",
        features: [
            "Master Bedroom with En-suite",
            "3 Additional Bedrooms",
            "Modern Kitchen",
            "Living & Dining Area",
            "Private Garden"
        ],
        images: [ villa11, villa12 ], // You can replace with actual villa images
        popular: false
    },
    {
        id: 2,
        bedrooms: "5 BED",
        price: "3.4M",
        size: "3,178",
        sizeUnit: "sq ft",
        features: [
            "Master Bedroom with En-suite",
            "4 Additional Bedrooms",
            "Spacious Kitchen",
            "Large Living Area",
            "Private Garden & Pool"
        ],
        images: [ villa21, villa22 ],
        popular: true
    },
    {
        id: 3,
        bedrooms: "6 BED",
        price: "7.4M",
        size: "4,440",
        sizeUnit: "sq ft",
        features: [
            "Master Bedroom with En-suite",
            "5 Additional Bedrooms",
            "Premium Kitchen",
            "Grand Living Area",
            "Private Garden, Pool & Gym"
        ],
        images: [ villa31, villa32 ],
        popular: false
    }
];

export default function Pricing() {
    return (
        <section className="pricing-section">
            <div className="pricing-container">
                <div className="pricing-header">
                    <h2 className="pricing-title">
                        Villa <span className="color">Pricing</span>
                    </h2>
                    <p className="pricing-subtitle">
                        Choose your perfect villa with luxury amenities and world-class design
                    </p>
                </div>

                <div className="pricing-grid">
                    {pricingData.map((villa, index) => (
                        <motion.div
                            key={villa.id}
                            className={`pricing-card ${villa.popular ? 'popular' : ''}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {villa.popular && (
                                <div className="popular-badge">
                                    Most Popular
                                </div>
                            )}

                            <div className="card-image">
                                <Swiper
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    className="villa-swiper"
                                >
                                    {villa.images.map((image, imageIndex) => (
                                        <SwiperSlide key={imageIndex}>
                                            <img src={image} alt={`${villa.bedrooms} Villa ${imageIndex + 1}`} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="image-overlay">
                                    <div className="size-info">
                                        <span className="size-number">{villa.size}</span>
                                        <span className="size-unit">{villa.sizeUnit}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="card-content">
                                <div className="villa-header">
                                    <h3 className="bedrooms">{villa.bedrooms}</h3>
                                    <div className="price">
                                        <span className="currency">AED</span>
                                        <span className="amount">{villa.price}</span>
                                    </div>
                                </div>

                                <div className="features">
                                    <h4 className="features-title">Key Features</h4>
                                    <ul className="features-list">
                                        {villa.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="feature-item">
                                                <span className="check-icon">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="card-footer">
                                    <button className="btn-blue-fill-2">
                                        Make Inquiry
                                    </button>
                                    {/* <button className="details-btn">
                                        View Details
                                    </button> */}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="pricing-footer">
                    <p className="footer-note">
                        *Prices are subject to change. Contact us for the latest pricing and availability.
                    </p>
                </div>
            </div>
        </section>
    );
}
