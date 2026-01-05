import React from "react";

const OfflineMessage = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                minHeight: "60vh",
                backgroundColor: "#fff3f3",
                padding: "2rem",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                margin: "2rem auto",
                maxWidth: "500px",
            }}
        >
            <h3 style={{ color: "#d9534f", marginBottom: "0.5rem" }}>
                You are Offline
            </h3>
            <p style={{ color: "#555", marginBottom: "1rem" }}>
                Please check your internet connection.
            </p>
            <button
                onClick={() => window.location.reload()}
                style={{
                    padding: "0.5rem 1.5rem",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                }}
            >
                Retry
            </button>
        </div>
    );
};

export default OfflineMessage;
