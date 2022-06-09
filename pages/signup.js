import Head from "next/head";
import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Headerrr from "./../components/Header";
import Footer from "./../components/Footer";
import Link from "next/link";

export default function Epk() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [lyric, setLyric] = useState(false);

  const lyricHandler = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  return (
    <Container>
      <Head>
        <title>BIO - HNRY ST</title>
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

      <Main>
        <Content>
          <img src="../images/signup.svg" alt="" className="signup" />
          <img src="../images/stayup.svg" alt="" className="stayup" />
          <FormContainer
            action="https://hnryst.us18.list-manage.com/subscribe/post?u=2b312dd30f5f08967adcaf504&amp;id=7d8fea2616"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
          >
            <FieldContainer>
              <input
                placeholder="Name"
                type="text"
                name="FNAME"
                className=""
                id="mce-FNAME"
              />
              <input
                placeholder="Email"
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
              />
            </FieldContainer>
            <ButtonSubscribe
              className="button-subscribe"
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
            >
              Subscribe
            </ButtonSubscribe>
          </FormContainer>

          <img src="../images/bepart.svg" alt="" className="bepart" />
        </Content>
      </Main>
      <Footer bio="true" hideform />
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

const Main = styled.div`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  padding-top: 35px;

  @media (max-width: 768px) {
    padding-top: 35px;
  }

  @media (max-width: 426px) {
    padding-top: 35px;
  }
  &:before {
    content: "";
    background: url("../images/hero_background.jpg");
    background-position: top;
    left: 0;
    right: 0;
    top: 0;
    z-index: -1;
    position: absolute;
    bottom: 0;
    background-repeat: no-repeat;

    /* @media (max-width: 768px) {
      bottom: 47%;
    }

    @media (max-width: 426px) {
      bottom: 47%;
    } */
  }
`;

const Content = styled.div`
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 76px;

  @media (max-width: 768px) {
    padding: 0 40px;
  }

  @media (max-width: 426px) {
    padding: 0 18px;
  }

  p {
    font-size: 40px;
    margin: 0;
    font-weight: bold;
    text-align: center;
    max-width: 60%;
  }

  .stayup {
    width: 100%;
    max-width: 1000px;
  }

  .bepart {
    width: 90%;
    max-width: 860px;
  }

  .signup {
    height: 36px;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      height: 28px;
    }
  }
`;
const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonSubscribe = styled.button`
  background: #00a651;
  border: none;
  color: white;
  font-size: 16px;
  padding: 12px 14px;
  width: 100%;
  max-width: 300px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: semibold;
  cursor: pointer;
  transition: all 250ms;
  margin-bottom: 50px;
  text-align: center;
  &:hover {
    background: #464847;
  }

  &:focus {
    background: #464847;
  }
`;

const FieldContainer = styled.div`
  display: grid;
  margin-top: 50px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  width: 100%;
  max-width: 600px;
  margin-bottom: 30px;
  place-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-bottom: 5%;
    grid-gap: 5%;
  }

  input {
    padding: 12px 14px;
    border-radius: 4px;
    border: none;
    width: 100%;
    max-width: 400px;
    font-size: 14px;
    &:focus {
      outline: none;
    }
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
