import React from "react";
import styled from "styled-components";
import FooterCr from "./FooterCr";

function Footer() {
  return (
    <Container>
      <a target="_blank" rel="noopener noreferrer" href="mailto:mzk@hnryst.com">
        mzk@hnryst.com
      </a>
      <Instagram>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/hnryst_mzk/"
        >
          <img src="/instagram.svg" alt="" />
        </a>
      </Instagram>
      <FooterCr />
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
