import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Footer from "./../components/Footer";
import Link from "next/link";

function Dlp() {
  return (
    <Container>
      <Head>
        <title>HNRY ST - Direct Licensing Policy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header>
        <LogoLeft>
          <Link href="/">
            <img src="../images/hnry_st_logo.svg" alt="" />
          </Link>
        </LogoLeft>
        <LogoRight>
          <img src="../images/menu-icon.svg" alt="" />
        </LogoRight>
      </Header>

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
              This is the direct licensing policy of HNRY ST mzk (we/us/our). At
              present we do not have the capacity to directly license any of our
              sound recordings or music videos for public performance or
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://onemusic.com.au"
              >
                {" "}
                https://onemusic.com.au
              </a>{" "}
              or call{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="tel:1300 162 162"
              >
                1300 162 162
              </a>
              . If you require a licence for the communication of one of our
              sound recordings or music videos, you should contact the
              Phonographic Performance Company of Australia (PPCA) at{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ppca.com.au"
              >
                www.ppca.com.au
              </a>{" "}
              or by calling{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="tel:(02) 8569-1100"
              >
                (02) 8569-1100
              </a>
              .
            </p>
          </li>
          <li>
            <Number>1.4.</Number>
            <p>
              If you wish to provide any feedback or comments on our direct
              licensing policy, please email{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:mzk@hnryst.com"
              >
                mzk@hnryst.com
              </a>
              . You are also welcome to email us to enquire about licensing one
              of our sound recordings for a use that is not covered by a PPCA
              license. Such uses may include but are not limited to:
            </p>
          </li>
          <span>
            a{")"} Including our sound recordings on a compilation; and/or
          </span>
          <span>
            b{")"} synchronising our sound recordings for film or television.
          </span>
        </ul>
      </Content>
      <Footer />
    </Container>
  );
}

export default Dlp;

const Header = styled.div`
  height: 80px;
  padding: 20px 50px;
  display: flex;
  align-items: center;
  /* @media (max-width: 768px) {
  padding: 20px 14vw;
} */
  @media (max-width: 768px) {
    padding: 20px 40px;
  }

  @media (max-width: 426px) {
    padding: 20px 18px;
  }
`;

const LogoLeft = styled.div`
  flex: 1;
  height: 40px;
  position: relative;
  cursor: pointer;

  img {
    height: 100%;
    margin: 0 auto;
    display: flex;
  }

  @media (max-width: 768px) {
    max-height: 28px;

    img {
      margin: 0;
      position: absolute;
      left: 0;
    }
  }
`;
const LogoRight = styled.div`
  height: 40px;
  flex: 1;
  position: relative;
  display: none;

  img {
    height: 100%;
    margin-left: 100%;
    display: block;
    position: absolute;
    right: 0;
  }

  @media (max-width: 768px) {
    max-height: 34px;
    display: block;
    cursor: pointer;
  }
`;

const Container = styled.div`
  @font-face {
    font-family: "Release Date";
    src: url("../Neue\ Plak\ Black.ttf") format("truetype");
    font-weight: bold;
  }
`;
const Content = styled.div`
  /* background-size: contain; */
  position: relative;
  z-index: 99;
  &:before {
    content: "";
    background: url("../images/hero_background.jpg");
    background-position: bottom;
    left: 0;
    right: 0;
    top: 0;
    z-index: -1;
    position: absolute;
    bottom: 30%;
    @media (max-width: 768px) {
      bottom: 47%;
    }

    @media (max-width: 426px) {
      bottom: 47%;
    }
  }
  padding: 0 76px;
  @media (max-width: 768px) {
    padding: 0 40px;
  }

  @media (max-width: 426px) {
    padding: 0 18px;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    li {
      display: flex;

      p {
        font-size: 20px;
        font-family: "Raleway", sans-serif;
        line-height: 1.75rem;

        @media (max-width: 768px) {
          font-size: 20px;
          line-height: 1.75rem;
        }
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
  padding-bottom: 10px;
  white-space: nowrap;
  @media (max-width: 620px) {
    font-size: 36px;
  }
  @media (max-width: 560px) {
    font-size: 32px;
  }
  @media (max-width: 472px) {
    font-size: 30px;
  }
  @media (max-width: 447px) {
    font-size: 26px;
  }
  @media (max-width: 350px) {
    font-size: 24px;
  }
  /* span {
    margin-top: -9px;
  } */
`;

const Number = styled.p`
  margin-right: 10px;
  min-width: 30px;
`;
