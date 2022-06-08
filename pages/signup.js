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

      <Headerrr image="../images/bio_horizontal.svg" />
      <Main>
        <Content>
          <h1>SIGN UP</h1>
          <img src="../images/stayup.svg" alt="" className="stayup" />
          <div className="form-container">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
          </div>
          <button className="button-subscribe">Subscribe</button>
          <img src="../images/bepart.svg" alt="" className="bepart" />
        </Content>
      </Main>
      <Footer bio="true" />
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

  h1 {
    font-size: 50px;
  }

  p {
    font-size: 40px;
    margin: 0;
    font-weight: bold;
    text-align: center;
    max-width: 60%;
  }

  .form-container {
    display: grid;
    margin-top: 50px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5%;
    width: 100%;
    max-width: 600px;
    margin-bottom: 30px;
    place-items: center;
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

  .button-subscribe {
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
    &:hover {
      background: #464847;
    }

    &:focus {
      background: #464847;
    }
  }

  .stayup {
    width: 100%;
    max-width: 1000px;
  }

  .bepart {
    width: 90%;
    max-width: 860px;
  }
`;
