import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "black",
        color: "white",
        display: "flex",
        padding: "5px 5px",
        gap: "2rem"
      }}
    >
      <NavLink
        to="/"
        end
        style={({ isActive }) => ({
          color: isActive ? "yellow" : "white",
          textDecoration: isActive ? "underline" : "none",
          paddingBottom: "3px",
          marginLeft: "12px"
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

      <NavLink
        to="/projects"
        style={({ isActive }) => ({
          color: isActive ? "yellow" : "white",
          textDecoration: isActive ? "underline" : "none",
          paddingBottom: "3px",
        })}
      >
        Projects
      </NavLink>
    </nav>
  );
}

export default Navbar;