import "./HomeHero.scss";
import video from "../../../Assets/Banner/banner-video.mp4"

export default function HomeHero({ openPopup }) {
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
        <div className="content-container">
          <div className="left-div">
            <h3 className="top-title">
              AL MAMSHA SHARJAH
            </h3>
            <h4 className="sub-title">
              At University Road
            </h4>
            <h5 className="developer">
              By ALEF GROUP
            </h5>
            <div className="highlight-item">
              <span className="highlight-text">FREEHOLD - ALL NATIONALITIES</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-text">1 Bedroom - RTMI/Under Construction</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-text">10% Down Payment</span>
            </div>
            <div className="highlight-item main-highlight">
              <span className="highlight-text">Sharjah's First Fully Walkable Community.</span>
            </div>
            <h1 className="title">
              <span className="color">1, 2 & 3 Bedroom Apartments starts at</span>
            </h1>
            <h2 className="price">
              AED 729 K Onwards
            </h2>
            {/* <a href="#contact-us" onClick={openPopup}> */}
              <div
                onClick={openPopup}
                className="btn btn-white-fill"
              >
                Get Exclusive Offer
              </div>
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}