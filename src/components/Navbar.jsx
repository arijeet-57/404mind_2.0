import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "black",
        color: "white",
        display: "flex",
        padding: "5px 5px",
        gap: "2rem",
      }}
    >
      <NavLink
        to="/"
        end
        style={({ isActive }) => ({
          color: isActive ? "yellow" : "white",
          textDecoration: isActive ? "underline" : "none",
          paddingBottom: "3px",
        })}
      >
        Welcome
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "yellow" : "white",
          textDecoration: isActive ? "underline" : "none",
          paddingBottom: "3px",
        })}
      >
        About
      </NavLink>

      <NavLink
        to="/blogs"
        style={({ isActive }) => ({
          color: isActive ? "yellow" : "white",
          textDecoration: isActive ? "underline" : "none",
          paddingBottom: "3px",
        })}
      >
        Blogs
      </NavLink>
    </nav>
  );
}

export default Navbar;