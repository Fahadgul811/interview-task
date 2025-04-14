import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const blogs = [
  {
    image: "/blogimage1.png",
    category: "MUSLIM CAREER ADVICE",
    title: "Top Skills You Can Develop with Muslim Career Support",
    description:
      "This article explores how Muslim career support can help professionals develop key skills such as...",
  },
  {
    image: "/blogimage2.png",
    category: "ENTREPRENEUR MENTORSHIP",
    title: "Step-by-Step Guide to Starting an Islamic Business",
    description:
      "Learn how to start an Islamic business with this comprehensive guide. Discover Shariah-compliant tips...",
  },
  {
    image: "/blogimage3.png",
    category: "ENTREPRENEUR MENTORSHIP",
    title:
      "Career Mentorship for Muslim Women: Overcoming Challenges and Succeeding",
    description:
      "Learn how to start a profitable halal business that aligns with Islamic values. This...",
  },
];

const LatestBlogs = () => {
  return (
    <div className="container py-5">
      <h2
        className="text-center fw-bold mb-5 fs-1"
        style={{
          color: "#082C63",
        }}
      >
        Latest Blogs
      </h2>
      <div className="row g-4">
        {blogs.map((blog, index) => (
          <div className="col-md-4" key={index}>
            <div className="card border-0 bg-transparent">
              <div
                className="position-relative overflow-hidden rounded-4"
                style={{ height: "260px" }}
              >
                <img
                  src={blog.image}
                  alt="Blog Thumbnail"
                  className="w-100 h-100 "
                  style={{ objectFit: "cover" }}
                />
                <span
                  className="position-absolute bottom-0 start-0 m-2 px-3 py-1 small rounded-pill text-white"
                  style={{
                    backgroundColor: "#2DB6AD",
                  }}
                >
                  {blog.category}
                </span>
              </div>

              <div className="card-body px-0 pt-3">
                <h6 className="fw-bold fs-3">{blog.title}</h6>
                <p className="text-secondary fs-6">{blog.description}</p>
                <button className="btn btn-outline-dark rounded-pill px-4 py-1">
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button
          className="btn  rounded-pill px-5 py-3 text-white fw-bold text-uppercase small"
          style={{ backgroundColor: "#082C63" }}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default LatestBlogs;