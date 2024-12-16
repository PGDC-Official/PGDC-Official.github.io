import React from "react";
import { NavLink, Link } from "react-router-dom";
import { PATHS } from "../../../routes";
import Button from "../../../components/Button";
import pgdcLogo from "../../../assets/logo.jpg";

function Header() {
  return (
    <header 
      style={{
        backgroundColor: "#fff",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        position: "fixed",
        width: "100%",
        zIndex: "100",
      }}
    >
      <nav
        className="navbar"
      >
        <Link to={PATHS.HOME}>
          <img
            src={pgdcLogo}
            alt="Logo"
            style={{
              width: "80px",
            }}
          />
        </Link>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "1rem",
          }}
        >
          <li>
            <NavLink to={PATHS.HOME} exact>
              <Button>Home</Button>
            </NavLink>
          </li>
          <li>
            <Button>About</Button>
          </li>
          <li>
            <Button>Contact</Button>
          </li>
          <li>
            <Button>Posts</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
