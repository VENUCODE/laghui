import sbom from "../../assets/img/features/sbom.png";
import nids from "../../assets/img/features/nids.png";
import cfunc from "../../assets/img/features/cfunc.svg";

const AboutSection = () => {
  const keyFeatures = [
    {
      title: "SBOM Features",
      description:
        "Automatic generation of detailed SBOMs, encompassing components, licenses, and dependencies within your software. Support for industry-standard SBOM formats like SPDX and CycloneDX, ensuring compatibility with existing security tools.",
      image: sbom,
    },
    {
      title: "NIDS Features",
      description:
        "Continuous monitoring of network traffic, diligently detecting suspicious activity such as malware, port scans, or other malicious attempts. Real-time alert generation and detailed report creation upon threat detection, enabling swift response and investigation.",
      image: nids,
    },
    {
      title: "Combined Functionality",
      description:
        "Leveraging SBOM data for more intelligent NIDS operations. Correlating network activity with identified software components in the SBOM to prioritize vulnerabilities and suggest remediation strategies.",
      image: cfunc,
    },
  ];

  return (
    <section id="about_detail" className="about_detail section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>
            Know in detail about Laghu<small>i</small>
          </h2>
          <p className="font">
            Revolutionizing security, our innovative solution simplifies
            vulnerability management and enhances threat detection for fortified
            defenses.
          </p>
        </div>
      </div>
      {keyFeatures.map((item, index) => (
        <section
          id={item.title}
          className={`about ${index === 0 ? "pt-1" : "pt-2"} `}
          key={index}
        >
          <div className="container" data-aos="fade-up">
            <div
              className={`row gx-0 d-flex ${
                index % 2 === 0 ? "flex-md-row" : "flex-md-row-reverse"
              } flex-column-reverse`}
            >
              <div
                className="col-lg-6 d-flex justify-content-center shadow"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>

              <div
                className="col-lg-6 d-flex align-items-center about-img shadow-lg"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-reverse="false"
                style={{ objectFit: "cover" }}
              >
                <img
                  src={item.image}
                  className="img-fluid h-100"
                  alt={item.title}
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default AboutSection;
