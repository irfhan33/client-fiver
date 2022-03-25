import React from "react";
import styled from "styled-components";
import Headerrr from "../components/Header";
import Head from "next/head";
import Footer from "./../components/Footer";

function Dlp() {
  return (
    <Container>
      <Head>
        <title>DLP Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headerrr />
      <Content>
        <Title>
          <span>HNRY ST mzk</span>
          <span>DIRECT LICENSING POLICY</span>
        </Title>
        <ul>
          <li>
            <Number>1.</Number>
            <p>Our direct licensing policy</p>
          </li>
          <li>
            <Number>1.1.</Number>
            <p>
              This is direct licensing policy of HNRY ST mzk (we/us/our). At
              present we do not have the capacity to directly licensing any of
              our sound recordings or music videos for public performance of
              communication.
            </p>
          </li>
          <li>
            <Number>1.2.</Number>
            <p>
              Given the legal and administrative costs involved with direct
              licensing we are unable to offer direct licenses at competitive
              rates for public performance or transmission. We will review our
              position every 12 months to consider whether the size and skill
              base of our organisation enables us to engage in direct licensing.
            </p>
          </li>
          <li>
            <Number>1.3.</Number>
            <p>
              In the meantime, if you require a licence for the public
              performance of one of our sound recordings or music videos you
              should contact OneMusic Australia through the website
              <a href=""> http://onemusic.com.au</a> or call{" "}
              <a href="">1300 162 162</a>. If you require a licence for the
              communication of one of our sound recordings or music videos, you
              should contact the Phonographic Performance Company of Australia
              (PPCA) at <a href="">www.ppca.com.au</a> or by calling{" "}
              <a href="">(02) 8569-1100</a>.
            </p>
          </li>
          <li>
            <Number>1.4.</Number>
            <p>
              If you wish to provide any feedback or commanets on our direct
              licensing policy, please email <a href="">mzk@hnryst.com</a>. You
              are also welcome to email us to enquire about licensing one of our
              sound recordings for a use that is not covered by a PPCA license.
              Such uses may include but are not limited to:
            </p>
          </li>
          <span>
            a{")"} Including my sound recordings on compilation; and/or
          </span>
          <span>
            b{")"} Synchronising my sound recordings for film or telivision
          </span>
        </ul>
      </Content>
      <Footer />
    </Container>
  );
}

export default Dlp;

const Container = styled.div`
  @font-face {
    font-family: "Release Date";
    src: url("/Neue\ Plak\ Black.ttf") format("truetype");
    font-weight: bold;
  }
`;
const Content = styled.div`
  padding: 0 50px;
  background: url("/images/hero_background.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100% 70%;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;

    li {
      display: flex;

      p {
        font-size: 20px;
        font-family: "Raleway", sans-serif;
        line-height: 1.75rem;
        a {
          color: red;
        }
      }
    }

    span {
      font-size: 20px;
      font-family: "Raleway", sans-serif;
      line-height: 1.75rem;
      margin-left: 50px;
    }
  }
`;
const Title = styled.div`
  font-family: "Release Date";
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 44px;
  padding: 30px 0;

  @media (max-width: 560px) {
    font-size: 36px;
  }
  @media (max-width: 460px) {
    font-size: 30px;
  }
  @media (max-width: 400px) {
    font-size: 28px;
  }
  @media (max-width: 350px) {
    font-size: 24px;
  }
  span {
    margin-top: -9px;
  }
`;

const Number = styled.p`
  margin-right: 10px;
  min-width: 30px;
`;
