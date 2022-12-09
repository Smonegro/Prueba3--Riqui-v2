import React from "react";
import { useField } from "formik";
import styled from "styled-components";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <ContainerInput>
      <label className="label">{label}</label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}

      <input className="input" {...field} {...props} />
    </ContainerInput>
  );
};

export default Input;

const ContainerInput = styled.div`
  .input {
    flex: 1;
    font: inherit;
    width: 75%;
    padding: 0.6rem 0.7rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    margin-left: 1rem;
    display: block;
  }
  .label {
    flex: 1;
    font: inherit;
    color: black;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
    display: block;
  }

  .input:focus {
    outline: none;
    border-color: blue;
    background: white;
  }

  .error {
    color: red;
    background: #f3f3f3;
    width: 40%;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    margin-left: 35%;
  }
`;
