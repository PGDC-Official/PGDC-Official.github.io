import { Link } from "react-router-dom";
import { PATHS } from "../../../routes";
import Button from "../../../components/Button";
import pgdcLogo from "../../../assets/logo.jpg";
import { RiMenuLine, RiCloseFill } from "react-icons/ri";
import { Drawer } from "antd";
import { useEffect, useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  const handleOpenDrawer = () => {
    setOpen(true);
  };

  const handleCloseDrawer = () => {
    setOpen(false);
  };

  const handleEscapeDrawer = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeDrawer);

    return () => {
      document.removeEventListener("keydown", handleEscapeDrawer);
    }
  }, []);

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
      <nav className="navbar">
        <Link to={PATHS.HOME}>
          <img
            src={pgdcLogo}
            alt="Logo"
            className="navbar-logo"
          />
        </Link>
        <ul className="navbar-items">
          <li>
            <Button>Home</Button>
          </li>
          <li>
            <Button>About</Button>
          </li>
          <li>
            <Button>News</Button>
          </li>
          <li>
            <Button>Events</Button>
          </li>
        </ul>

        <Button otherClasses={"menu-button"} onClick={handleOpenDrawer}>
          <RiMenuLine size={20} />
        </Button>
      </nav>

      <Drawer onClose={handleCloseDrawer} open={open}>
        <ul className="drawer-items">
          <li>
            <Button>Home</Button>
          </li>
          <li>
            <Button>About</Button>
          </li>
          <li>
            <Button>News</Button>
          </li>
          <li>
            <Button>Events</Button>
          </li>
        </ul>
      </Drawer>
    </header>
  );
}

export default Header;
