import Head from "next/head";
import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Headerrr from "./../components/Header";
import Footer from "./../components/Footer";

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
        <title>EPK - HNRY ST</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Headerrr />
      <Thumbnail>
        <Wrapper>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/images/1NLV_Cover_Artwork_800.jpg"
          >
            <img src="/images/1NLV_Cover_Artwork_800.jpg" alt="" />
          </a>
        </Wrapper>
      </Thumbnail>

      <ReleaseDateText>
        <span>HNRY ST</span>
        <span>DEBUT RELEASE - 1NLV</span>
        <span>APRIL 1, 2022</span>
      </ReleaseDateText>

      <SoundcloudOne>
        <SoundcloudWraper>
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1191759268&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
          <div className="tes">
            <a
              href="https://soundcloud.com/hnryst"
              title="HNRY ST"
              target="_blank"
              rel="noopener noreferrer"
            >
              HNRY ST
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/hnryst/1nlv"
              title="1NLV"
              target="_blank"
              rel="noopener noreferrer"
            >
              1NLV
            </a>
          </div>
          <div
            className="lyricButton"
            onMouseMove={(e) => {
              lyricHandler(e);
            }}
            onMouseEnter={(e) => {
              setLyric(true);
            }}
            onMouseLeave={() => setLyric(false)}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/images/1NLV_LYRICS.jpg"
            >
              <img src="/images/lyrics_icon.svg" alt="" />
            </a>
          </div>
        </SoundcloudWraper>
      </SoundcloudOne>
      <TextOne>
        <p>
          HNRY ST bursts onto the scene with his thumping, high energy debut...
          1NLV.
        </p>
        <p>
          “It&lsquo;s almost like the song itself knows how big the energy is
          that it offers you breaks throughout so you can catch your breath
          before you go again.”
        </p>
        <p>
          The bass heavy track is sure to feature heavily on DJ setlists and
          playlists everywhere, dragging the listener around wildly as it lifts
          and drops it&lsquo;s way through it&lsquo;s different stages. Not only
          does the bass rumble you into submission, the hook and use of arps &
          versitile synths keep you wanting more.
        </p>

        <p>
          “I remember listening to a lot of Bass House, Future Bass and some
          Electronic & Pop when I was working on this track and so those
          influencers will naturally shine through.”
        </p>
        <p>
          “I couldn&lsquo;t be more excited for this track to finally come out
          and kick start a long line of releases I have in store - I think that
          people are going to like what they hear.”
        </p>
      </TextOne>
      <Avatar>
        <AvatarLeft>
          <a
            href="/images/HNRY_ST_Bio_Profile.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/HNRY_ST_Bio_Profile.jpg" alt="" />
          </a>
        </AvatarLeft>
        <AvatarRight>
          <img src="/images/bio.svg" alt="" />
        </AvatarRight>
      </Avatar>
      <TextTwo>
        <p>
          Leigh Russell, also known as HNRY ST, is an Australian music producer,
          songwriter, artist and owner of label HNRY ST MZK based in Melbourne.
          HNRY ST infuses curiosity and a true love of music into contemporary
          sounds - creating a unique brand that uplifts and inspires. “I want my
          music to be something that people not only enjoy but also seek out.
          For it to really make them feel good about themselves, to create
          memories and experiences that can be shared.”
        </p>

        <p>
          HNRY ST&lsquo;s upcoming debut release, 1NLV, is a new branch of his
          work to bring something fresh to the scene. “I&lsquo;m so excited to
          put this track out into the world. It&lsquo;s, I think, the second or
          third track I worked on as HNRY ST. The build-up and energy in it is
          just crazy, especially when it&lsquo;s played loud AF! Can&lsquo;t
          wait for people to hear it.”
        </p>

        <p>
          “My music is different because it is mine. And by mine, I mean that
          it&lsquo;s music I love, I have an affinity for and could listen to
          all day. I don&lsquo;t make music that I think people will like, or
          what might be popular in a moment of time. My ear naturally gravitates
          to what I like (old and new) and it more often than not creates
          inspiration for my next project.”
        </p>

        <p>
          Having completed an Audio Engineering Course with SAE in 1999 HNRY ST
          has been a bedroom producer tinkering away with beats and ideas ever
          since. He had a short-lived podcast in 2019 (Beatwurx Podcast) where
          he interviewed industry professionals about the music industry from a
          producer standpoint, which proved invaluable for his own production.
          So too has been spending the last 18 months working with incredibly
          talented artists putting a catalogue of music together. In that time
          HNRY ST has learned a lot about collaboration and working with people
          in the industry (the good and the bad). It has been a period of growth
          and discovery of how to stretch himself creatively in terms of not
          only his production but also his songwriting and arrangements.
        </p>
        <p>
          “I truly love how creating music makes me feel. There is something so
          exhilarating about sitting with a pair of headphones on, listening to
          something that you have created. Even if it is only in the early
          stages of a song - a simple chord progression and a quirky synth or a
          funky bass line with a guitar sample and basic beat. When I&lsquo;m
          listening to a song ready for release – it&lsquo;s another level
          again.”
        </p>

        <p>
          Dedication to craft, belief and true enjoyment combines to create an
          incredible amount of excitement and continues to do so no matter how
          many times you listen to HNRY ST&lsquo;s music.
        </p>

        <p>
          “Strangely, I find myself becoming a fan of the music in a weird kind
          of way – like I&lsquo;m separated from it somehow. I have had genuine
          moments when I&lsquo;ve thought to myself “How the F*ck did I put this
          together? It&lsquo;s amazing!”
        </p>

        <p>
          “If it was the last song I ever got to listen to it would be People
          Everyday by Arrested Development. There&lsquo;s no reason why other
          than I just love the track. It has no nostalgic reference, certainly
          doesn&lsquo;t remind me of a person or place or anything significant
          like that, it&lsquo;s just a song that I have always loved.”
        </p>

        <p>
          HNRY ST grew up listening to hip hop, rap and the Red Hot Chili
          Peppers. Being an adolescent of the 90s means he has a massive soft
          spot for hip hop music of that time, and what ensued from then. These
          days he&lsquo;s more of a Pop/EDM fan and his music reflects these
          elements and styles of music.
        </p>

        <p>
          “My all-time favourite band is the Chili Peppers (John Frusciante in
          particular) - they have been since the early 90s so I believe that
          influences from them appear in my music, too.
        </p>

        <p>
          As vanilla as it sounds, when I hear something I like, I am influenced
          by it and often wonder how I can incorporate that into my music
          somehow. It could be the way a chord progression is played, how an
          arrangement is structured or the way a lyric is intertwined throughout
          a song. I&lsquo;ve found that some of the biggest influences have come
          unexpectedly from those that I have worked with. It&lsquo;s amazing to
          hear someone&lsquo;s take on your work which ultimately alters the way
          you hear it yourself.”
        </p>

        <p>
          With a string of releases scheduled for 2022, it&lsquo;s an exciting
          time for HNRY ST MZK!
        </p>
      </TextTwo>
      <SneakPeekWrapper>
        <SneakPeek>
          <img src="/images/sneakpeekfix.svg" alt="" />
        </SneakPeek>
      </SneakPeekWrapper>
      <SoundcloudTwo>
        <iframe
          width="100%"
          height="450"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1191759832&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <div className="tes">
          <a
            href="https://soundcloud.com/hnryst"
            title="HNRY ST"
            target="_blank"
            rel="noopener noreferrer"
          >
            HNRY ST
          </a>{" "}
          ·{" "}
          <a
            href="https://soundcloud.com/hnryst/tkmyhrt"
            title="TKMYHRT"
            target="_blank"
            rel="noopener noreferrer"
          >
            TKMYHRT
          </a>
        </div>
      </SoundcloudTwo>

      <ReleaseDateText>
        <span>TKMYHRT</span>
        <span>APRIL 22, 2022</span>
      </ReleaseDateText>
      <Footer />
      <Lyric src="/images/1NLV_LYRICS.jpg" x={x} y={y} lyric={lyric} />
    </Container>
  );
}

const Container = styled.div`
  @font-face {
    font-family: "Release Date";
    src: url("/Neue\ Plak\ Black.ttf") format("truetype");
    font-weight: bold;
  }
`;

const Lyric = styled.img`
  position: fixed;
  transition: all 100ms;
  border-radius: 10px;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.9;
  ${({ lyric }) => (lyric ? "display:block;" : "display:none;")};

  /* left: ${({ x }) => x && x + "px"};
  top: ${({ y }) => y && y + "px"};
  transform: translate(calc(-100% - 20px), 500px); */
`;

const LyricButton = styled.div`
  margin-left: 10px;
  margin-bottom: 14px;
  background: red;
  width: 40px;
  height: 40px;
  display: block;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
  }
`;

const Header = styled.div`
  display: flex;
  padding: 30px 76px;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 30px 8vw;
  }
  @media (max-width: 426px) {
    padding: 30px 10vw;
  }
`;
const LogoLeft = styled.div`
  display: flex;
  height: 40px;

  @media (max-width: 426px) {
    height: 34px;
  }
  img {
    height: 100%;
  }
`;
const LogoRight = styled.div`
  display: flex;
  height: 40px;

  @media (max-width: 426px) {
    height: 34px;
  }

  img {
    height: 100%;
  }
`;
const Thumbnail = styled.div`
  display: flex;
  padding: 10px 76px;
  justify-content: center;
  position: relative;
  padding-top: 60px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("/images/hero_background.jpg");
    background-position: bottom;
    background-size: contain;
  }
  @media (max-width: 768px) {
    padding: 35px;
  }

  @media (max-width: 426px) {
    padding: 35px 5vw;
  }
  img {
    width: 100%;
    height: 100%;
    box-shadow: 57px 0px 124px rgba(0, 0, 0, 0.77);
  }
`;

const Wrapper = styled.div`
  max-width: 600px;
  z-index: 1;
  @media (max-width: 768px) {
    max-width: 280px;
  }
`;

const ReleaseDate = styled.div`
  display: flex;
  justify-content: center;
  z-index: 10;
  background: gray;
  padding: 50px 50px;

  @media (max-width: 426px) {
    padding: 50px 32px;
  }
  img {
    width: 100%;
    height: 100%;
    max-width: 450px;

    @media (max-width: 768px) {
      max-width: 600px;
    }

    @media (max-width: 426px) {
      max-width: 300px;
    }
  }
`;

const SoundcloudOne = styled.div`
  display: flex;
  margin-bottom: 70px;
  padding: 0 50px;
  justify-content: center;
  position: relative;
  align-items: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SoundcloudWraper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }

  iframe {
    max-width: 600px;
  }
  .tes {
    font-size: 10px;
    color: #cccccc;
    line-break: anywhere;
    word-break: normal;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans,
      Garuda, Verdana, Tahoma, sans-serif;
    font-weight: 100;

    a {
      color: #cccccc;
      text-decoration: none;
    }
  }
`;

const TextOne = styled.div`
  padding: 0 76px;
  @media (max-width: 768px) {
    padding: 0 40px;
  }

  @media (max-width: 426px) {
    padding: 0 18px;
  }
  p {
    font-size: 20px;
    font-family: "Raleway", sans-serif;
    line-height: 1.75rem;

    @media (max-width: 768px) {
      font-size: 30px;
      line-height: 2.25rem;
    }
  }
`;
const Avatar = styled.div`
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  /* align-items: end;
  -webkit-align-items: end; */
  padding: 0 76px;

  @media (max-width: 768px) {
    padding: 0 40px;
  }

  @media (max-width: 426px) {
    padding: 0 18px;
  }
`;
const AvatarLeft = styled.div`
  max-width: 675px;

  display: flex;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const AvatarRight = styled.div`
  max-width: 100px;
  width: 100px;
  min-width: 58px;
  margin-top: auto;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const TextTwo = styled.div`
  padding: 0 76px;
  @media (max-width: 768px) {
    padding: 0 40px;
  }
  @media (max-width: 426px) {
    padding: 0 18px;
  }
  p {
    font-size: 16px;
    line-height: 1.5rem;
    font-family: "Raleway", sans-serif;
    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 1.75rem;
    }
  }
`;

const SneakPeekWrapper = styled.div`
  background-color: #d5353a;
  margin: 100px 0;
  display: flex;
  justify-content: center;
  padding: 40px 40px;
`;
const SneakPeek = styled.div`
  max-width: 900px;
  display: flex;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;
const ReleaseDataTwo = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;

  padding: 50px 50px;

  @media (max-width: 426px) {
    padding: 50px 32px;
  }
  img {
    width: 100%;
    height: 100%;
    max-width: 310px;

    @media (max-width: 768px) {
      max-width: 390px;
    }

    @media (max-width: 426px) {
      max-width: 210px;
    }
  }
`;

const SoundcloudTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0;
  margin-bottom: 100px;
  iframe {
    max-width: 400px;
  }
  .tes {
    font-size: 10px;
    color: #cccccc;
    line-break: anywhere;
    word-break: normal;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans,
      Garuda, Verdana, Tahoma, sans-serif;
    font-weight: 100;

    a {
      color: #cccccc;
      text-decoration: none;
    }
  }
`;

const ReleaseDateText = styled.div`
  font-family: "Release Date";
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 44px;
  padding: 50px 0;

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
