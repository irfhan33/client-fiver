import React from "react";
import styled from "styled-components";
import Link from "next/link";

function BodySection({
  image1,
  titleImage1,
  destination1,
  image2,
  titleImage2,
  destination2,
}) {
  return (
    <Container>
      <More>
        <img src="images/more.svg" alt="" />
      </More>
      <Wrapper>
        <Album>
          <MoreImage>
            <Link href={destination1}>
              <img src={image1} alt="" />
            </Link>
          </MoreImage>
          <Link href={destination1}>
            <TitleMore>
              <img src={titleImage1} alt="" />
            </TitleMore>
          </Link>
          <Listen>
            <img src="images/listennow.svg" alt="" />
          </Listen>
        </Album>
        <Album>
          <MoreImage>
            <Link href={destination2}>
              <img src={image2} alt="" />
            </Link>
          </MoreImage>
          <Link href={destination2}>
            <TitleMore>
              <img src={titleImage2} alt="" />
            </TitleMore>
          </Link>
          <Listen>
            <img src="images/listennow.svg" alt="" />
          </Listen>
        </Album>
      </Wrapper>
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
    /* margin-top: -40px; */
  }
`;
const More = styled.div`
  margin-top: 8px;
  max-width: 280px;
  display: flex;
  margin-bottom: 16px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const MoreImage = styled.div`
  width: 100%;
  max-width: 300px;
  max-height: 300px;
  cursor: pointer;
  margin-bottom: 16px;
  min-height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

const TitleMore = styled.div`
  display: flex;
  max-width: 280px;
  height: 50px;
  margin-bottom: 16px;
  img {
    height: 100%;
    width: 100%;
  }
`;

const Listen = styled.div`
  max-width: 200px;
  height: 27px;
  display: flex;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Album = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
