import React from "react";
import styled from "styled-components";

function Headerrr({ image }) {
  return (
    <Header>
      <LogoLeft>
        <img src={image} alt="" />
      </LogoLeft>
      <LogoRight>
        <a href="http://hnryst.com">
          <img src="../images/hnry_st_logo.svg" alt="" />
        </a>
      </LogoRight>
    </Header>
  );
}

export default Headerrr;

const Header = styled.div`
  height: 80px;
  padding: 20px 50px;
  display: flex;
  /* justify-content: space-between; */
  @media (max-width: 768px) {
    /* justify-content: space-between; */
    padding: 20px 14vw;
  }
`;

const LogoLeft = styled.div`
  flex: 1;
  max-height: 40px;
  position: relative;
  /* width: 100%; */
  /* justify-content: flex-start; */
  img {
    /* width: 100%; */
    height: 100%;
    width: auto;
    margin-right: 100%;
    display: block;
    position: absolute;
    left: 0;
  }

  @media (max-width: 768px) {
    /* justify-content: flex-start; */
    max-height: 28px;
  }
`;
const LogoRight = styled.div`
  max-height: 40px;
  flex: 1;
  /* width: 100%; */
  /* justify-content: flex-end; */
  position: relative;
  img {
    height: 100%;
    width: auto;
    margin-left: 100%;
    /* margin-left: auto; */
    display: block;
    position: absolute;
    right: 0;
  }

  @media (max-width: 768px) {
    /* margin-left: auto; */
    max-height: 28px;
  }
`;
