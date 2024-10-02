import React from "react";
import { Box, Divider, List, ListItemButton, Stack, Typography } from "@mui/joy";
import { Link, NavLink } from "react-router-dom";
import { Close } from "@mui/icons-material";
import PushButton from "components/PushButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

function DrawerList({ toggleDrawer }) {
  return (
    <Box
      sx={{
        padding: "4px 8px",
        height: "100%",
      }}
      role="presentation"
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", padding: "8px" }}>
        <PushButton onClick={toggleDrawer(false)}>
          <Close />
        </PushButton>
      </Box>
      <Stack 
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "start",
          width: "100%",
          height: "90%",
        }}
      >
        <List sx={{
          width: "100%",
        }}>
          <NavLink to="/" className="nav-link">
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Typography variant="h6" sx={{ color: "black", fontWeight: 700 }}>
                Home
              </Typography>
            </ListItemButton>
          </NavLink>

          <NavLink to="/about-us" className="nav-link">
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Typography variant="h6" sx={{ color: "black", fontWeight: 700 }}>
                About Us
              </Typography>
            </ListItemButton>
          </NavLink>

          <NavLink to="/projects" className="nav-link">
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Typography variant="h6" sx={{ color: "black", fontWeight: 700 }}>
                Projects
              </Typography>
            </ListItemButton>
          </NavLink>

          <NavLink to="/blog" className="nav-link">
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Typography variant="h6" sx={{ color: "black", fontWeight: 700 }}>
                Blog
              </Typography>
            </ListItemButton>
          </NavLink>

          <NavLink to="/contact" className="nav-link">
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Typography variant="h6" sx={{ color: "black", fontWeight: 700 }}>
                Contact
              </Typography>
            </ListItemButton>
          </NavLink>
        </List>

        

        <Box 
          sx={{
            padding: "0 16px",
            width: "100%",
          }}
        >
          {/* Social Media Icons */}
          <Divider orientation="horizontal"/>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              width: "100%",
              padding: "16px 0",
              justifyContent: "center",
            }}
          >
            <Link to="https://www.facebook.com/pgdc.phenikaa">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link to="https://www.facebook.com/pgdc.phenikaa">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link to="https://www.facebook.com/pgdc.phenikaa">
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>
          </Stack>
          <Typography variant="body2" sx={{ textAlign: "center",  fontSize: "12px"}}>
            © 2024 Phenikaa Game Development Club - PGDC. All rights reserved.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default DrawerList;
