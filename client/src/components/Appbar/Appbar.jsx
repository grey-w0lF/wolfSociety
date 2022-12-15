import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/authentication/authSlice";
import "./Appbar.css";
import AppBar from "@mui/material/AppBar";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import HomeIcon from "@mui/icons-material/Home";

import { Grid, Box, Popper } from "@mui/material";
import ReorderIcon from "@mui/icons-material/Reorder";

const Appbar = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const me = useSelector((state) => state.auth.me);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleLogout = () => {
    dispatch(logoutUser());
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
                  {me ? (
                    <Grid
                      item
                      className="items"
                      component={Link}
                      to="/about"
                      style={{ textDecoration: "none" }}
                    >
                      <AdminPanelSettingsIcon className="icons" /> Panel
                    </Grid>
                  ) : null}
                  <Grid
                    item
                    className="items"
                    component={Link}
                    to="/about"
                    style={{ textDecoration: "none" }}
                  >
                    <TravelExploreIcon className="icons" /> About Us
                  </Grid>
                  {me ? (
                    <Grid
                      item
                      className="items"
                      component={Link}
                      to="/login"
                      style={{ textDecoration: "none" }}
                      onClick={handleLogout}
                    >
                      <LogoutIcon className="icons" /> Logout
                    </Grid>
                  ) : (
                    <Grid
                      item
                      className="items"
                      component={Link}
                      to="/login"
                      style={{ textDecoration: "none" }}
                    >
                      <LoginIcon className="icons" /> Login
                    </Grid>
                  )}
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

                      {me ? (
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/"
                          onClick={handleLogout}
                        >
                          <li className="items">
                            <LogoutIcon className="icons" /> Logout
                          </li>
                        </Link>
                      ) : (
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/login"
                          onClick={handleClick}
                        >
                          <li className="items">
                            <LoginIcon className="icons" /> Login
                          </li>
                        </Link>
                      )}

                      <Link
                        style={{ textDecoration: "none" }}
                        to="/about"
                        onClick={handleClick}
                      >
                        <li className="items">
                          <TravelExploreIcon className="icons" /> About Us
                        </li>
                      </Link>

                      {me ? (
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/panel"
                          onClick={handleClick}
                        >
                          <li className="items">
                            <AdminPanelSettingsIcon className="icons" />
                            Panel
                          </li>
                        </Link>
                      ) : null}
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
