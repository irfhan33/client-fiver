import React from "react";
import styled from "styled-components";

function Buttons({ spotify, apple, amazon, deezer, tidal }) {
  return (
    <ButtonsContainer>
      <IconItem>
        <a target="_blank" rel="noopener noreferrer" href={spotify}>
          <img src="../images/logo/spotify.svg" alt="" />
        </a>
      </IconItem>
      <IconItem>
        <a target="_blank" rel="noopener noreferrer" href={apple}>
          <img src="../images/logo/apple.svg" alt="" />
        </a>
      </IconItem>

      <IconItem>
        <a target="_blank" rel="noopener noreferrer" href={amazon}>
          <img src="../images/logo/amazon.svg" alt="" />
        </a>
      </IconItem>
      <IconItem>
        <a target="_blank" rel="noopener noreferrer" href={deezer}>
          <img src="../images/logo/deejar.svg" alt="" />
        </a>
      </IconItem>
      <IconItem>
        <a target="_blank" rel="noopener noreferrer" href={tidal}>
          <img src="../images/logo/tinder.svg" alt="" />
        </a>
      </IconItem>
    </ButtonsContainer>
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

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 0 18px;
  }
`;
