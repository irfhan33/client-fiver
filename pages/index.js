import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>HNRY ST - Streaming Now</title>
        <link rel="icon" href="/images/hnry_st_logo.svg" />
      </Head>
      <Header>
        <img src="/images/hnry_st_logo.svg" alt="" />
        <LogoNavbar src="/images/1NLV_BIG.svg" alt="" />
      </Header>
      <Main>
        {/* <BackgroundImage>
          <img src="/images/hero_background.jpg" alt="" />
        </BackgroundImage> */}
        <Content>
          <Left>
            <Thumbnail>
              <img src="/images/1NLV_Cover_Artwork_800.jpg" alt="" />
            </Thumbnail>
          </Left>
          <Right>
            <LogoOne>
              <img src="/images/1NLV_BIG.svg" alt="" />
            </LogoOne>
            <LogoTwo>
              <img src="images/listennow.svg" alt="" />
            </LogoTwo>
            <WrapperIco>
              <Icons>
                <IconItem>
                  <a
                    rel="noopener"
                    href="https://music.apple.com/zw/album/sandwich-bag/1608450855?i=1608450872"
                  >
                    <img src="images/logo/apple.svg" alt="" />
                  </a>
                </IconItem>
                <IconItem>
                  <a
                    rel="noopener"
                    href="https://open.spotify.com/track/48udc7ntfemQCa8dpPIWD1?si=28e11d0fb26f40e0"
                  >
                    <img src="images/logo/spotify.svg" alt="" />
                  </a>
                </IconItem>
                <IconItem>
                  <a
                    rel="noopener"
                    href="https://music.amazon.com.au/albums/B09RMN8Q99?marketplaceId=A15PK738MTQHSO&musicTerritory=AU&ref=dm_sh_5v7OQ8oC4n8YhC4Hyb4nQXjBW&trackAsin=B09RMZZ5RH"
                  >
                    <img src="images/logo/amazon.svg" alt="" />
                  </a>
                </IconItem>
              </Icons>
              <IconRowTwo>
                <IconItem>
                  <a
                    rel="noopener"
                    href="https://deezer.page.link/zbMxqvPbNFh9yYY76"
                  >
                    <img src="images/logo/deejar.svg" alt="" />
                  </a>
                </IconItem>
                <IconItem>
                  <a
                    rel="noopener"
                    href="https://tidal.com/browse/track/17311361"
                  >
                    <img src="images/logo/tinder.svg" alt="" />
                  </a>
                </IconItem>
              </IconRowTwo>
            </WrapperIco>
          </Right>
        </Content>
      </Main>
      <Footer>
        <a href="">mzk@hnryst.com</a>
        <Copyright>
          <img src="images/1NLV.svg" alt="" /> <span>©2022 HNRY ST mzk</span>
        </Copyright>
      </Footer>
    </Container>
  );
}

const Container = styled.div``;
const Header = styled.div`
  height: 80px;
  padding: 20px 60px;
  display: flex;

  img {
    width: 100%;
    @media (max-width: 768px) {
      width: 20%;
      height: 100%;
    }
  }
`;

const LogoNavbar = styled.img`
  display: none;
  margin-left: auto;
  @media (max-width: 768px) {
    display: block;
    width: 13% !important;
  }
`;

const Main = styled.div`
  position: relative;
  /* padding: 50px; */
  /* display: flex; */
  /* align-items: center; */
  /* gap: 50px; */

  &:before {
    content: "";
    background: url("images/hero_background.jpg");
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    position: absolute;
    bottom: 0;

    @media (max-width: 768px) {
      bottom: 50%;
      /* bottom: 95vw; */
    }
  }
`;

const Left = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;
const Thumbnail = styled.div`
  img {
    width: 100%;
    height: 100%;
    box-shadow: 57px 52px 124px rgba(0, 0, 0, 0.77);
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
  width: 60%;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 120%;
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
  }
`;

const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  justify-content: center;
  align-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const IconItem = styled.div`
  overflow: hidden;
  cursor: pointer;
  transition: all 250ms;
  /* background: gray; */
  border: 2px solid white;
  border-radius: 4px;
  text-align: center;
  justify-content: center;

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

const Content = styled.div`
  z-index: 1;
  position: relative;
  padding: 50px;
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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

const IconRowTwo = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, minmax(0, 220px));
  justify-content: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const WrapperIco = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
`;
