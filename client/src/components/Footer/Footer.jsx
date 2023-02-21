import React from "react";
import "./Footer.css";
import { Grid } from "@mui/material";
import {
  Favorite,
  LinkedIn,
  AccountCircle,
  Instagram,
  ChatBubble,
} from "@mui/icons-material";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item className="credit">
          <p>
            Made With Love By grey_W0lf <Favorite className="icon" />{" "}
          </p>
        </Grid>
        <Grid item>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item className="socialIcons" component={Link}>
              <LinkedIn className="icon" />
              <p>LinkedIn</p>
            </Grid>
            <Grid item className="socialIcons" component={Link}>
              <AccountCircle className="icon" />
              <p>Portfolio</p>
            </Grid>
            <Grid item className="socialIcons" component={Link}>
              <Instagram className="icon" />
              <p>Instagram</p>
            </Grid>
            <Grid item className="socialIcons" component={Link}>
              <ChatBubble className="icon" />
              <p>Contact</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
