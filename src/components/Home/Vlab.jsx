import vlab from "../../assets/img/vaajlab.svg";
import { NavLink } from "react-router-dom";
const Vlab = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up" data-aos-delay="200">
        <div className="row gx-0 d-flex flex-col flex-md-row  flex-column-reverse">
          <div className="col-lg-6 d-flex justify-content-center shadow">
            <div className="content">
              <h3>VAAJLABS</h3>

              <p>
                Experience the future of cybersecurity with VAAJLABS. Our
                cutting-edge solutions provide unparalleled visibility into your
                risk profile across the entire software supply chain. Trust in
                our expertise to safeguard your connected devices and critical
                infrastructure.
              </p>
              <div className="text-center text-lg-start">
                <NavLink
                  to="/vaajlab"
                  className="btn-read-more scroll-to d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-lg-6 d-flex align-items-center about-img shadow-lg">
            <img src={vlab} className="img-fluid" alt="vaaj lab" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vlab;
