import { Link } from "react-router-dom";
import { ui1, ui2, ui3, ui4, ui5 } from "../../assets/img/laghui_imgs";

const blogPosts = [
  {
    id: 1,
    image: ui4,
    date: "Tue, September 15",
    title:
      "Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit",
    link: "/resources",
  },
  {
    id: 2,
    image: ui5,
    date: "Fri, August 28",
    title: "Et repellendus molestiae qui est sed omnis voluptates magnam",
    link: "/resources",
  },
  {
    id: 3,
    image: ui1,
    date: "Mon, July 11",
    title: "Quia assumenda est et veritatis aut quae",
    link: "/resources",
  },
];

const Blog = () => {
  return (
    <section id="recent-blog-posts" className="recent-blog-posts">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Blog</h2>
          <p>Recent posts from our Blog</p>
        </header>

        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-lg-4 my-1 ">
              <div className="post-box">
                <div className="post-img">
                  <img src={post.image} className="img-fluid" alt="" />
                </div>
                <span className="post-date">{post.date}</span>
                <h3 className="post-title">{post.title}</h3>
                <Link
                  href={post.link}
                  className="readmore stretched-link mt-auto"
                >
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
