import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const Navbar = ({ darkMode, setDarkMode }) => {
    const { cart } = useContext(ProductContext);

    const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

    return (
        <nav className="navbar navbar-expand-lg px-4">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">
                    FakeStore
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item me-3">
                            <Link className="nav-link" to="/">
                                <i className="fas fa-home"></i>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link" to="/about">
                                <i className="fas fa-circle-info"></i>
                                About
                            </Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link" to="/products">
                                <i className="fas fa-box-open"></i>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link" to="/contact">
                                <i className="fas fa-envelope"></i>
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item py-2">
                            <Link
                                className="btn btn-outline-secondary"
                                onClick={() => setDarkMode(!darkMode)}
                            >
                                {darkMode ? (
                                    <i className="fas fa-sun"></i>
                                ) : (
                                    <i className="fas fa-moon"></i>
                                )}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/cart"
                                className="btn btn-outline-primary position-relative"
                            >
                                <i className="bi bi-cart-fill"></i>
                                {cartCount > 0 && (
                                    <span
                                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                        style={{ fontSize: "0.7rem" }}
                                    >
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
