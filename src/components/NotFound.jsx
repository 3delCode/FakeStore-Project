import React from 'react'
import { useNavigate } from "react-router-dom";
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        minHeight: "70vh",
        padding: "2rem",
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/564/564619.png" // أيقونة Not Found
        alt="404 Not Found"
        width={150}
        style={{ marginBottom: "1.5rem" }}
      />
      <h1 style={{ fontSize: "3rem", color: "#dc3545", marginBottom: "1rem" }}>
        404
      </h1>
      <h3 style={{ marginBottom: "1rem" }}>Page Not Found</h3>
      <p style={{ color: "#555", marginBottom: "2rem" }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate("/")}
        style={{
          padding: "0.6rem 1.5rem",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Back Home
      </button>
    </div>
  )
}
