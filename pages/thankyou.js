import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Buttons from "../components/Buttons";
import FooterCr from "../components/FooterCr";
import Footer from "./../components/Footer";
import BodySection from "./../components/BodySection";

export default function Thankyo() {
  return (
    <Container>
      <Head>
        <title>HNRY ST mzk</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      {/* Header */}
      <Header>
        <LogoLeft>
          <Link href="/">
            <img src="images/hnry_st_logo.svg" alt="" />
          </Link>
        </LogoLeft>
        <LogoRight>
          <img src="images/menu-icon.svg" alt="" />
        </LogoRight>
      </Header>

      {/* Body */}
      <Main>
        <Content>
          <h3>
            <a href="/">Return to HNRY ST</a>
          </h3>
          <h2>Welcome to the HNRY ST mzk Family!</h2>
          <h1>
            Thanks for subscribing to HNRY ST mzk <br /> We will stay in
            touch...
          </h1>
        </Content>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  @font-face {
    font-family: "Release Date";
    src: url("../Neue\ Plak\ Black.ttf") format("truetype");
    font-weight: bold;
  }
`;

const Header = styled.div`
  height: 80px;
  padding: 20px 50px;
  display: flex;
  align-items: center;

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

const Main = styled.div`
  position: relative;

  &:before {
    content: "";
    background: url("images/hero_background.jpg");
    background-position: bottom;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    position: absolute;
    bottom: 0;
    background-size: cover;
  }
`;

const Content = styled.div`
  z-index: 1;
  position: relative;
  padding: 20px 0;
  min-height: 50vh;
  justify-content: center;
  text-align: center;

  h1 {
    color: #00a651;
    font-size: max(4vw, 24px);
    font-family: "Raleway", sans-serif;
  }

  h2 {
    font-size: max(3vw, 20px);
    font-family: "Raleway", sans-serif;
  }

  h3 {
    font-size: max(3vw, 18px);
    font-family: "Raleway", sans-serif;
    text-decoration: underline;
  }
`;
