import React from "react";
import "./ButtonLink.css";
import { NavLink } from "react-router-dom";
const ButtonLink = ({ text, icon, href }) => {
  return (
    <NavLink className="btn-link" to={href ?? "/"}>
      <span className="hover-underline-animation">
        {" "}
        {text ?? "button link"}{" "}
      </span>
      <span className="icon">{icon ?? ""}</span>
    </NavLink>
  );
};

export default ButtonLink;
