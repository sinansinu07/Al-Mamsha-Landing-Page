import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Gallery.scss';

// Import your gallery images - you'll need to replace these with your actual images
import img1 from "../../../Assets/Gallery/img1.webp";
import img2 from "../../../Assets/Gallery/img2.webp";
import img3 from "../../../Assets/Gallery/img3.webp";
import img4 from "../../../Assets/Gallery/img4.webp";
import img5 from "../../../Assets/Gallery/img5.webp";
import img6 from "../../../Assets/Gallery/img6.webp";
import img7 from "../../../Assets/Gallery/img7.webp";
import img8 from "../../../Assets/Gallery/img8.webp";
import img9 from "../../../Assets/Gallery/img9.webp";
import img10 from "../../../Assets/Gallery/img10.webp";
import img11 from "../../../Assets/Gallery/img11.webp";
import img12 from "../../../Assets/Gallery/img12.webp";
import img13 from "../../../Assets/Gallery/img13.webp";
import img14 from "../../../Assets/Gallery/img14.webp";
import img15 from "../../../Assets/Gallery/img15.webp";
import img16 from "../../../Assets/Gallery/img16.webp";
import img17 from "../../../Assets/Gallery/img17.webp";
import img18 from "../../../Assets/Gallery/img18.webp";
import img19 from "../../../Assets/Gallery/img19.webp";
import img20 from "../../../Assets/Gallery/img20.webp";
import img21 from "../../../Assets/Gallery/img21.webp";
import img22 from "../../../Assets/Gallery/img22.webp";
import img23 from "../../../Assets/Gallery/img23.webp";

const galleryImages = [
    { id: 1, src: img1, alt: "DAMAC Islands Phase 2 - Central Hub" },
    { id: 2, src: img2, alt: "DAMAC Islands Phase 2 - Water Platform" },
    { id: 3, src: img3, alt: "DAMAC Islands Phase 2 - Aqua Dome" },
    { id: 4, src: img4, alt: "DAMAC Islands Phase 2 - Lagoon Waterfall" },
    { id: 5, src: img5, alt: "DAMAC Islands Phase 2 - Jungle River" },
    { id: 6, src: img6, alt: "DAMAC Islands Phase 2 - Aqua Park" },
    { id: 7, src: img7, alt: "DAMAC Islands Phase 2 - Jungle Swings" },
    { id: 8, src: img8, alt: "DAMAC Islands Phase 2 - Wedding Venue" },
    { id: 9, src: img9, alt: "DAMAC Islands Phase 2 - Zipline" },
    { id: 10, src: img10, alt: "DAMAC Islands Phase 2 - Yoga Floating Decks" },
    { id: 11, src: img11, alt: "DAMAC Islands Phase 2 - Rapids" },
    { id: 12, src: img12, alt: "DAMAC Islands Phase 2 - Wildlife Parks" },
    { id: 13, src: img13, alt: "DAMAC Islands Phase 2 - Hot Springs Spa" },
    { id: 14, src: img14, alt: "DAMAC Islands Phase 2 - Parrot Park" },
    { id: 15, src: img15, alt: "DAMAC Islands Phase 2 - Fitness Park" },
    { id: 16, src: img16, alt: "DAMAC Islands Phase 2 - Private Boat Rides" },
    { id: 17, src: img17, alt: "DAMAC Islands Phase 2 - Mini Golf Island" },
    { id: 18, src: img18, alt: "DAMAC Islands Phase 2 - Iguanas Park" },
    { id: 19, src: img19, alt: "DAMAC Islands Phase 2 - Tortios Garden" },
    { id: 20, src: img20, alt: "DAMAC Islands Phase 2 - Lagoon Tour" },
    { id: 21, src: img21, alt: "DAMAC Islands Phase 2 - Paddling" },
    { id: 22, src: img22, alt: "DAMAC Islands Phase 2 - Water Platforms" },
    { id: 23, src: img23, alt: "DAMAC Islands Phase 2 - Central Hub Fountain" }
];

export default function Gallery() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };


    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (isModalOpen) {
                if (e.key === 'Escape') closeModal();
                if (e.key === 'ArrowLeft') prevImage();
                if (e.key === 'ArrowRight') nextImage();
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, [isModalOpen]);

    return (
        <section className="gallery-section">
            <div className="gallery-container">
                <div className="gallery-header">
                    <h2 className="gallery-title">
                        Discover <span className="color">DAMAC Islands Phase 2</span>
                    </h2>
                    <p className="gallery-subtitle">
                        Experience the ultimate luxury island living with world-class amenities and breathtaking views
                    </p>
                </div>

                <div className="gallery-wrapper">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            }
                        }}
                        navigation={{
                            nextEl: '.gallery-next',
                            prevEl: '.gallery-prev',
                        }}
                        pagination={{
                            clickable: true,
                            el: '.gallery-pagination',
                        }}
                        loop={true}
                        className="gallery-swiper"
                    >
                        {galleryImages.map((image, index) => (
                            <SwiperSlide key={image.id}>
                                <div 
                                    className="gallery-slide"
                                    onClick={() => openModal(index)}
                                >
                                    <div className="img-div">
                                        <img 
                                            src={image.src} 
                                            alt={image.alt}
                                            className="gallery-image"
                                        />
                                    </div>
                                    <div className="gallery-overlay">
                                        <div className="gallery-info">
                                            <h3 className="image-title">{image.alt}</h3>
                                            <p className="image-description">
                                                Click to view in full size
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Controls */}
                    <div className="gallery-controls">
                        <button className="gallery-prev gallery-nav-btn">
                            <FaChevronLeft />
                        </button>
                        <button className="gallery-next gallery-nav-btn">
                            <FaChevronRight />
                        </button>
                    </div>

                    {/* Pagination */}
                    <div className="gallery-pagination"></div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="gallery-modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <IoClose />
                        </button>
                        
                        <div className="modal-image-container">
                            <img 
                                src={galleryImages[currentImageIndex].src}
                                alt={galleryImages[currentImageIndex].alt}
                                className="modal-image"
                            />
                        </div>

                        <div className="modal-info">
                            <h3 className="modal-title">
                                {galleryImages[currentImageIndex].alt}
                            </h3>
                            <p className="modal-counter">
                                {currentImageIndex + 1} / {galleryImages.length}
                            </p>
                        </div>

                        <div className="modal-controls">
                            <button className="modal-prev" onClick={prevImage}>
                                <FaChevronLeft />
                            </button>
                            <button className="modal-next" onClick={nextImage}>
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
