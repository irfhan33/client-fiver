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
        <title>BIO - HNRY ST</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Headerrr />
      <Main>
        <Content>
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
              <a
                href="http://hnryst.com/bio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/bio.svg" alt="" />
              </a>
            </AvatarRight>
          </Avatar>
          <TextTwo>
            <p>
              Leigh Russell, also known as HNRY ST, is an Australian music
              producer, songwriter, artist and owner of label HNRY ST MZK based
              in Melbourne. HNRY ST infuses curiosity and a true love of music
              into contemporary sounds - creating a unique brand that uplifts
              and inspires. “I want my music to be something that people not
              only enjoy but also seek out. For it to really make them feel good
              about themselves, to create memories and experiences that can be
              shared.”
            </p>

            <p>
              HNRY ST&lsquo;s upcoming debut release, 1NLV, is a new branch of
              his work to bring something fresh to the scene. “I&lsquo;m so
              excited to put this track out into the world. It&lsquo;s, I think,
              the second or third track I worked on as HNRY ST. The build-up and
              energy in it is just crazy, especially when it&lsquo;s played loud
              AF! Can&lsquo;t wait for people to hear it.”
            </p>

            <p>
              “My music is different because it is mine. And by mine, I mean
              that it&lsquo;s music I love, I have an affinity for and could
              listen to all day. I don&lsquo;t make music that I think people
              will like, or what might be popular in a moment of time. My ear
              naturally gravitates to what I like (old and new) and it more
              often than not creates inspiration for my next project.”
            </p>

            <p>
              Having completed an Audio Engineering Course with SAE in 1999 HNRY
              ST has been a bedroom producer tinkering away with beats and ideas
              ever since. He had a short-lived podcast in 2019 (Beatwurx
              Podcast) where he interviewed industry professionals about the
              music industry from a producer standpoint, which proved invaluable
              for his own production. So too has been spending the last 18
              months working with incredibly talented artists putting a
              catalogue of music together. In that time HNRY ST has learned a
              lot about collaboration and working with people in the industry
              (the good and the bad). It has been a period of growth and
              discovery of how to stretch himself creatively in terms of not
              only his production but also his songwriting and arrangements.
            </p>
            <p>
              “I truly love how creating music makes me feel. There is something
              so exhilarating about sitting with a pair of headphones on,
              listening to something that you have created. Even if it is only
              in the early stages of a song - a simple chord progression and a
              quirky synth or a funky bass line with a guitar sample and basic
              beat. When I&lsquo;m listening to a song ready for release –
              it&lsquo;s another level again.”
            </p>

            <p>
              Dedication to craft, belief and true enjoyment combines to create
              an incredible amount of excitement and continues to do so no
              matter how many times you listen to HNRY ST&lsquo;s music.
            </p>

            <p>
              “Strangely, I find myself becoming a fan of the music in a weird
              kind of way – like I&lsquo;m separated from it somehow. I have had
              genuine moments when I&lsquo;ve thought to myself “How the F*ck
              did I put this together? It&lsquo;s amazing!”
            </p>

            <p>
              “If it was the last song I ever got to listen to it would be
              People Everyday by Arrested Development. There&lsquo;s no reason
              why other than I just love the track. It has no nostalgic
              reference, certainly doesn&lsquo;t remind me of a person or place
              or anything significant like that, it&lsquo;s just a song that I
              have always loved.”
            </p>

            <p>
              HNRY ST grew up listening to hip hop, rap and the Red Hot Chili
              Peppers. Being an adolescent of the 90s means he has a massive
              soft spot for hip hop music of that time, and what ensued from
              then. These days he&lsquo;s more of a Pop/EDM fan and his music
              reflects these elements and styles of music.
            </p>

            <p>
              “My all-time favourite band is the Chili Peppers (John Frusciante
              in particular) - they have been since the early 90s so I believe
              that influences from them appear in my music, too.
            </p>

            <p>
              As vanilla as it sounds, when I hear something I like, I am
              influenced by it and often wonder how I can incorporate that into
              my music somehow. It could be the way a chord progression is
              played, how an arrangement is structured or the way a lyric is
              intertwined throughout a song. I&lsquo;ve found that some of the
              biggest influences have come unexpectedly from those that I have
              worked with. It&lsquo;s amazing to hear someone&lsquo;s take on
              your work which ultimately alters the way you hear it yourself.”
            </p>

            <p>
              With a string of releases scheduled for 2022, it&lsquo;s an
              exciting time for HNRY ST MZK!
            </p>
          </TextTwo>
        </Content>
      </Main>
      <Footer bio="true" />
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

const Main = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 60px;

  @media (max-width: 768px) {
    padding-top: 35px;
  }

  @media (max-width: 426px) {
    padding-top: 35px;
  }
  &:before {
    content: "";
    background: url("images/hero_background.jpg");
    background-position: top;
    left: 0;
    right: 0;
    top: 0;
    z-index: -1;
    position: absolute;
    bottom: 0;
    background-repeat: no-repeat;

    @media (max-width: 768px) {
      bottom: 47%;
    }

    @media (max-width: 426px) {
      bottom: 47%;
    }
  }
`;

const Content = styled.div`
  z-index: 99;
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
