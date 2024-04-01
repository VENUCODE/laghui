import { useState } from "react";

const BenefitsSection = () => {
  const [curIndex, setCurIndex] = useState(0);
  const benefits = [
    {
      title: "Strengthened Security Posture",
      description:
        "Proactive identification of vulnerabilities in connected software and real-time threat detection significantly reduce your attack surface.",
    },
    {
      title: "Reduced Vulnerability Risk",
      description:
        "LAGHUI prioritizes critical vulnerabilities based on the SBOM data, allowing you to focus on the most pressing threats first.",
    },
    {
      title: "Faster Incident Response",
      description:
        "Real-time alerts and detailed reports expedite response times, minimizing potential damage from security incidents.",
    },
    {
      title: "Streamlined Workflow",
      description:
        "LAGHUI eliminates the need for managing separate SBOM and NIDS tools, simplifying your security operations.",
    },
  ];

  return (
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid " data-aos="fade-up">
        <div className="row flex-row-reverse">
          <div className="col-lg-7 rounded-4 d-flex flex-column justify-content-start align-items-stretch    order-2 order-lg-1">
            <div
              className="content my-2"
              data-aos="slide-left"
              data-aos-delay="100"
            >
              <h3 className="px-2">
                <strong> WHY LAGHUI ?</strong>{" "}
              </h3>
              <p className="px-2">Empowering security with unified approach</p>
            </div>
            {/* //TODO -  the accordian item click has to be changed */}
            <div className="accordian  accordion-list" id="accordion-list">
              <ul>
                {benefits.map((benefit, index) => (
                  <li key={index} data-aos="slide-left" data-aos-delay="100">
                    <a
                      data-bs-toggle="collapse"
                      className={`collapse`}
                      data-bs-target={`#accordion-list-${index + 1}`}
                    >
                      <span>0{index + 1}</span> <br />
                      {benefit.title}{" "}
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id={`accordion-list-${index + 1}`}
                      className="collapse transition-all "
                      data-bs-parent=".accordion-list"
                    >
                      <p>{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="col-lg-5 align-items-stretch order-1 order-lg-2 img  benefits-img"
            data-aos="slide-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            &nbsp;
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
