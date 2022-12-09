import React from "react";
import styled from "styled-components";

const Button = ({ children, isLoading, onClick, ...props }) => {
  return (
    <ButtonContainer
      disabled={props.disabled || false}
      onClick={() => !props.disabled && onClick && onClick()}
      {...props}
    >
      <>
        {isLoading ? (
          <div className="spinner">
            <div>Cargando...</div>
          </div>
        ) : (
          children
        )}
      </>
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button`
  border: ${(props) =>
    props.disabled ? "1px solid #ccc" : "1px solid #184BC2"};

  background: ${(props) => (props.disabled ? "#ccc" : "#184BC2")};

  color: ${(props) => (props.disabled ? "#666666" : "white")};

  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  opacity: ${(props) => (props.disabled ? "0.7" : 1)};

  font-size: 3rem;
  width: 75%;
  border-radius: 5px;
  margin-top: 1rem;
  padding: 0.75rem 7.5rem;
  margin-left: 1rem;
  display: block;
  font: inherit;
  .button:focus {
    outline: none;
  }

  .spinner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
