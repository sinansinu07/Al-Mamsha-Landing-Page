import { useState } from "react";
import { ImEnlarge } from "react-icons/im";
import "./Gallery.scss";

// Import Hamsa Exteriors
import hamsaExt1 from "../../../Assets/Gallery/Al-Mamsha-Hamsa/Exterios/image1.webp";
import hamsaExt2 from "../../../Assets/Gallery/Al-Mamsha-Hamsa/Exterios/image2.webp";
import hamsaExt3 from "../../../Assets/Gallery/Al-Mamsha-Hamsa/Exterios/image3.webp";
import hamsaExt4 from "../../../Assets/Gallery/Al-Mamsha-Hamsa/Exterios/image4.webp";
import hamsaExt5 from "../../../Assets/Gallery/Al-Mamsha-Hamsa/Exterios/image5.webp";
import hamsaExt6 from "../../../Assets/Gallery/Al-Mamsha-Hamsa/Exterios/image6.webp";
import hamsaExt7 from "../../../Assets/Gallery/Al-Mamsha-Hamsa/Exterios/image7.webp";

// Import Hamsa Interiors
import hamsaInt1 from "../../../Assets/Gallery/Al-Mamsha-Hamsa/Interiors/Image1.webp";
import hamsaInt2 from "../../../Assets/Gallery/Al-Mamsha-Hamsa/Interiors/Image2.webp";
import hamsaInt3 from "../../../Assets/Gallery/Al-Mamsha-Hamsa/Interiors/Image3.webp";
import hamsaInt4 from "../../../Assets/Gallery/Al-Mamsha-Hamsa/Interiors/Image4.webp";
import hamsaInt5 from "../../../Assets/Gallery/Al-Mamsha-Hamsa/Interiors/Image5.webp";
import hamsaInt6 from "../../../Assets/Gallery/Al-Mamsha-Hamsa/Interiors/Image6.webp";
import hamsaInt7 from "../../../Assets/Gallery/Al-Mamsha-Hamsa/Interiors/Image7.webp";
import hamsaInt8 from "../../../Assets/Gallery/Al-Mamsha-Hamsa/Interiors/Image8.webp";
import hamsaInt9 from "../../../Assets/Gallery/Al-Mamsha-Hamsa/Interiors/Image9.webp";

// Import Raseel Exteriors
import raseelExt1 from "../../../Assets/Gallery/Al-Mamsha-Raseel/Exteriors/image1.webp";
import raseelExt2 from "../../../Assets/Gallery/Al-Mamsha-Raseel/Exteriors/image2.webp";
import raseelExt3 from "../../../Assets/Gallery/Al-Mamsha-Raseel/Exteriors/image3.webp";
import raseelExt4 from "../../../Assets/Gallery/Al-Mamsha-Raseel/Exteriors/image4.webp";
import raseelExt5 from "../../../Assets/Gallery/Al-Mamsha-Raseel/Exteriors/image5.webp";
import raseelExt6 from "../../../Assets/Gallery/Al-Mamsha-Raseel/Exteriors/image6.webp";
import raseelExt7 from "../../../Assets/Gallery/Al-Mamsha-Raseel/Exteriors/image7.webp";
import raseelExt8 from "../../../Assets/Gallery/Al-Mamsha-Raseel/Exteriors/Image8.webp";
import raseelExt9 from "../../../Assets/Gallery/Al-Mamsha-Raseel/Exteriors/Image9.webp";
import raseelExt10 from "../../../Assets/Gallery/Al-Mamsha-Raseel/Exteriors/Image10.webp";
import raseelExt11 from "../../../Assets/Gallery/Al-Mamsha-Raseel/Exteriors/Image11.webp";

// Import Raseel Interiors
import raseelInt1 from "../../../Assets/Gallery/Al-Mamsha-Raseel/Interiors/Image1.webp";
import raseelInt2 from "../../../Assets/Gallery/Al-Mamsha-Raseel/Interiors/Image2.webp";
import raseelInt3 from "../../../Assets/Gallery/Al-Mamsha-Raseel/Interiors/Image3.webp";
import raseelInt4 from "../../../Assets/Gallery/Al-Mamsha-Raseel/Interiors/Image4.webp";
import raseelInt5 from "../../../Assets/Gallery/Al-Mamsha-Raseel/Interiors/Image5.webp";
import raseelInt7 from "../../../Assets/Gallery/Al-Mamsha-Raseel/Interiors/Image7.webp";

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [allImages, setAllImages] = useState([]);
    const [activeProject, setActiveProject] = useState('hamsa');
    const [activeCategory, setActiveCategory] = useState('exteriors');

    // Gallery data
    const galleryData = {
        hamsa: {
            name: "Al Mamsha Hamsa",
            exteriors: [
                { src: hamsaExt1, alt: "Hamsa Exterior 1" },
                { src: hamsaExt2, alt: "Hamsa Exterior 2" },
                { src: hamsaExt3, alt: "Hamsa Exterior 3" },
                { src: hamsaExt4, alt: "Hamsa Exterior 4" },
                { src: hamsaExt5, alt: "Hamsa Exterior 5" },
                { src: hamsaExt6, alt: "Hamsa Exterior 6" },
                { src: hamsaExt7, alt: "Hamsa Exterior 7" }
            ],
            interiors: [
                { src: hamsaInt1, alt: "Hamsa Interior 1" },
                { src: hamsaInt2, alt: "Hamsa Interior 2" },
                { src: hamsaInt3, alt: "Hamsa Interior 3" },
                { src: hamsaInt4, alt: "Hamsa Interior 4" },
                { src: hamsaInt5, alt: "Hamsa Interior 5" },
                { src: hamsaInt6, alt: "Hamsa Interior 6" },
                { src: hamsaInt7, alt: "Hamsa Interior 7" },
                { src: hamsaInt8, alt: "Hamsa Interior 8" },
                { src: hamsaInt9, alt: "Hamsa Interior 9" }
            ]
        },
        raseel: {
            name: "Al Mamsha Raseel",
            exteriors: [
                { src: raseelExt1, alt: "Raseel Exterior 1" },
                { src: raseelExt2, alt: "Raseel Exterior 2" },
                { src: raseelExt3, alt: "Raseel Exterior 3" },
                { src: raseelExt4, alt: "Raseel Exterior 4" },
                { src: raseelExt5, alt: "Raseel Exterior 5" },
                { src: raseelExt6, alt: "Raseel Exterior 6" },
                { src: raseelExt7, alt: "Raseel Exterior 7" },
                { src: raseelExt8, alt: "Raseel Exterior 8" },
                { src: raseelExt9, alt: "Raseel Exterior 9" },
                { src: raseelExt10, alt: "Raseel Exterior 10" },
                { src: raseelExt11, alt: "Raseel Exterior 11" }
            ],
            interiors: [
                { src: raseelInt1, alt: "Raseel Interior 1" },
                { src: raseelInt2, alt: "Raseel Interior 2" },
                { src: raseelInt3, alt: "Raseel Interior 3" },
                { src: raseelInt4, alt: "Raseel Interior 4" },
                { src: raseelInt5, alt: "Raseel Interior 5" },
                { src: raseelInt7, alt: "Raseel Interior 7" }
            ]
        }
    };

    const openImageViewer = (image, project, category, index) => {
        const allProjectImages = [...galleryData[project].exteriors, ...galleryData[project].interiors];
        setAllImages(allProjectImages);
        setCurrentImageIndex(index);
        setSelectedImage({ ...image, project, category });
    };

    const getCurrentImages = () => {
        return galleryData[activeProject][activeCategory];
    };

    const closeImageViewer = () => {
        setSelectedImage(null);
        setCurrentImageIndex(0);
        setAllImages([]);
    };

    const nextImage = () => {
        const nextIndex = (currentImageIndex + 1) % allImages.length;
        setCurrentImageIndex(nextIndex);
        setSelectedImage({ ...allImages[nextIndex], project: selectedImage.project, category: nextIndex < galleryData[selectedImage.project].exteriors.length ? 'exteriors' : 'interiors' });
    };

    const prevImage = () => {
        const prevIndex = currentImageIndex === 0 ? allImages.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(prevIndex);
        setSelectedImage({ ...allImages[prevIndex], project: selectedImage.project, category: prevIndex < galleryData[selectedImage.project].exteriors.length ? 'exteriors' : 'interiors' });
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Escape') closeImageViewer();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    };

    return (
        <section id="gallery">
            <div className="gallery-section section-container">
                <div className="gallery-header">
                    <h2 className="gallery-title">Project Gallery</h2>
                    <h3 className="gallery-subtitle">Explore Our Developments</h3>
                    <p className="gallery-description">
                        Discover the beauty and elegance of Al Mamsha through our comprehensive gallery. 
                        From stunning exteriors to luxurious interiors, experience the quality and craftsmanship 
                        that defines our developments.
                    </p>
                </div>

                {/* Project Tabs */}
                <div className="project-tabs">
                    <button 
                        className={`tab-btn ${activeProject === 'hamsa' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveProject('hamsa');
                            setActiveCategory('exteriors');
                        }}
                    >
                        Al Mamsha Hamsa
                    </button>
                    <button 
                        className={`tab-btn ${activeProject === 'raseel' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveProject('raseel');
                            setActiveCategory('exteriors');
                        }}
                    >
                        Al Mamsha Raseel
                    </button>
                </div>

                {/* Project Content */}
                <div className="project-content">
                    {/* Category Tabs */}
                    <div className="category-tabs">
                        <button 
                            className={`category-tab ${activeCategory === 'exteriors' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('exteriors')}
                        >
                            Exteriors
                        </button>
                        <button 
                            className={`category-tab ${activeCategory === 'interiors' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('interiors')}
                        >
                            Interiors
                        </button>
                    </div>

                    {/* Image Grid */}
                    <div className="image-grid">
                        {getCurrentImages().map((image, index) => {
                            const globalIndex = activeCategory === 'exteriors' 
                                ? index 
                                : galleryData[activeProject].exteriors.length + index;
                            
                            return (
                                <div 
                                    key={index} 
                                    className="image-item"
                                    onClick={() => openImageViewer(image, activeProject, activeCategory, globalIndex)}
                                >
                                    <img src={image.src} alt={image.alt} />
                                    <div className="image-overlay">
                                        <ImEnlarge className="view-icon" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Image Viewer Modal */}
                {selectedImage && (
                    <div className="image-viewer-modal" onClick={closeImageViewer} onKeyDown={handleKeyPress} tabIndex={0}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-btn" onClick={closeImageViewer}>×</button>
                            
                            <div className="image-container">
                                <img src={selectedImage.src} alt={selectedImage.alt} />
                            </div>
                            
                            <div className="image-info">
                                <h6 className="image-title">{selectedImage.alt}</h6>
                                <p className="image-counter">
                                    {currentImageIndex + 1} of {allImages.length}
                                </p>
                            </div>
                            
                            <div className="navigation">
                                <button className="nav-btn prev-btn" onClick={prevImage}>
                                    ‹
                                </button>
                                <button className="nav-btn next-btn" onClick={nextImage}>
                                    ›
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
