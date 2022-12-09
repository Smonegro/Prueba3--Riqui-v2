import React, { useState } from "react";
import { Formik, Form } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import GoogleButton from "react-google-button";
import axios from "axios";

import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

const passwordLength = { min: 6, max: 12 };

const schema = Yup.object().shape({
  first_name: Yup.string()
    .label("First Name")
    .required("This field is Required."),
  last_name: Yup.string()
    .label("Last Name")
    .required("This field is Required."),
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is Required.")
    .label("Email Address"),
  password: Yup.string()
    .label("Password")
    .min(passwordLength.min, "Your password must be at least 6 characters")
    .max(passwordLength.max, "Your password must be less than 12 character")
    .required("This field is Required."),
});

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Card className="register">
      <FormControl>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values) => {
            console.log(values);
            let formData = new FormData();
            formData.append("first_name", values.first_name);
            formData.append("last_name", values.last_name);
            formData.append("email", values.email);
            formData.append("password", values.password);

            axios({
              method: "POST",
              url: "https://afternoon-dawn-41697.herokuapp.com/api/auth/register",
              data: formData,
            })
              .then(function (res) {
                console.log(res);
                alert("Successfully Register in!");
              })
              .catch(function (res) {
                console.log(res);
              });
          }}
        >
          {({ handleSubmit }) => (
            <Form className="control">
              <div style={{ marginTop: "8px" }}>
                <div className="tittle">
                  <label>Register</label>
                </div>
                <Input
                  label="First Name"
                  name="first_name"
                  placeholder="Ricardo "
                  styleWrapper={{ marginTop: "16px" }}
                  type="text"
                />
                <Input
                  label="Last Name"
                  name="last_name"
                  placeholder="Malagon"
                  styleWrapper={{ marginTop: "16px" }}
                  type="text"
                />
                <Input
                  label="Email Address"
                  name="email"
                  placeholder="Ricardo@gmail.com"
                  styleWrapper={{ marginTop: "16px" }}
                  type="email"
                />
                <Input
                  label="Password"
                  name="password"
                  placeholder="Insert your Password"
                  styleWrapper={{ marginTop: "16px" }}
                  type="password"
                />
                <div className="actions">
                  <Button
                    kind="outline"
                    type="submit"
                    onClick={handleSubmit}
                    isLoading={isLoading}
                    disabled={isLoading}
                  >
                    Register
                  </Button>
                </div>
                <GoogleButton
                  clientId="https://www.google.com/"
                  type="light"
                  label="Sign up with Google"
                  className="googlebutton"
                  style={{
                    width: 375,
                    height: 51,
                    fontSize: 15,
                    borderRadius: 5,
                    color: "black",
                    alignContent: "center",
                    border: "1px solid #ACABAB",
                  }}
                  onClick={() => {
                    console.log("Google button clicked");
                  }}
                />
                <div className="footer">
                  Already have a Upnread account?
                  <a href="https://app.upnread.com/login"> Login </a>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </FormControl>
    </Card>
  );
};

export default Register;

const FormControl = styled.div`
  .tittle {
    font-weight: bold;
    flex: 1;
    color: black;
    font-size: 1.25rem;
    margin-top: 0.75rem;
    margin-bottom: 0.4rem;
    margin-left: 10rem;
    display: block;
  }
  .register {
    width: 90%;
    max-width: 40rem;
    margin: 2rem auto;
    padding: 2rem;
  }

  .control {
    margin: 1rem 0;
    display: flex;
    align-items: stretch;
    flex-direction: column;
  }
  .googlebutton {
    margin-top: 1rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
  .centrado {
    align-items: center;
    font: inherit;
  }
  .actions {
    text-align: center;
  }

  .footer {
    margin-top: 1rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }
  @media {
    max-width: 768px;
    min-width: 500px;
    align-items: center;
    flex-direction: row;
  }
`;
