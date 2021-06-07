import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import NavbarWithoutSearch from "../components/NavbarWithoutSearch";
import { resetPassword } from "../lib/auth";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
function Copyright() {
  return (
    <Typography align="center">
      {"Copyright © "}
      <Link color="inherit" href="">
        Apollo Management System
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: "50vh",
    padding: "15% 0% 0% 0%",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  copyrightContainer: {
    padding: "1% 0% 0% 0%",
  },
}));

export default function ResetPassword() {
  const {
    query: { code },
  } = useRouter();
  const classes = useStyles();
  const [formData, setFormData] = useState({
    password: "",
    repeatPassword: "",
  });
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== formData.password) {
        return false;
      }
      return true;
    });
  }, [formData.password, formData.repeatPassword]);

  const handleChange = (event) => {
    const preUpdateFormData = formData;
    formData[event.target.name] = event.target.value;
    setFormData({ ...preUpdateFormData, formData });
  };
  const handleSubmit = () => {
    setSubmitted(true),
      resetPassword({
        password: formData.password,
        passwordConfirmation: formData.repeatPassword,
        code,
        cb: setSubmitted,
      });
  };

  return (
    <div>
      <NavbarWithoutSearch />
      <CssBaseline />
      <div className={classes.paper}>
        <ValidatorForm noValidate onSubmit={handleSubmit}>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <TextValidator
                label="Password"
                fullWidth={true}
                onChange={handleChange}
                name="password"
                type="password"
                validators={["required"]}
                errorMessages={["this field is required"]}
                value={formData.password}
              />
              <br />
              <TextValidator
                label="Repeat password"
                fullWidth={true}
                onChange={handleChange}
                name="repeatPassword"
                type="password"
                validators={["isPasswordMatch", "required"]}
                errorMessages={["password mismatch", "this field is required"]}
                value={formData.repeatPassword}
              />
              <br />
              <Button
                color="primary"
                variant="contained"
                type="submit"
                disabled={submitted}
              >
                {(submitted && "Your password is reset!") ||
                  (!submitted && "Reset")}
              </Button>
            </Grid>
          </Grid>
        </ValidatorForm>
      </div>
      <Box className={classes.copyrightContainer} mt={10}>
        <Copyright />
      </Box>
    </div>
  );
}
