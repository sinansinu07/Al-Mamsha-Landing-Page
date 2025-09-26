import "./HomeHero.scss";

import video from "../../../Assets/Banner/Banner-Video_new-Low.mp4"


// const textVariants = {
//   initial: { x: -100, opacity: 0 },
//   animate: { x: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
//   exit: { x: 100, opacity: 0, transition: { duration: .5 } },
//   scrollButtonInitial: { y: 0, opacity: 0 },
//   scrollButton: { opacity: 1, y: 10, transition: { duration: 1, repeat: Infinity } },
// };

export default function HomeHero() {
  // const ref = useRef();
  // const { scrollYProgress } = useScroll({ target: ref, start: ["start start", "end start"] });
  // const yBg = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // const [currentSlide, setCurrentSlide] = useState(services[0]);

  // const handleDotClick = (ele) => {
  //   setCurrentSlide(ele);
  // };

  // const swiperRef = useRef(null);

  return (
    <div className="home-hero">
      <div className="overlay"></div>
        <video
          className="banner-video"
          key={video}
          src={video}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
        />
      <div className="hero-content">
      <h3 className="top-title">
        Damac Island Phase 2
      </h3>
      <h4 className="sub-title">
        Starting from AED 2.5M
      </h4>
      <h1 className="title">
        <span className="color">LIVE THE LUXURY</span>
      </h1>
      <h2 className="description">
        Experience two decades of excellence with DAMAC — a global leader in luxury real estate.  
        Discover DAMAC Island Phase 2, where iconic waterfront living meets world-class amenities.
      </h2>
        <a href="#about-us">
          <div
            className="btn-white"
          >
            {/* <FlipLinkBtn isHovered={isHovered}> */}
              About Us
            {/* </FlipLinkBtn> */}
          </div>
        </a>
      </div>
    </div>
  );
}