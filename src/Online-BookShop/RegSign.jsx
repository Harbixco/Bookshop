import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";

function RegSign() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <div className="container-fluid registerContainer">
                <div className="row">
                  <div className="col-md-5 offset-md-5">
                    <div className="register">Register an account</div>
                  </div>
                </div>
              </div>
              <div className="container-fluid registerContainer">
                <div className="row">
                  <div className="col-md-8 offset-md-4">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                      <Form.Label className="email">Email</Form.Label>
                      <Form.Control required type="text" placeholder="Email" />
                      <Form.Control.Feedback type="invalid">
                        Please choose an Email.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                      <Form.Label className="email">Username</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Username"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please choose a Username.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                      <Form.Label className="email">Password</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Password"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please choose a Password.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <div className="buttonholder">
                      <button
                        type="submit"
                        className="btn btnn"
                        style={{
                          backgroundColor: "#254a71",
                          color: "white",
                          marginLeft: "100px",
                          marginTop: "13px",
                        }}
                      >
                        Sign Up
                      </button>
                    </div>

                    <div className="already">
                      Already had an account?
                      <Link to="/#Signin">
                        <button
                          className="btn btnn"
                          style={{ backgroundColor: "#254a71", color: "white" }}
                        >
                          Sign In
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
            <ContactUs />
          </div>
        </div>
      </div>
    </>
  );
}

export default RegSign;
