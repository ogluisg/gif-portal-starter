import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button className="cta-button connect-wallet-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
