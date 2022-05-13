import React from "react";
import styled from "styled-components";

function Buttons() {
  return (
    <Container>
      <IconItem>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://open.spotify.com/track/6YAJsx5OV3Oho22qRGaGAl?si=NxO1UGR7TEi8nYJbyC0lVg"
        >
          <img src="../images/logo/spotify.svg" alt="" />
        </a>
      </IconItem>
      <IconItem>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://music.apple.com/au/album/tkmyhrt/1614092711?i=1614092712"
        >
          <img src="../images/logo/apple.svg" alt="" />
        </a>
      </IconItem>

      <IconItem>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://music.amazon.com.au/albums/B09VF56JNB?do=play&trackAsin=B09VF2LYK3&ref=dm_sh_2XaLW0wQ2nEg76RA969MoAcKn"
        >
          <img src="../images/logo/amazon.svg" alt="" />
        </a>
      </IconItem>
      <IconItem>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://deezer.page.link/SF6SboYVGSvHhCnh6"
        >
          <img src="../images/logo/deejar.svg" alt="" />
        </a>
      </IconItem>
      <IconItem>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://tidal.com/album/220556832"
        >
          <img src="../images/logo/tinder.svg" alt="" />
        </a>
      </IconItem>
    </Container>
  );
}

export default Buttons;

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

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 0 18px;
  }
`;
