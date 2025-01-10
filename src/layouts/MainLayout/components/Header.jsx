import { Link } from "react-router-dom";
import { PATHS } from "../../../routes";
import Button from "../../../components/Button";
import pgdcLogo from "../../../assets/svg/logo_plain_sm_white.svg";
import { RiMenuLine, RiCloseFill, RiErrorWarningFill } from "react-icons/ri";
import { Divider, Drawer } from "antd";
import { useEffect, useState } from "react";
import useViewport from "../../../utils/hooks/useViewport";

function Header() {
  const viewport = useViewport();
  const isMobile = viewport.width < 768;
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
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeDrawer);

    return () => {
      document.removeEventListener("keydown", handleEscapeDrawer);
    };
  }, []);

  return (
    <>
      <header
        className="dark"
        style={{
          backgroundColor: isMobile ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.9)",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          position: "fixed",
          width: "100%",
          zIndex: "100",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="flex text-center inter text-xs text-white bg-black justify-center ">
          ⚠️ Underconstruction Site
        </div>
        <nav className="navbar">
          <Link to={PATHS.HOME}>
            <img src={pgdcLogo} alt="Logo" className="navbar-logo" />
          </Link>
          <ul className="navbar-items">
            <li>
              <Link
                to={PATHS.HOME}
                className="text-white uppercase font-bold hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                // to={PATHS.ABOUT}
                href={"#about"}
                className="text-white uppercase font-bold hover:underline"
              >
                About
              </a>
            </li>
            <li>
              <Link
                to={PATHS.NEWS}
                className="text-white uppercase font-bold hover:underline"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                to={PATHS.EVENTS}
                className="text-white uppercase font-bold hover:underline"
              >
                Events
              </Link>
            </li>
          </ul>

          <Button
            otherClasses={"menu-button"}
            onClick={handleOpenDrawer}
            styles={{
              color: "white",
              borderColor: "white",
              boxShadow: "#fff 1px 1px 0px 0px , #fff 2px 2px 0px 0px, #fff 3px 3px 0px 0px, #fff 4px 4px 0px 0px, #fff 5px 5px 0px 0px"
            }}
          >
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
    </>
  );
}

export default Header;
