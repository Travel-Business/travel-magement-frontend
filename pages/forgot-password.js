/* pages/forgot-password.js */
import Router from "next/router";
import React, { useState, useEffect, useContext } from "react";
import { forgotPassword } from "../lib/auth";
// import { useRouter } from "next/router";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
// import { login } from "../lib/auth";
// import AppContext from "../context/AppContext";

export default function ForgotPassword() {
  const [data, updateData] = useState({ email: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  // const router = useRouter();
  // const appContext = useContext(AppContext);

  function onChange(event) {
    updateData({ ...data, [event.target.name]: event.target.value });
  }

  async function handleSubmit() {
    forgotPassword(data.email, setError, setLoading, setSuccess);
  }

  function redirect() {
    setTimeout(() => {
      Router.push("/login");
    }, 3000);
  }
  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 5, offset: 3 }}>
          <div className="paper">
            <div className="header">
              <img src="https://strapi.io/assets/images/logo.png" />
            </div>
            <section className="wrapper">
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
                    <div
                      key={error.messages[0].id}
                      style={{ marginBottom: 10 }}
                    >
                      <small style={{ color: "red" }}>
                        {error.messages[0].message}
                      </small>
                    </div>
                  );
                })}
              <Form>
                <fieldset disabled={loading}>
                  <FormGroup>
                    <Label>Email:</Label>
                    <Input
                      onChange={(event) => onChange(event)}
                      name="email"
                      type="email"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Button
                      style={{ float: "right", width: 120 }}
                      color="primary"
                      onClick={handleSubmit}
                    >
                      {loading ? "Loading... " : "Submit"}
                    </Button>
                  </FormGroup>
                </fieldset>
              </Form>
            </section>
          </div>
        </Col>
      </Row>
      <style jsx>
        {`
          .paper {
            border: 1px solid lightgray;
            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
              0px 1px 1px 0px rgba(0, 0, 0, 0.14),
              0px 2px 1px -1px rgba(0, 0, 0, 0.12);
            border-radius: 6px;
            margin-top: 90px;
          }
          .notification {
            color: #ab003c;
          }
          .header {
            width: 100%;
            height: 120px;
            background-color: #2196f3;
            margin-bottom: 30px;
            border-radius-top: 6px;
          }
          .wrapper {
            padding: 10px 30px 20px 30px !important;
          }
          a {
            color: blue !important;
          }
          img {
            margin: 15px 30px 10px 50px;
          }
        `}
      </style>
    </Container>
  );
}
