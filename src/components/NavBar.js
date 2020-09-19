import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  Link,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "space-between",
    margin: "10px 25px",
  },
  logo: {
    maxWidth: 100,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: theme.spacing(1),
    fontSize: "16px",
    fontWeight: "bold",
    justifySelf: "end",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar className={classes.root}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {/* <img className={classes.logo} src={logo} alt="" /> */}
            {/* <Typography variant="h4" color="primary">
              OPPO
            </Typography> */}
          </IconButton>
          <Link
            href="https://www.aboutme.com"
            target="_blank"
            color="primary"
            className={classes.title}
          >
            Patel Promo Form
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
