import React from "react";
import styled from "styled-components";
import Link from "next/link";

function BodySection({ image, title, destination }) {
  return (
    <Container>
      <More>MORE BY HNRY ST</More>
      <MoreImage>
        <Link href={destination}>
          <img src={image} alt="" />
        </Link>
      </MoreImage>
      <Link href={destination}>
        <TitleMore nlv={title === "1NLV" ? true : false} className="title-more">
          {title}
        </TitleMore>
      </Link>
      <Listen>LISTEN NOW</Listen>
    </Container>
  );
}

export default BodySection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  @font-face {
    font-family: "Release Date";
    src: url("../Neue\ Plak\ Black.ttf") format("truetype");
    font-weight: bold;
  }

  @media (max-width: 768px) {
    padding: 0 14vw;
    margin-top: -40px;
  }

  /* .title-more:first-letter {
    color: red !important;
  } */
`;
const More = styled.div`
  font-family: "Release Date";
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 32px;
  margin-bottom: 10px;
  white-space: nowrap;

  @media (max-width: 360px) {
    font-size: 8vw;
  }
`;
const MoreImage = styled.div`
  width: 100%;
  max-width: 300px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  margin-bottom: -10px;
`;
const TitleMore = styled.div`
  font-family: "Release Date";
  font-size: 65px;
  margin-bottom: -10px;
  cursor: pointer;
  @media (max-width: 420px) {
    font-size: 16vw;
  }
`;

const Listen = styled.div`
  font-family: "Release Date";
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 33px;

  @media (max-width: 420px) {
    font-size: 8vw;
  }
`;
