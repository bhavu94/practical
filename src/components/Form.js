import React, { useState, useEffect, useContext } from "react";
import {
  Typography,
  withStyles,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Popover,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { FireBaseContext } from "./context";
import { LIST_OF_STATES } from "./constants";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "red",
    justifySelf: "center",
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    maxWidth: "374px",
    textAlign: "justify",
    padding: "24px 32px",
    borderRadius: 0,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(5),
  },
  title: {
    fontSize: "2.5em",
    fontWeight: "bolder",
  },
  spaceOut: {
    justifyContent: "space-between",
  },
}));

const WhiteTextField = withStyles({
  root: {
    "& .MuiInputBase-input": {
      color: "#fff", // Text color
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#fff", // Semi-transparent underline
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: "#fff", // Solid underline on hover
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#fff", // Solid underline on focus
    },
  },
})(TextField);
const WhiteTextForm = withStyles({
  root: {
    "& .MuiInputBase-input": {
      color: "#fff", // Text color
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#fff", // Semi-transparent underline
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: "#fff", // Solid underline on hover
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#fff", // Solid underline on focus
    },
  },
})(FormControl);

const Sucsess = () => {
  return (
    <div style={{ color: "#fff", margin: "15% auto" }}>
      <Typography variant="h5" color="primary">
        Thank you for submitting. We will be in touch shortly with your resullts
      </Typography>
    </div>
  );
};

const Form = () => {
  const [successful, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({ state: "Choose state" });
  const { firestore } = useContext(FireBaseContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleReset = (e) => {
    e.preventDefault();
    setUserData({ state: "Choose state" });
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await firestore.collection("users").add({
        ...userData,
        createdAt: new Date().toLocaleDateString(),
      });

      if (result) {
        setLoading(false);
        setSuccess(true);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSuccess(false);
    }
  };

  const handleChangeState = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const classes = useStyles();
  return (
    <form
      onSubmit={handleSubmit}
      style={{ backgroundColor: "#001", padding: 20 }}
    >
      <Typography className={classes.title} variant="h5" color="primary">
        Redeem your prize
      </Typography>
      {successful ? (
        <Sucsess />
      ) : (
        <div className={classes.spaceOut}>
          <WhiteTextField
            id="standard-full-width"
            label="Customer's Full Name"
            color="primary"
            required
            onChange={handleChangeState}
            name="fullName"
            type="text"
            className={classes.textField}
            placeholder="Your full name"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
              focused: true,
            }}
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <WhiteTextField
                id="standard-full-width"
                label="Email address"
                color="primary"
                name="email"
                type="email"
                required
                onChange={handleChangeState}
                className={classes.textField}
                placeholder="Enter your work email"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                  focused: true,
                }}
              />
              <WhiteTextField
                id="standard-full-width"
                label="Phone number #2 - Optional"
                color="primary"
                name="phone2"
                type="tel"
                onChange={handleChangeState}
                className={classes.textField}
                placeholder="Enter your phone number"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                  focused: true,
                }}
              />
              {/* <WhiteTextForm fullWidth className={classes.textField}>
                <InputLabel required id="select-state-label">
                  State
                </InputLabel>
                <Select
                  labelId="select-state-label"
                  id="select-state"
                  name="state"
                  required
                  value={userData.state}
                  onChange={handleChangeState}
                >
                  <MenuItem value={userData.state} disabled selected>
                    Choose state
                  </MenuItem>
                  {LIST_OF_STATES.map((el, i) => (
                    <MenuItem value={el} key={i}>
                      {el}
                    </MenuItem>
                  ))}
                </Select>
              </WhiteTextForm> */}
            </Grid>
            <Grid item xs={6}>
              <WhiteTextField
                id="standard-full-width"
                label="Phone number"
                color="primary"
                name="phone"
                type="tel"
                onChange={handleChangeState}
                required
                className={classes.textField}
                placeholder="Enter your phone number"
                fullWidth
                margin="normal"
                inputProps={{
                  maxLength: 11,
                }}
                InputLabelProps={{
                  shrink: true,
                  focused: true,
                }}
              />
              <WhiteTextField
                id="standard-full-width"
                label="Outlet name"
                color="primary"
                name="outlet"
                type="text"
                onChange={handleChangeState}
                required
                className={classes.textField}
                placeholder="Enter place of purchase"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                  focused: true,
                }}
              />

              <WhiteTextField
                id="standard-full-width"
                label="city"
                color="primary"
                name="city"
                type="text"
                onChange={handleChangeState}
                required
                className={classes.textField}
                placeholder="Enter city"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                  focused: true,
                }}
              />
            </Grid>
          </Grid>

          <WhiteTextField
            id="standard-full-width"
            label={
              <span>
                IMEI Number{" "}
                <i
                  aria-owns={open ? "mouse-over-popover" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                  className="fa fa-info-circle"
                  aria-hidden="true"
                >
                  <Popover
                    id="mouse-over-popover"
                    className={classes.popover}
                    classes={{
                      paper: classes.paper,
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                  >
                    <Typography
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      This is a <strong>15 digits</strong> unique identification
                      or serial number on the back of your phone, under the
                      battery pack, or on the box your phone came in.
                    </Typography>
                  </Popover>
                </i>
              </span>
            }
            name="imei"
            required
            error={userData.imei && userData.imei.length !== 15}
            color="primary"
            onChange={handleChangeState}
            className={classes.textField}
            placeholder="XXX-XXXX-XXXX-XXXX-XXXX"
            fullWidth
            margin="normal"
            inputProps={{
              maxLength: 15,
            }}
            maxLength="2"
            InputLabelProps={{
              shrink: true,
              focused: true,
            }}
          />
        </div>
      )}
      {successful ? (
        <button
          onClick={handleReset}
          style={{
            color: "white",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "2em",
            fontWeight: "bold",
            borderBottom: "5px solid green",
            textTransform: "capitalize !important",
          }}
        >
          Submit another entry
        </button>
      ) : (
        <Button
          type="submit"
          size="large"
          style={{
            marginTop: "100px",
            padding: "10px 24px",
            width: "146px",
            backgroundColor: "#FEFFF2",
            position: "relative",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            fontWeight: "normal",
            borderRadius: 0,
          }}
          variant="contained"
          color="primary"
        >
          <span
            style={{
              lineHeight: "32px",
              fontSize: "20px",
            }}
          >
            {!loading ? "Submit" : "Submitting..."}
          </span>
          {!loading && (
            <i
              style={{
                marginLeft: "20px",
              }}
              className="fa fa-arrow-right"
              aria-hidden="true"
            ></i>
          )}
        </Button>
      )}
    </form>
  );
};

export default Form;
