import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import FooterCr from "../components/FooterCr";
// import Footer from "./../components/Footer";
import BodySection from "./../components/BodySection";

export default function NLV() {
  return (
    <Container>
      <Head>
        <title>1NLV - HNRY ST</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      {/* Header */}
      <Header>
        <LogoLeft>
          <img src="../images/hnry_st_logo.svg" alt="" />
        </LogoLeft>
        <LogoRight>
          <img src="../images/1NLV_BIG.svg" alt="" />
        </LogoRight>
      </Header>

      {/* Body */}
      <Main>
        <Content>
          {/* Thumbnail */}
          <Left>
            <Thumbnail>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="../images/1NLV_Cover_Artwork_800.jpg"
              >
                <img src="../images/1NLV_Cover_Artwork_800.jpg" alt="" />
              </a>
            </Thumbnail>
          </Left>

          {/* Links */}
          <Right>
            <LogoOne>
              <img src="../images/1NLV_BIG.svg" alt="" />
            </LogoOne>
            <LogoTwo>
              <img src="../images/listennow.svg" alt="" />
            </LogoTwo>
            <Buttons>
              <IconItem>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://open.spotify.com/track/687mUHJYFyCngYReM7ErFM?si=ffe40bd641964032"
                >
                  <img src="../images/logo/spotify.svg" alt="" />
                </a>
              </IconItem>
              <IconItem>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://music.apple.com/au/album/1nlv/1611882689?i=1611882690"
                >
                  <img src="../images/logo/apple.svg" alt="" />
                </a>
              </IconItem>

              <IconItem>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://music.amazon.com.au/albums/B09TH1FMS7?do=play&trackAsin=B09TH3NB6N&ref=dm_sh_cQRV9wgYktBn3dbPGXuU1IEhd"
                >
                  <img src="../images/logo/amazon.svg" alt="" />
                </a>
              </IconItem>
              <IconItem>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://deezer.page.link/BgDE9CRy3k9gQFSw6"
                >
                  <img src="../images/logo/deejar.svg" alt="" />
                </a>
              </IconItem>
              <IconItem>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://tidal.com/track/218398797"
                >
                  <img src="../images/logo/tinder.svg" alt="" />
                </a>
              </IconItem>
            </Buttons>
          </Right>
        </Content>
      </Main>

      <BodySection
        image="../images/TKMYHRT_Cover_Artwork_v6.jpg"
        titleImage="../images/TKMYHRT_BIG.svg"
        destination="/"
      />
      {/* Footer */}
      <Footer>
        <a href="mailto:mzk@hnryst.com">mzk@hnryst.com</a>
        <WrapperLogo>
          <Instagram>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/hnryst_mzk/"
            >
              <img src="../instagram.svg" alt="" />
            </a>
          </Instagram>
          <BioFooter>
            <Link href="bio">
              <img src="../images/test.png" alt="" />
            </Link>
          </BioFooter>
        </WrapperLogo>
        <FooterCr home="true" />
      </Footer>
      {/* <Footer /> */}
    </Container>
  );
}

const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
`;

const Instagram = styled.div`
  margin-top: 20px;
  margin-right: 10px;
  width: 40px;
  height: 40px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const BioFooter = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  cursor: pointer;
  margin-right: 10px;
  width: 40px;
  height: 40px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

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
  max-height: 40px;
  position: relative;

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
  max-height: 40px;
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
    max-height: 28px;
    display: block;
  }
`;

const Main = styled.div`
  position: relative;

  &:before {
    content: "";
    background: url("../images/hero_background.jpg");
    background-position: bottom;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    position: absolute;
    bottom: 0;

    @media (max-width: 768px) {
      bottom: 47%;
    }

    @media (max-width: 426px) {
      bottom: 47%;
    }
  }
`;

const Content = styled.div`
  z-index: 1;
  position: relative;
  padding: 50px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 14vw;
    padding-bottom: 0;
  }
`;

const Left = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Thumbnail = styled.div`
  margin-top: 14px;
  img {
    width: 85%;
    height: 100%;
    box-shadow: 57px 52px 124px rgba(0, 0, 0, 0.77);

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
const LogoOne = styled.div`
  /* width: 50%; */
  height: 120px !important;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const LogoTwo = styled.div`
  margin-top: 30px;
  margin-bottom: 18px;
  width: 50%;
  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 60%;
    margin-top: 23px;
    margin-bottom: 21px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  flex-direction: column;
  align-items: center;
  a {
    font-size: 30px;
    align-items: center;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  @media (max-width: 768px) {
    padding: unset;
    margin-top: 20px;
  }
`;

const IconItem = styled.div`
  overflow: hidden;
  transition: all 250ms;
  border: 2px solid white;
  border-radius: 4px;
  text-align: center;
  justify-content: center;
  flex: 0 0 calc(30%);
  justify-content: center;
  text-align: center;
  display: flex;
  align-items: center;
  margin: 8px;

  @media (max-width: 768px) {
    flex: unset;
  }
  &:hover {
    background: white;
    border: transparent;
  }
  img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: all 250ms;
    filter: invert(100%);

    &:hover {
      filter: invert(0);
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 0 18px;
  }
`;
