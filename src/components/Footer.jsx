/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-bootstrap";
import logo from "../assets/img/logo.jpeg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <NavLink to="/" className="logo d-flex align-items-center">
                <img
                  src={logo}
                  alt="laghui logo"
                  height={"40px"}
                  width={"100px"}
                  style={{ objectFit: "contain" }}
                />
              </NavLink>
              <p>
                Explore our state-of-the-art cybersecurity tool, meticulously
                crafted to detect threats, analyze network traffic, and fortify
                digital defenses. With intuitive features and precision-driven
                mechanisms, we're redefining cybersecurity standards for a safer
                digital era.
              </p>
              <div className="social-links mt-3">
                <NavLink to="/" className="facebook">
                  <i className="bi bi-facebook"></i>
                </NavLink>
                <NavLink to="/" className="instagram">
                  <i className="bi bi-instagram"></i>
                </NavLink>
                <NavLink to="/" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <NavLink to="/resources">Resources</NavLink>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <NavLink to="/support">support</NavLink>
                </li>
              </ul>
            </div>
            {/* //TODO - The routes has to be st up */}
            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <NavLink to="/services">AI-Based Threat Intelligence</NavLink>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <NavLink to="/services">ML-Powered Anomaly Detection</NavLink>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <NavLink to="/services">Compliance Management</NavLink>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <NavLink to="/services">Vulnerability Analysis</NavLink>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <NavLink to="/services">Real-time Visibility</NavLink>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <NavLink to="/services">Asset Management</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                Hebbal <br />
                Bangalore
                <br />
                India <br />
                Email:
                <em> techneeds@vaajlabs.com</em>
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; {new Date().getFullYear()} <strong>Laghui</strong>. All Rights
          Reserved
        </div>
        <div className="credits">
          Designed by <NavLink to="/">Laghui</NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
