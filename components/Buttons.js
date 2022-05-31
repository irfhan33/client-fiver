import React from "react";
import styled from "styled-components";

function Buttons() {
  return (
    <Container>
      <IconItem>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://open.spotify.com/track/12ydgoE7GNRn2U9bq0miqa?si=52fYFRNlQOaSFVz-8TmwvA"
        >
          <img src="../images/logo/spotify.svg" alt="" />
        </a>
      </IconItem>
      <IconItem>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://music.apple.com/au/album/dnt-feat-dorah/1617824114?i=1617824115"
        >
          <img src="../images/logo/apple.svg" alt="" />
        </a>
      </IconItem>

      <IconItem>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://music.amazon.com.au/albums/B09X7CS14V?do=play&trackAsin=B09X7CDQ4G&ref=dm_sh_rhUtrXXQJXAillgrFBgLjtb6w"
        >
          <img src="../images/logo/amazon.svg" alt="" />
        </a>
      </IconItem>
      <IconItem>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://deezer.page.link/P1ARZx2d3Qu2qNES9"
        >
          <img src="../images/logo/deejar.svg" alt="" />
        </a>
      </IconItem>
      <IconItem>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://tidal.com/track/223792541"
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
