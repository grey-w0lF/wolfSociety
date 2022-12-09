import React from "react";
import "./AboutUs.css";
import { Grid, Link } from "@mui/material";

import { LinkedIn, AccountCircle, Instagram } from "@mui/icons-material";
const AboutCard = (props) => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="AboutCard"
      >
        <Grid item md={3}>
          <img src={props.imgSrc} alt="profilepic" />
        </Grid>
        <Grid item md={9}>
          <Grid container direction="column" justifyContent="" alignItems="">
            <Grid item>
              <h1>{props.name}</h1>
              <p>{props.description}</p>
            </Grid>
            <Grid item>
              <Grid container justifyContent="center" alignItems="center">
                <Grid
                  item
                  className="socialIcons"
                  component={Link}
                  href={props.linkedin}
                  underline="none"
                  target="_blank"
                >
                  <LinkedIn className="icon" />
                  <p>LinkedIn</p>
                </Grid>
                <Grid
                  item
                  className="socialIcons"
                  component={Link}
                  href={props.linkedin}
                  underline="none"
                  target="_blank"
                >
                  <AccountCircle className="icon" />
                  <p>Portfolio</p>
                </Grid>
                <Grid
                  item
                  className="socialIcons"
                  component={Link}
                  href={props.linkedin}
                  underline="none"
                  target="_blank"
                >
                  <Instagram className="icon" />
                  <p>Instagram</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutCard;
