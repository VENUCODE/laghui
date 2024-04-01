import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
import { ui1, ui2, ui3, ui4, ui5 } from "../../assets/img/laghui_imgs";
import { Pagination } from "swiper/modules";
import { useMediaQuery } from "../../custom_hook";
// Testimonial data
const testimonialData = [
  {
    id: 1,
    stars: 5,
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    author: "Saul Goodman",
    role: "Ceo & Founder",
    image: ui1,
  },
  {
    id: 2,
    stars: 5,
    text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    author: "Sara Wilsson",
    role: "Designer",
    image: ui2,
  },
  {
    id: 3,
    stars: 5,
    text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    author: "Jena Karlis",
    role: "Store Owner",
    image: ui3,
  },
  {
    id: 4,
    stars: 5,
    text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    author: "Matt Brandon",
    role: "Freelancer",
    image: ui4,
  },
  {
    id: 5,
    stars: 5,
    text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    author: "John Larson",
    role: "Entrepreneur",
    image: ui5,
  },
];

const Testimonials = () => {
  const isSmall = useMediaQuery("(max-width:780px)");
  const isMedium = useMediaQuery("(max-width:990px)");
  const isLarge = useMediaQuery("(min-width:991px)");

  return (
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">
        <header className="section-title">
          <h2>Testimonials</h2>
          <p>Hear from them</p>
        </header>

        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination]}
          slidesPerView={isSmall ? 1 : isMedium ? 2 : 3}
          spaceBetween={5}
          centeredSlides={true}
          className="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="swiper-slide">
              <div className="testimonial-item">
                <div className="stars">
                  {[...Array(testimonial.stars)].map((_, index) => (
                    <i key={index} className="bi bi-star-fill"></i>
                  ))}
                </div>
                <p>{testimonial.text}</p>
                <div className="profile mt-auto">
                  <img
                    src={testimonial.image}
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>{testimonial.author}</h3>
                  <h4>{testimonial.role}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
