import { NavLink } from "react-router-dom";
import { useMediaQuery } from "../../custom_hook";
const Service = () => {
  const services = [
    {
      icon: "ri-ai-generate",
      name: "AI-Based Threat Intelligence",
      description:
        "Utilize advanced AI algorithms to detect and analyze threats in real-time.",
      path: "/services",
      style: "blue",
    },
    {
      icon: "ri-cpu-line",
      name: "ML-Powered Anomaly Detection",
      description:
        "Leverage machine learning techniques to identify abnormal activities and potential security breaches.",
      path: "/services",
      style: "orange",
    },
    {
      icon: "ri-shield-star-line",
      name: "Compliance Management",
      description:
        "Ensure compliance with industry standards and regulations through comprehensive management tools.",
      path: "/services",
      style: "green",
    },
    {
      icon: "ri-lock-password-line",
      name: "Vulnerability Analysis",
      description:
        "Conduct in-depth analysis of vulnerabilities to prioritize and mitigate security risks effectively.",
      path: "/services",
      style: "red",
    },
    {
      icon: "ri-dashboard-3-line",
      name: "Real-time Visibility",
      description:
        "Gain real-time visibility into network activities and software behavior to enhance security posture.",
      path: "/services",
      style: "purple",
    },
    {
      icon: "ri-file-search-line",
      name: "Asset Management",
      description:
        "Efficiently manage and monitor all network assets to ensure optimal security measures.",
      path: "/services",
      style: "pink",
    },
    {
      icon: "ri-shield-star-line",
      name: "White-Glove Service and Support",
      description:
        "Deliver personalized, attentive assistance to ensure exceptional customer satisfaction and exceed expectations.",
      path: "/services",
      style: "orange",
    },
  ];
  const isMobile = useMediaQuery("(max-width:754px)");

  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Services</h2>
          <p>Discover our complete cybersecurity solutions </p>
        </header>

        <div className="row gy-4 justify-content-center">
          {services.map((item, index) => {
            return (
              <div
                className="col-lg-3 col-md-6 "
                data-aos={
                  isMobile
                    ? index % 2 === 0
                      ? `slide-right`
                      : "slide-left"
                    : "fade-up"
                }
                data-aos-delay="200"
                data-aos-offset="100"
                key={index}
              >
                <div className={`service-box py-4  shadow ${item.style}`}>
                  <div className="d-flex flex-column h-100 justify-content-between ">
                    <div className="flex-1">
                      <i className={`${item.icon} icon`}></i>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                    <div className="bg-white">
                      <NavLink to={item.path} className="read-more">
                        <span>Read More</span>{" "}
                        <i className="bi bi-arrow-right"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
