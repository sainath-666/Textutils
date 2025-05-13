import React from "react";

export default function About(props) {
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#042743" }}
    >
      <div className="about-header text-center mb-5">
        <h1 className="display-4 mb-4">About TextUtils</h1>
        <p className="lead">Your go-to text manipulation and analysis tool</p>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div
            className="feature-card"
            style={{
              background:
                props.mode === "dark" ? "rgba(255,255,255,0.05)" : "white",
              padding: "2rem",
              borderRadius: "15px",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
              height: "100%",
            }}
          >
            <i
              className="fas fa-chart-bar fa-3x mb-4"
              style={{ color: "#2196f3" }}
            ></i>
            <h3 className="h4 mb-3">Text Analysis</h3>
            <p>
              Get instant insights about your text including word count,
              character count, and estimated reading time.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="feature-card"
            style={{
              background:
                props.mode === "dark" ? "rgba(255,255,255,0.05)" : "white",
              padding: "2rem",
              borderRadius: "15px",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
              height: "100%",
            }}
          >
            <i
              className="fas fa-magic fa-3x mb-4"
              style={{ color: "#2196f3" }}
            ></i>
            <h3 className="h4 mb-3">Text Transformation</h3>
            <p>
              Transform your text with various operations like case conversion,
              extra space removal, and more.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="feature-card"
            style={{
              background:
                props.mode === "dark" ? "rgba(255,255,255,0.05)" : "white",
              padding: "2rem",
              borderRadius: "15px",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
              height: "100%",
            }}
          >
            <i
              className="fas fa-globe fa-3x mb-4"
              style={{ color: "#2196f3" }}
            ></i>
            <h3 className="h4 mb-3">Universal Access</h3>
            <p>
              Works seamlessly across all modern browsers and devices. Free to
              use, no registration required.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 text-center">
        <h2 className="h3 mb-4">Why Choose TextUtils?</h2>
        <div className="row g-4">
          <div className="col-md-3">
            <div
              className="stat-card"
              style={{
                background:
                  props.mode === "dark" ? "rgba(255,255,255,0.05)" : "white",
                padding: "1.5rem",
                borderRadius: "10px",
              }}
            >
              <i className="fas fa-bolt mb-3" style={{ color: "#2196f3" }}></i>
              <h4 className="h5">Fast</h4>
              <p>Instant results</p>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="stat-card"
              style={{
                background:
                  props.mode === "dark" ? "rgba(255,255,255,0.05)" : "white",
                padding: "1.5rem",
                borderRadius: "10px",
              }}
            >
              <i className="fas fa-lock mb-3" style={{ color: "#2196f3" }}></i>
              <h4 className="h5">Secure</h4>
              <p>No data storage</p>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="stat-card"
              style={{
                background:
                  props.mode === "dark" ? "rgba(255,255,255,0.05)" : "white",
                padding: "1.5rem",
                borderRadius: "10px",
              }}
            >
              <i
                className="fas fa-tablet-alt mb-3"
                style={{ color: "#2196f3" }}
              ></i>
              <h4 className="h5">Responsive</h4>
              <p>Works on all devices</p>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="stat-card"
              style={{
                background:
                  props.mode === "dark" ? "rgba(255,255,255,0.05)" : "white",
                padding: "1.5rem",
                borderRadius: "10px",
              }}
            >
              <i className="fas fa-code mb-3" style={{ color: "#2196f3" }}></i>
              <h4 className="h5">Open Source</h4>
              <p>Free forever</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
