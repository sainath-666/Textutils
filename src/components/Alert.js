import React from "react";

const Alert = (props) => {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div
      style={{
        height: "50px",
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 1000,
        minWidth: "300px",
      }}
    >
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show d-flex align-items-center`}
          role="alert"
          style={{
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            border: "none",
          }}
        >
          <i
            className={`fas fa-${
              props.alert.type === "success" ? "check-circle" : "info-circle"
            } me-2`}
          ></i>
          <div>
            <strong>{capitalize(props.alert.type)}</strong>
            {props.alert.msg}
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
