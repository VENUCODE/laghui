import teamImg1 from "../../assets/img/team/team-1.jpg";
import teamImg2 from "../../assets/img/team/team-2.jpg";
import teamImg3 from "../../assets/img/team/team-3.jpg";
import teamImg4 from "../../assets/img/team/team-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
const Team = () => {
  // Define an array of team members
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      designation: "Network specialist",
      description:
        "Short description. ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
      image: teamImg1,
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "Tech guide",
      description:
        "Short description. ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
      image: teamImg2,
    },
    {
      id: 3,
      name: "Alice Johnson",
      designation: "Software developer",
      description:
        "Short description. ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
      image: teamImg3,
    },
    {
      id: 4,
      name: "Jesica John",
      designation: "Senior Manager",
      description:
        "Short description. ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
      image: teamImg4,
    },
  ];

  return (
    <section id="team" className="team ">
      <div
        className="container"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1200"
      >
        <header className="section-title">
          <h2>Meet our hardworking team</h2>
        </header>

        <div className="row gy-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
            >
              <div
                className="member"
                data-aos={index % 2 === 0 ? `slide-right` : "slide-left"}
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <div className="member-img">
                  <img src={member.image} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <span>{member.designation}</span>
                  <p>{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
