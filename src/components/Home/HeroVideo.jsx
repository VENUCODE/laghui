import { Suspense, useState, useEffect } from "react";
import heroImage from "../../assets/img/hero-img.svg";
import hero_bg_video from "../../assets/videos/hero_bg.mp4";
import otvideo from "../../assets/videos/OT.mp4";
import GLightbox from "glightbox";
import { NavLink } from "react-router-dom";

const HeroVideo = () => {
  useEffect(() => {
    GLightbox({
      selector: ".glightbox",
    });
  });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    console.log("Video loaded successfully");
    setIsVideoLoaded(true);
  };
  const VideoComponent = () => {
    const handleVideoLoaded = () => {
      console.log("Video loaded successfully");
      setIsVideoLoaded(true);
    };

    return (
      <video autoPlay muted loop id="myVideo" onLoadedData={handleVideoLoaded}>
        <source src={hero_bg_video} type="video/mp4" />
      </video>
    );
  };

  return (
    <section id="hero" className="d-flex align-items-center">
      <Suspense fallback={<div>Loading...</div>}>
        <VideoComponent />
      </Suspense>
      <div
        className="container position-absolute "
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="row">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1
              className="hero_text"
              data-aos="slide-right"
              data-aos-delay="100"
              data-aos-duration="1500"
            ></h1>
            <h2
              data-aos="slide-right"
              data-aos-delay="120"
              data-aos-duration="1500"
            >
              {" "}
              Unifying Security Vision and Action for Total Protection{" "}
            </h2>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <NavLink to="/support" className="btn-get-started scroll-to ">
                Get Started
              </NavLink>
              <a href={otvideo} className="glightbox btn-watch-video">
                <i className="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </a>
            </div>
          </div>
          {!isVideoLoaded && (
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img animated"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img src={heroImage} className="img-fluid bg " alt="hero image" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
