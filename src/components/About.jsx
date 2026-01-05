import { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    AOS.refreshHard();
  }, []);

  return (
    <>
      {/* ===== Header ===== */}
      <section className="py-5 text-center">
        <div className="container" data-aos="fade-down">
          <h1 className="fw-bold">About Us</h1>
          <p className="text-muted mt-2">
            Learn more about our story, mission, and values
          </p>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-6" data-aos="fade-right">
              <img
                src="https://cdn-icons-png.flaticon.com/512/891/891419.png"
                alt="about"
                className="img-fluid"
                style={{ maxHeight: "350px" }}
              />
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <h2 className="fw-bold mb-3">Who We Are</h2>
              <p className="text-muted">
                We are a modern e-commerce platform focused on delivering
                high-quality products with a smooth and enjoyable user
                experience. Our goal is to make online shopping simple, fast,
                and reliable.
              </p>
              <p className="text-muted">
                Using the latest technologies like React, we ensure performance,
                scalability, and a clean design.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 ">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-4" data-aos="zoom-in">
              <h5 className="fw-bold">🚀 Innovation</h5>
              <p className="text-muted">
                We continuously improve our platform using modern technologies.
              </p>
            </div>

            <div className="col-md-4" data-aos="zoom-in" data-aos-delay="150">
              <h5 className="fw-bold">🤝 Trust</h5>
              <p className="text-muted">
                Building trust with our users is our top priority.
              </p>
            </div>

            <div className="col-md-4" data-aos="zoom-in" data-aos-delay="300">
              <h5 className="fw-bold">⭐ Quality</h5>
              <p className="text-muted">
                We deliver only high-quality products and services.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 text-center bg-secondary">
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold text-light">Want to explore our products?</h2>
          <p className="text-light my-3">
            Discover our wide range of products now.
          </p>
          <Link to={'/products'} className="btn btn-primary btn-lg">
            Go to Products
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;

