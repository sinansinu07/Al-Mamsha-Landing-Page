import { useState, useEffect } from "react";
import "./Amenities.scss";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";


import swimmingPool from "../../../Assets/Amenties/swimming-pool.jpg";
import gym from "../../../Assets/Amenties/gym.jpg";
import kidsPlay from "../../../Assets/Amenties/kids-area.jpg";
import retailCenter from "../../../Assets/Amenties/retail-center.jpg";
import waterfront from "../../../Assets/Amenties/waterfron-view.jpg";
import multipurposeHall from "../../../Assets/Amenties/multipurpose-hall.jpg";
import yoga from "../../../Assets/Amenties/yoga.jpg";
import spa from "../../../Assets/Amenties/spa.jpg";
import security from "../../../Assets/Amenties/security-system.jpg";
import restaurant from "../../../Assets/Amenties/restaurant.jpg";
import mosque from "../../../Assets/Amenties/mosque.jpg";

export default function Amenities() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);

    // Responsive slides configuration
    useEffect(() => {
        const updateSlidesToShow = () => {
            if (window.innerWidth <= 480) {
                setSlidesToShow(1);
            } else if (window.innerWidth <= 768) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        
        return () => window.removeEventListener('resize', updateSlidesToShow);
    }, []);

    // Reset current slide when slidesToShow changes
    useEffect(() => {
        setCurrentSlide(0);
    }, [slidesToShow]);

    const amenities = [
        {
            id: 1,
            name: "Swimming Pool",
            image: swimmingPool,    
            alt: "Swimming Pool"
        },
        {
            id: 2,
            name: "Gym",
            image: gym,    
            alt: "Gym"
        },
        {
            id: 3,
            name: "Kids Play Area",
            image: kidsPlay,    
            alt: "Kids Play Area"
        },
        {
            id: 4,
            name: "Retail Center",
            image: retailCenter,    
            alt: "Retail Center"
        },
        {
            id: 5,
            name: "Stunning Waterfront Views",
            image: waterfront,    
            alt: "Stunning Waterfront Views"
        },
        {
            id: 6,
            name: "Multipurpose Hall",
            image: multipurposeHall,    
            alt: "Multipurpose Hall"
        },
        {
            id: 7,
            name: "Yoga, Aerobic and Zumba",
            image: yoga,    
            alt: "Yoga, Aerobic and Zumba"
        },
        {
            id: 8,
            name: "Spa & Wellness",
            image: spa,    
            alt: "Spa & Wellness"
        },
        {
            id: 9,
            name: "Security System",
            image: security,    
            alt: "Security System"
        },
        {
            id: 10,
            name: "Restaurant",
            image: restaurant,    
            alt: "Restaurant"
        },
        {
            id: 11,
            name: "Mosque",
            image: mosque,    
            alt: "Mosque"
        }
    ];

    const totalSlides = Math.ceil(amenities.length / slidesToShow);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };


    return (
        <section id="amenities">
            <div className="amenities-section section-container">
                <div className="amenities-header">
                    <h2 className="amenities-title">Amenities</h2>
                    <p className="amenities-description">
                        Discover the world-class amenities that make Al Mamsha the perfect place to call home
                    </p>
                </div>

                <div className="amenities-slider">
                    <button 
                        className="slider-btn prev-btn" 
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                    >
                        <GrFormPrevious />
                    </button>

                    <div className="amenities-container">
                        <div 
                            className="amenities-track"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                <div key={slideIndex} className="amenities-slide">
                                    {amenities.slice(slideIndex * slidesToShow, (slideIndex + 1) * slidesToShow).map((amenity) => (
                                        <div key={amenity.id} className="amenity-card">
                                            <div className="amenity-image-container">
                                                <img 
                                                    src={amenity.image} 
                                                    alt={amenity.alt}
                                                    className="amenity-image"
                                                />
                                                <div className="amenity-overlay">
                                                    <div className="amenity-name">
                                                        {amenity.name}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <button 
                        className="slider-btn next-btn" 
                        onClick={nextSlide}
                        disabled={currentSlide === totalSlides - 1}
                    >
                        <GrFormNext />
                    </button>
                </div>

                <div className="slider-dots">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}