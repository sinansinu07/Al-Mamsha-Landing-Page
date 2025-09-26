import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./AboutUsSection.scss";
import image1 from "../../../Assets/Gallery/img1.webp"
import image2 from "../../../Assets/Gallery/img2.webp"
import image3 from "../../../Assets/Gallery/img3.webp"
import image4 from "../../../Assets/Gallery/img4.webp"
import image5 from "../../../Assets/Gallery/img5.webp"
import image6 from "../../../Assets/Gallery/img6.webp"
import image7 from "../../../Assets/Gallery/img7.webp"
import image8 from "../../../Assets/Gallery/img8.webp"
import image9 from "../../../Assets/Gallery/img9.webp"


const squareData = [
    {
        id: 1,
        src: image1,
    },
    {
        id: 2,
        src: image2,
    },
    {
        id: 3,
        src: image3,
    },
    {
        id: 4,
        src: image4,
    },
    {
        id: 5,
        src: image5,
    },
    {
        id: 6,
        src: image6,
    },
    {
        id: 7,
        src: image7,
    },
    {
        id: 8,
        src: image8,
    },
    {
        id: 9,
        src: image9,
    },
]


const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
};

const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div
        key={sq.id}
        layout
        transition={{ duration: 1.5, type: "spring" }}
        className="shuffle-square"
        style={{ backgroundImage: `url(${sq.src})` }}
        />
    ));
};

const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());

    useEffect(() => {
        shuffleSquares();
        return () => clearTimeout(timeoutRef.current);
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares());
        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return <div className="shuffle-grid">{squares.map((sq) => sq)}</div>;
};

const AboutUsSection = () => {
    return (
        <section id="about-us" className="about-shuffle-section section-container">
            <ShuffleGrid />
            <div className="about-content">
                <h2 className="tagline">Redefining Waterfront Luxury</h2>
                <h1 className="main-title">About DAMAC Island Phase 2</h1>
                <p>
                DAMAC Island Phase 2 brings an exclusive blend of luxury residences, vibrant activities, and world-class amenities along Dubai’s stunning waterfront. Designed to elevate modern living, it offers a lifestyle that combines leisure, adventure, and elegance in one iconic destination.
                </p>
                <a href="#services"><div className="btn-black">Explore Our Services</div></a>
            </div>
        </section>
    );
};

export default AboutUsSection;
