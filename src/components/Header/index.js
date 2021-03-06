import React from "react";
import "./styles.scss";
import Logo from "../../assets/logo.png";
const Header = (prop) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="logo in progress" />
        </div>
      </div>
    </header>
  );
};

export default Header;
