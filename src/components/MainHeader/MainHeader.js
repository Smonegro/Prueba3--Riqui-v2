import React from "react";
import styled from "styled-components";

const MainHeader = (props) => {
  return (
    <Tittle>
      <div>
        <img
          className="img"
          src="https://upnread.com/_next/static/images/logo-ab7c6c45653b38116341ed6df15bc549.svg"
          alt=""
        />
      </div>

      <div IsRegister={props.isAuthenticated} />
    </Tittle>
  );
};

export default MainHeader;

const Tittle = styled.div`
  position: fixed;
  top: 3rem;
  bottom: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  background: white;
  padding: 0rem 3rem 2rem;

  .img {
    box-sizing: border-box;
    margin-top: 15%;
    margin-bottom: 10%;
    margin-left: 55%;
    width: 35%;
  }
`;
