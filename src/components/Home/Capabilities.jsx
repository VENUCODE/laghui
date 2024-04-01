import cap from "../../assets/img/features/capabilities.svg";
const Capabilities = () => {
  const keyCapabilities = [
    "Comprehensive View for Product Security Teams",
    "Shift Security Testing to the Right",
    "Gain Unprecedented Visibility",
    "Prioritize Remediation Efforts",
    "Satisfy Regulatory Compliance Requirements",
    "Streamline Vulnerability Management",
  ];

  return (
    <section id="cababilites" className="cababilites ">
      <div className="container" data-aos="fade-up" data-aos-delay="200">
        <header className="section-title">
          <h2>OUT KEY CAPABILITIES</h2>
        </header>

        <div className="row">
          <div className="col-lg-6">
            <img src={cap} className="img-fluid" alt="" />
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0 d-flex ">
            <div className="row  gy-2">
              {keyCapabilities.map((capability, index) => {
                return (
                  <div key={index} className="col-md-6 ">
                    <div
                      className="capability-box shadow-lg rounded-2 d-flex align-items-center"
                      data-aos="slide-left"
                      data-aos-delay="100"
                    >
                      <i className="bi bi-check"></i>
                      <h3>{capability}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
