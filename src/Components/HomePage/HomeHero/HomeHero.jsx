import "./HomeHero.scss";
import video from "../../../Assets/Banner/banner-video.mp4"

export default function HomeHero() {
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
        <div className="left-div">
          <h3 className="top-title">
            Al Mamsha
          </h3>
          <h4 className="sub-title">
            The First Fully Walkable Community In Sharjah
          </h4>
          <h1 className="title">
            <span className="color">Modern Lifestyle Community</span>
          </h1>
          <h2 className="description">
            Sharjah's new destination that integrates modern living, retail and leisure into a vibrant urban environment.
          </h2>
          <a href="#contact-us">
            <div
              className="btn btn-white-fill"
            >
              {/* <FlipLinkBtn isHovered={isHovered}> */}
              Get Exclusive Offer
              {/* </FlipLinkBtn> */}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}