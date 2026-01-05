import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import Loader from "./Loader";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductDetails.css";
import { useNavigate } from 'react-router-dom';
import { ProductContext } from "../context/ProductContext";

function ProductDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useContext(ProductContext);
    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => setProduct(response.data))
            .catch((error) => console.error("Error fetching product details:", error));
    }, [id]);
    if (!product) {
        return (
            <div className="loader-wrapper">
                <Loader />
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(product)
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: "Added successfully",
            showConfirmButton: false,
            timer: 1500,
        });
    }

    return (
        <div className="container product-details-page my-5">
            <Helmet>
                <title>{product.title} - Product Details</title>
            </Helmet>

            <button className="btn btn-outline-primary"
                onClick={() => navigate("/products")}>
                ← Back to Products
            </button>

            <div className="row align-items-start justify-content-center g-5">
                <div className="col-md-5 col-sm-8 text-center pt-4">
                    <div className="product-image-wrapper shadow-sm">
                        <img src={product.image} alt={product.title} className="img-fluid product-image" width={400} />
                    </div>
                </div>
                <div className="col-md-6 col-sm-10 pt-4">
                    <h2 className="fw-bold mb-3">{product.title}</h2>
                    <p className="text-muted">{product.category}</p>
                    <h4 className="text-primary fw-bold mb-3">${product.price}</h4>
                    <p className="text-secondary mb-4">{product.description}</p>
                    <button
                        className="btn btn-success"
                        onClick={() => handleAddToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;