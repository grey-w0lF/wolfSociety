import React from "react";
import "./userScreens.css";
import { Grid } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const login = () => {
  return (
    <div className="loginScreen">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item className="loginForm">
          <h1>Admin Login</h1>
          <Grid
            container
            direction="column"
            justifyContent="Center"
            alignItems="center"
            style={{ marginTop: "2.5rem" }}
          >
            <Grid item>
              <p>Email</p>
              <input type="text" />
            </Grid>
            <Grid item>
              <p>Password</p>
              <input type="password" />
            </Grid>
            <Grid item>
              <button><LoginIcon className="icons"/> Login</button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default login;
