/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => {
        return {
          fontWeight: isActive ? "400" : "400",
          color: isActive ? "#27CE8E" : "",
          backgroundColor: "transparent",
        };
      }}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
