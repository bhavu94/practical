import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import NavBar from "./components/NavBar";
import HomeImage from "./assets/oppo-phone.png";
import Form from "./components/Form";

const useStyle = makeStyles((theme) => ({
  form: {
    marginTop: theme.breakpoints.only("lg") ? "70px" : "0px",
  },
  container: {
    marginTop: theme.breakpoints.only("lg") ? "40px" : "70px",
  },
}));
export function Home() {
  const classes = useStyle();
  return (
    <div className="main">
      <Container
        style={{
          paddingRight: "10%",
        }}
        maxWidth="lg"
      >
        <NavBar />
        <Grid container className={classes.container} spacing={4}>
          <Grid item xs={12} lg={6}>
            <img className="small-device" src={HomeImage} alt="home" />
          </Grid>
          <Grid item xs={12} lg={6} className={classes.form}>
            <Form />
            {/* <img className="small-device" src={HomeImage} alt="home" /> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
