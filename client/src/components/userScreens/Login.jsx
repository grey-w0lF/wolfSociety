import React, { useState } from "react";
import { useDispatch } from "react-redux";
import reset, { loginUser } from "../../redux/authentication/authSlice";
import "./userScreens.css";
import { Grid } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const userData = {
    email,
    password,
  };
  const handleLogin = () => {
    if (email && password) dispatch(loginUser(userData));
  };

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
              <input
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Grid>
            <Grid item>
              <p>Password</p>
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Grid>
            <Grid item>
              <button onClick={handleLogin}>
                <LoginIcon className="icons" /> Login
              </button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
