import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <a href="mailto:mzk@hnryst.com">mzk@hnryst.com</a>
      <Instagram>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/hnryst_mzk/"
        >
          <img src="/instagram.svg" alt="" />
        </a>
      </Instagram>
      <Copyright>
        <img src="/images/1NLV.svg" alt="" /> <span>©2022 HNRY ST mzk</span>
      </Copyright>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;

  a {
    font-size: 30px;

    @media (max-width: 426px) {
      font-size: 14px;
    }
  }
`;

const Instagram = styled.div`
  margin-top: 20px;
  img {
    width: 40px;
  }
`;
const Copyright = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-top: 100px;
  }
  img {
    width: 20px;
    margin-right: 10px;
    @media (max-width: 768px) {
      width: 10px;
    }
  }

  span {
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;
