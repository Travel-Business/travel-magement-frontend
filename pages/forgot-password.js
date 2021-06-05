/* pages/forgot-password.js */

import axios from "axios";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import NavbarWithoutSearch from "../components/NavbarWithoutSearch";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Router from "next/router";
import React, { useState, useEffect, useContext } from "react";
import { forgotPassword } from "../lib/auth";

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
    // width: "100%",
    minHeight: "50vh",
    padding: "15% 0% 0% 0%",

    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  copyrightContainer: {
    padding: "1% 0% 0% 0%",
  },
}));

export default function ForgotPassword() {
  const [data, updateData] = useState({ email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const classes = useStyles();
  function handleChange(event) {
    updateData({ ...data, [event.target.name]: event.target.value });
  }

  async function handleSubmit() {
    forgotPassword(data.email, setError, setLoading, setSuccess);
  }

  function redirect() {
    setTimeout(() => {
      Router.push("/");
    }, 3000);
  }
  return (
    <div>
      <NavbarWithoutSearch />
      <CssBaseline />
      {success && (
        <div style={{ marginBottom: 10 }}>
          <small style={{ color: "green" }}>
            {"please check your email to reset your password"}
          </small>
        </div>
      )}
      {success && redirect()}
      {Object.entries(error).length !== 0 &&
        error.constructor === Object &&
        error.message.map((error) => {
          return (
            <div key={error.messages[0].id} style={{ marginBottom: 10 }}>
              <small style={{ color: "red" }}>
                {error.messages[0].message}
              </small>
            </div>
          );
        })}
      <div className={classes.paper}>
        <ValidatorForm noValidate onSubmit={handleSubmit}>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <TextValidator
                label="Email"
                fullWidth={true}
                onChange={handleChange}
                name="email"
                type="email"
                validators={["required"]}
                errorMessages={["this field is required"]}
                value={data.email}
              />

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

  // <Container>
  //   <Row>
  //     <Col sm="12" md={{ size: 5, offset: 3 }}>
  //       <div className="paper">
  //         <div className="header"></div>
  //         <section className="wrapper">
  //           {success && (
  //             <div style={{ marginBottom: 10 }}>
  //               <small style={{ color: "green" }}>
  //                 {"please check your email to reset your password"}
  //               </small>
  //             </div>
  //           )}
  //           {success && redirect()}
  //           {Object.entries(error).length !== 0 &&
  //             error.constructor === Object &&
  //             error.message.map((error) => {
  //               return (
  //                 <div
  //                   key={error.messages[0].id}
  //                   style={{ marginBottom: 10 }}
  //                 >
  //                   <small style={{ color: "red" }}>
  //                     {error.messages[0].message}
  //                   </small>
  //                 </div>
  //               );
  //             })}
  //           <Form>
  //             <fieldset disabled={loading}>
  //               <FormGroup>
  //                 <Label>Email:</Label>
  //                 <Input
  //                   onChange={(event) => onChange(event)}
  //                   name="email"
  //                   type="email"
  //                   style={{ height: 50, fontSize: "1.2em" }}
  //                 />
  //               </FormGroup>

  //               <FormGroup>
  //                 <Button
  //                   style={{ float: "right", width: 120 }}
  //                   color="primary"
  //                   disabled={success}
  //                   onClick={handleSubmit}
  //                 >
  //                   {loading ? "Loading... " : "Submit"}
  //                 </Button>
  //               </FormGroup>
  //             </fieldset>
  //           </Form>
  //         </section>
  //       </div>
  //     </Col>
  //   </Row>
  //   <style jsx>
  //     {`
  //       .paper {
  //         border: 1px solid lightgray;
  //         box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  //           0px 1px 1px 0px rgba(0, 0, 0, 0.14),
  //           0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  //         border-radius: 6px;
  //         margin-top: 90px;
  //       }
  //       .notification {
  //         color: #ab003c;
  //       }
  //       .header {
  //         width: 100%;
  //         height: 120px;
  //         background-color: #2196f3;
  //         margin-bottom: 30px;
  //         border-radius-top: 6px;
  //       }
  //       .wrapper {
  //         padding: 10px 30px 20px 30px !important;
  //       }
  //       a {
  //         color: blue !important;
  //       }
  //       img {
  //         margin: 15px 30px 10px 50px;
  //       }
  //     `}
  //   </style>
  // </Container>
  // );
}
