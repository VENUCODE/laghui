import React from "react";
import { RiQuestionnaireFill } from "react-icons/ri";
const Faq = () => {
  const faqData = [
    {
      title:
        "What is a Software Bill of Materials (SBOM) and why is it relevant in cybersecurity?",
      content:
        "A Software Bill of Materials (SBOM) is a comprehensive list of all components used in building a software product. It's important in cybersecurity because it enhances transparency, enabling organizations to track and manage software supply chain risks.",
    },
    {
      title:
        "How does a Network Intrusion Detection System (NIDS) protect against cyber threats?",
      content:
        "A Network Intrusion Detection System (NIDS) monitors network traffic for suspicious activities or signs of intrusion. It analyzes network packets in real-time to detect and respond to potential threats, thus bolstering network security.",
    },
    {
      title:
        "What are some common applications of Artificial Intelligence (AI) in cybersecurity?",
      content:
        "AI is utilized in cybersecurity for various tasks such as automated threat detection, anomaly detection, behavioral analysis, and predictive analytics. It empowers security systems to adapt and respond to evolving threats more effectively.",
    },
    {
      title: "How does Machine Learning (ML) enhance cybersecurity measures?",
      content:
        "Machine Learning (ML) improves cybersecurity by enabling systems to learn from data and identify patterns indicative of cyber threats. ML algorithms enhance threat detection accuracy, reduce false positives, and streamline security operations.",
    },
    {
      title:
        "Can you elaborate on the role of AI and ML in mitigating cyber risks?",
      content:
        "AI and ML technologies play a crucial role in mitigating cyber risks by providing advanced threat detection capabilities, automating incident response, enabling predictive analysis of security trends, and facilitating adaptive security measures.",
    },
    {
      title:
        "What factors influence the pricing of cybersecurity solutions incorporating AI and ML?",
      content:
        "Pricing of cybersecurity solutions depends on factors like the scope of protection, scalability, features, vendor reputation, support services, and licensing models. Solutions leveraging AI and ML may incur additional costs for advanced analytics capabilities.",
    },
    {
      title:
        "How can organizations assess the return on investment (ROI) of cybersecurity solutions?",
      content:
        "Organizations can evaluate the ROI of cybersecurity investments by considering factors such as risk reduction, cost savings from breach prevention, compliance benefits, and potential revenue protection. It requires a holistic analysis of both tangible and intangible benefits.",
    },
    {
      title:
        "What are the best practices for implementing AI and ML in cybersecurity infrastructure?",
      content:
        "Best practices for AI and ML implementation in cybersecurity include ensuring data quality, transparency of algorithms, continuous monitoring and updating, human oversight, ethical considerations, and compliance with data privacy regulations.",
    },
    {
      title:
        "How do cybersecurity solutions incorporating AI and ML address evolving cyber threats?",
      content:
        "Cybersecurity solutions leveraging AI and ML are equipped to adapt and respond to evolving cyber threats by continuously learning from new data, identifying emerging patterns, and autonomously adjusting security measures to counteract emerging threats.",
    },
    {
      title:
        "What role does regulatory compliance play in cybersecurity investments?",
      content:
        "Regulatory compliance is a critical aspect of cybersecurity investments, as non-compliance can lead to penalties, reputational damage, and increased security risks. Investments in cybersecurity should align with regulatory requirements to ensure legal and operational compliance.",
    },
  ];

  return (
    <section id="faq" className="faq">
      <div className="container" data-aos="zoom-in" data-aos-duration="400">
        <header className="section-title">
          <h2>F.A.Q</h2>
          <p>These might help you</p>
        </header>

        <div className="accordian accordion-list">
          <ul className="row">
            <div className="col-lg-6 col-12 ">
              {faqData.slice(0, faqData.length / 2).map((faq, index) => (
                <li
                  key={index}
                  className="shadow"
                  // data-aos="slide-left"
                  // data-aos-delay="100"
                >
                  <a
                    data-bs-toggle="collapse"
                    className="collapse "
                    data-bs-target={`#accordion-list-${index + 1}`}
                  >
                    <span>{<RiQuestionnaireFill />}</span> {faq.title}{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id={`accordion-list-${index + 1}`}
                    className="collapse transition-all "
                    data-bs-parent=".accordion-list"
                  >
                    <p>{faq.content}</p>
                  </div>
                </li>
              ))}
            </div>
            <div className="col-lg-6 col-12 my-lg-1 my-2">
              {faqData.slice(faqData.length / 2).map((faq, index) => (
                <li
                  key={index}
                  className="shadow"
                  // data-aos="slide-left"
                  // data-aos-delay="100"
                >
                  <a
                    data-bs-toggle="collapse"
                    className="collapse "
                    data-bs-target={`#accordion-list-${
                      faqData.length / 2 + index + 1
                    }`}
                  >
                    <span>{<RiQuestionnaireFill />}</span> {faq.title}{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id={`accordion-list-${faqData.length / 2 + index + 1}`}
                    className="collapse transition-all "
                    data-bs-parent=".accordion-list"
                  >
                    <p>{faq.content}</p>
                  </div>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
