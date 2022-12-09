import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Appbar.css";
import AppBar from "@mui/material/AppBar";
import LoginIcon from "@mui/icons-material/Login";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Grid, Box, Popper } from "@mui/material";
import ReorderIcon from "@mui/icons-material/Reorder";

const Appbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  return (
    <div>
      <AppBar className="AppBar">
        <div>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item direction="row">
              <Grid container alignItems="center">
                <Grid item>
                  <img alt="logo" src="./images/logo2.png"></img>
                </Grid>
                <Grid item>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <p>Wolf Society</p>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <div className="NavMenu">
                <Grid container alignItems="center">
                  <Grid
                    item
                    className="items"
                    component={Link}
                    to="/about"
                    style={{ textDecoration: "none" }}
                  >
                    <TravelExploreIcon className="icons" /> About Us
                  </Grid>
                  <Grid
                    item
                    className="items"
                    component={Link}
                    to="/login"
                    style={{ textDecoration: "none" }}
                  >
                    <LoginIcon className="icons" /> Login
                  </Grid>
                </Grid>
              </div>
              <div className="toggleButton">
                <ReorderIcon
                  aria-describedby={id}
                  type="button"
                  onClick={handleClick}
                  className="icon"
                >
                  Toggle Popper
                </ReorderIcon>
                <Popper id={id} open={open} anchorEl={anchorEl}>
                  <Box>
                    <ul className="toggleMenu">
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/"
                        onClick={handleClick}
                      >
                        <li className="items">
                          <HomeIcon className="icons" /> Home
                        </li>
                      </Link>

                      <Link
                        style={{ textDecoration: "none" }}
                        to="/login"
                        onClick={handleClick}
                      >
                        <li className="items">
                          <LoginIcon className="icons" /> Login
                        </li>
                      </Link>

                      <Link
                        style={{ textDecoration: "none" }}
                        to="/about"
                        onClick={handleClick}
                      >
                        <li className="items">
                          <TravelExploreIcon className="icons" /> About Us
                        </li>
                      </Link>

                      <Link
                        style={{ textDecoration: "none" }}
                        to="/panel"
                        onClick={handleClick}
                      >
                        <li className="items">
                          <LoginIcon className="icons" /> Panel
                        </li>
                      </Link>
                    </ul>
                  </Box>
                </Popper>
              </div>
            </Grid>
          </Grid>
        </div>
      </AppBar>
    </div>
  );
};

export default Appbar;
