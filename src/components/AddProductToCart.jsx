import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function AddProductToCart() {
  const { cart, increaseQty, decreaseQty, removeFromCart, clearCart } = useContext(ProductContext);

  const handleCheckout = () => {
    Swal.fire({
      icon: "success",
      title: "Order placed successfully 🎉",
      text: "Thank you for your purchase",
      confirmButtonColor: "#198754",
    });

    clearCart(); // 🧹 مسح كل المنتجات
  };

  const handleRemove = (id, title) => {
    removeFromCart(id);
    Swal.fire({
      icon: "info",
      title: "Removed from Cart",
      text: `${title} has been removed.`,
      timer: 1500,
      showConfirmButton: false,
    });
  };
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (!cart.length) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center py-5" style={{ minHeight: "60vh" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          fill="currentColor"
          className="bi bi-cart"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 5H14.5a.5.5 0 0 1 .49.598l-1.5 7A.5.5 0 0 1 13 13H4a.5.5 0 0 1-.491-.408L1.01 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 4 0H5z" />
        </svg>

        <h3 className="mt-4 text-center text-muted">Your Cart is Empty!</h3>
        <p className="text-center text-secondary">
          Looks like you haven't added any products yet.
        </p>

        <Link to="/products" className="btn btn-primary mt-3">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container-fluid px-3 py-5">
      <h2 className="mb-4">Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="row align-items-center my-4 g-3"
        >
          <div className="col-4 col-sm-3 col-md-2 text-center">
            <img
              src={item.image}
              className="img-fluid"
              style={{ maxHeight: "80px", objectFit: "contain" }}
              alt={item.title}
            />
          </div>
          <div className="col-8 col-sm-6 col-md-7">
            <h6 className="fw-bold mb-1">{item.title}</h6>
            <p className="fw-bold mb-2">
              ${item.price} × {item.qty}
            </p>
          </div>


          <div className="col-12 col-sm-3 col-md-3 text-sm-end">
            <button
              className="btn btn-outline-secondary"
              onClick={() => decreaseQty(item.id)}
            >
              -
            </button>
            <span>{item.qty}</span>
            <button
              className="btn btn-outline-secondary"
              onClick={() => increaseQty(item.id)}
            >
              +
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleRemove(item.id, item.title)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h5>Total: ${total.toFixed(2)}</h5>
        <button className="btn btn-success btn-lg" onClick={handleCheckout}>
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default AddProductToCart;
