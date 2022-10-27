import React from "react";
import { NavLink } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-page">
      <img className="error-img" src="https://i.hizliresim.com/ab221sn.png" />
      <NavLink className="nav-link-error" to="/">
        <p>Anasayfa'ya Dön.</p>
      </NavLink>
    </div>
  );
};

export default Error;
