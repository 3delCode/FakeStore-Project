import React from 'react'
import AOS from 'aos';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer className="footer py-5" data-aos='fade-up'>
        <div className="container">
          <div className="row text-center text-md-start">
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">FakeStore</h5>
              <p className="text-muted">
                High-quality products with smooth experience. Fast delivery and secure payment.
              </p>
              <div className="d-flex justify-content-center justify-content-md-start gap-3 ">
                <Link href="#" className="social-link">
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
                <Link href="#" className="social-link">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
                <Link href="#" className="social-link">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link href="#" className="social-link">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <h6 className="fw-bold">Quick Links</h6>
              <ul className="list-unstyled">
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/products" className="footer-link">Products</Link></li>
                <li><Link to="/about" className="footer-link">About</Link></li>
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h6 className="fw-bold">Contact Us</h6>
              <p className="text-muted mb-1">123 Fake Street, City, Country</p>
              <p className="text-muted mb-1">Email: info@fakestore.com</p>
              <p className="text-muted">Phone: +123 456 7890</p>
            </div>
          </div>
          <hr className="my-4" />
          <p className="text-center text-muted mb-0">
            &copy; {new Date().getFullYear()} FakeStore. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
