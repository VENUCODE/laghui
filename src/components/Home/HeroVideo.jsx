import React, { useEffect, useState } from "react";
import heroImage from "../../assets/img/hero-img.svg";
import hero_bg_video from "../../assets/videos/hero_bg.mp4";
import otvideo from "../../assets/videos/OT.mp4";
import GLightbox from "glightbox";
import { NavLink } from "react-bootstrap";

const HeroVideo = () => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
    });
  });
  const [isVideo, setIsVideo] = useState(false);

  return (
    <section id="hero" className="d-flex align-items-center">
      <video
        autoPlay
        onLoadedData={() => {
          setIsVideo(true);
        }}
        muted
        loop
        id="myVideo"
      >
        <source src={hero_bg_video} type="video/mp4" />
      </video>
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
              <NavLink
                to="/support#contact"
                className="btn-get-started scroll-to "
              >
                Get Started
              </NavLink>
              <a href={otvideo} className="glightbox btn-watch-video">
                <i className="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </a>
            </div>
          </div>
          {/* <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay="200"
          > */}
          {/* <img src={heroImage} className="img-fluid bg " alt="hero image" /> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
