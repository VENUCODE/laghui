const ContactUs = () => {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <header className="section-title">
          <h2>Contact Us</h2>
          <p>We are here for you </p>
        </header>

        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="info-box shadow">
                  <i className="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>
                    Hebbal,
                    <br />
                    Bangalore,India
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box shadow">
                  <i className="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>
                    +91 8688-520-851
                    <br />
                    +91 7416-237-222
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="info-box shadow">
                  <i className="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>
                    <br />
                    techneeds@vaajlabs.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 ">
            <form className="email-form shadow">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="col-md-6 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
