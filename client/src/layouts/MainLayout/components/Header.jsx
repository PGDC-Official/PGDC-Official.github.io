import React, { useState } from "react";
import {
  Sheet,
  Box,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
} from "@mui/joy";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import PushButton from "components/PushButton";
import logo from "assets/logo.jpg";
import { useMediaQuery } from "@mui/material";
import { Close } from "@mui/icons-material";
import DrawerList from "./DrawerList";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 665px)");

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <nav>
      <Sheet
        sx={{
          padding: "8px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Logo or Title */}
        <Link to="/">
          <img src={logo} alt="logo" style={{ width: "80px" }} />
        </Link>

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: "16px",
              alignItems: "center",
            }}
          >
            <PushButton>
              <Link to="/" sx={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
            </PushButton>
            <PushButton>
              <Link to="/about" sx={{ color: "white", textDecoration: "none" }}>
                About Us
              </Link>
            </PushButton>
            <PushButton>
              <Link
                to="/projects"
                sx={{ color: "white", textDecoration: "none" }}
              >
                Projects
              </Link>
            </PushButton>
            <PushButton>
              <Link to="/blog" sx={{ color: "white", textDecoration: "none" }}>
                Blog
              </Link>
            </PushButton>
            <PushButton>
              <Link
                to="/contact"
                sx={{ color: "white", textDecoration: "none" }}
              >
                Contact
              </Link>
            </PushButton>
          </Box>
        )}

        {/* Mobile Menu Icon */}
        {isMobile && (
          <PushButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </PushButton>
        )}
      </Sheet>

      {/* Drawer for Mobile Menu */}
      {isMobile && (
        <Drawer open={drawerOpen} onClose={toggleDrawer(false)}
        >
          <DrawerList toggleDrawer={toggleDrawer} />
        </Drawer>
      )}
    </nav>
  );
}

export default Header;
