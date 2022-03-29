import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import FooterCr from "../components/FooterCr";
// import Footer from "./../components/Footer";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>HNRY ST - Streaming Now</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header>
        <LogoLeft>
          <img src="images/hnry_st_logo.svg" alt="" />
        </LogoLeft>
        <LogoRight>
          <img src="images/1NLV_BIG.svg" alt="" />
        </LogoRight>
      </Header>
      <Main>
        <Content>
          <Left>
            <Thumbnail>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="images/1NLV_Cover_Artwork_800.jpg"
              >
                <img src="images/1NLV_Cover_Artwork_800.jpg" alt="" />
              </a>
            </Thumbnail>
          </Left>
          <Right>
            <LogoOne>
              <img src="images/1NLV_BIG.svg" alt="" />
            </LogoOne>
            <LogoTwo>
              <img src="images/listennow.svg" alt="" />
            </LogoTwo>
            <Buttons>
              <IconItem>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://open.spotify.com/track/48udc7ntfemQCa8dpPIWD1?si=28e11d0fb26f40e0"
                >
                  <img src="images/logo/spotify.svg" alt="" />
                </a>
              </IconItem>
              <IconItem>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://music.apple.com/zw/album/sandwich-bag/1608450855?i=1608450872"
                >
                  <img src="images/logo/apple.svg" alt="" />
                </a>
              </IconItem>

              <IconItem>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://music.amazon.com.au/albums/B09RMN8Q99?marketplaceId=A15PK738MTQHSO&musicTerritory=AU&ref=dm_sh_5v7OQ8oC4n8YhC4Hyb4nQXjBW&trackAsin=B09RMZZ5RH"
                >
                  <img src="images/logo/amazon.svg" alt="" />
                </a>
              </IconItem>
              <IconItem>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://deezer.page.link/zbMxqvPbNFh9yYY76"
                >
                  <img src="images/logo/deejar.svg" alt="" />
                </a>
              </IconItem>
              <IconItem>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://tidal.com/browse/track/17311361"
                >
                  <img src="images/logo/tinder.svg" alt="" />
                </a>
              </IconItem>
            </Buttons>
          </Right>
        </Content>
      </Main>
      <Footer>
        <a href="mailto:mzk@hnryst.com">mzk@hnryst.com</a>
        <WrapperLogo>
          <Instagram>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/hnryst_mzk/"
            >
              <img src="instagram.svg" alt="" />
            </a>
          </Instagram>
          <BioFooter>
            <Link href="bio">
              <img src="images/bio_footer_4x.png" alt="" />
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

  img {
    width: 45px;
    object-fit: contain;
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
  }
`;

const BioFooter = styled(Instagram)`
  margin-left: 10px;
  cursor: pointer;
`;
const Container = styled.div``;
const Header = styled.div`
  height: 80px;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 20px 14vw;
  }
`;

const LogoLeft = styled.div`
  display: flex;
  max-height: 40px;
  width: 100%;
  justify-content: center;
  img {
    height: 100%;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;

    max-height: 28px;
  }
`;
const LogoRight = styled.div`
  display: none;
  max-height: 40px;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  @media (max-width: 768px) {
    margin-left: auto;
    display: flex;
    max-height: 28px;
  }

  img {
    height: 100%;
    margin-left: auto;
    display: block;
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
  width: 50%;
  img {
    width: 100%;
    height: 100%;
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

const Copyright = styled.div`
  display: flex;
  align-items: center;
  /* gap: 10px; */
  margin-top: 40px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
  img {
    width: 20px;
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

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  /* gap: 20px; */
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 18px;
    padding-top: 0;
  }
`;
