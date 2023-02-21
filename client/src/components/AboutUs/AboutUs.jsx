import React from "react";
import "./AboutUs.css";
import AboutCard from "./AboutCard";
import { Grid } from "@mui/material";

const AboutUs = () => {
  return (
    <div style={{ minHeight: "90vh" }}>
      <div style={{ marginTop: "calc(6rem + 1vw)" }}>
        <Grid
          container
          direction="column"
          justifyContent=""
          alignItems=""
        >
          <Grid item>
            <AboutCard
              name="Abhinav Raj"
              description="A passionate individual who always 
              thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact."
              imgSrc="/images/grey_wolf.png"
            />
          </Grid>
          <Grid item>
            <AboutCard
              name="Abhinav Raj"
              description="A passionate individual who always 
              thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact."
              imgSrc="/images/grey_wolf.png"
            />
          </Grid>
          
        </Grid>
      </div>
    </div>
  );
};

export default AboutUs;
