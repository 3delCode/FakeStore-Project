import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import AOS from "aos";
import Swal from "sweetalert2";
import { ProductContext } from "../context/ProductContext";

const Home = () => {
    const { products, addToCart } = useContext(ProductContext);
    const limitedProducts = products.slice(0, 4);

    useEffect(() => {
        AOS.refreshHard();
    }, []);
    const handleAddToCart = (product) => {
        addToCart(product);

        Swal.fire({
            icon: "success",
            title: "Added to Cart",
            text: `${product.title} has been added to your cart.`,
            timer: 1500,
            showConfirmButton: false,
        });
    };

    return (
        <>
            <section className="py-5">
                <div className="container-fluid px-3">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6" data-aos="fade-right">
                            <h1 className="fw-bold">
                                Discover Fake-Store <span className="text-primary">Products</span>
                            </h1>
                            <p className="text-muted my-3">
                                Browse our collection of high-quality products with the best prices
                                and smooth experience.
                            </p>
                            <Link to="/products" className="btn btn-primary btn-lg">
                                Shop Now
                            </Link>
                        </div>

                        <div className="col-12 col-md-6 text-center" data-aos="fade-left">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/891/891419.png"
                                alt="shopping"
                                className="img-fluid"
                                style={{ maxHeight: "350px" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container-fluid px-3">
                    <div className="row text-center g-4">
                        <div className="col-12 col-md-4" data-aos="zoom-in">
                            <h5 className="fw-bold">Fast Delivery 🚀</h5>
                            <p className="text-muted">Get your products delivered quickly and safely.</p>
                        </div>
                        <div className="col-12 col-md-4" data-aos="zoom-in" data-aos-delay="150">
                            <h5 className="fw-bold">Best Quality ⭐</h5>
                            <p className="text-muted">We provide only the best quality products.</p>
                        </div>
                        <div className="col-12 col-md-4" data-aos="zoom-in" data-aos-delay="300">
                            <h5 className="fw-bold">Secure Payment 🔒</h5>
                            <p className="text-muted">Your payments are safe with our secure system.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5" data-aos='fade-up'>
                <div className="container-fluid px-3">
                    <div className="row g-4">
                        {limitedProducts.map((product) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src={product.image}
                                        className="card-img-top img-fluid"
                                        alt={product.title}
                                        style={{ height: "200px", objectFit: "contain" }}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h6 className="fw-bold">{product.title}</h6>
                                        <p className="text-muted">${product.price}</p>

                                        <div className="mt-auto d-flex flex-column gap-2">
                                            <Link
                                                to={`/product/${product.id}`}
                                                className="btn btn-outline-primary"
                                            >
                                                View Details
                                            </Link>

                                            <button
                                                className="btn btn-primary"
                                                onClick={() => handleAddToCart(product)}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ===== Show More Button ===== */}
                    <div className="text-center mt-4">
                        <Link to="/products" className="btn btn-primary btn-lg">
                            Show More
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
