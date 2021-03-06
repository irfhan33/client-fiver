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
  image3,
  titleImage3,
  destination3,
  image4,
  titleImage4,
  destination4,
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
          <Link href={destination1}>
            <Listen>
              <img src="images/listennow.svg" alt="" />
            </Listen>
          </Link>
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
          <Link href={destination2}>
            <Listen>
              <img src="images/listennow.svg" alt="" />
            </Listen>
          </Link>
        </Album>
        <Album>
          <MoreImage>
            <Link href={destination3}>
              <img src={image3} alt="" />
            </Link>
          </MoreImage>
          <Link href={destination3}>
            <TitleMore>
              <img src={titleImage3} alt="" />
            </TitleMore>
          </Link>
          <Link href={destination3}>
            <Listen>
              <img src="images/listennow.svg" alt="" />
            </Listen>
          </Link>
        </Album>
        <Album>
          <MoreImage>
            <Link href={destination4}>
              <img src={image4} alt="" />
            </Link>
          </MoreImage>
          <Link href={destination4}>
            <TitleMore>
              <img src={titleImage4} alt="" />
            </TitleMore>
          </Link>
          <Link href={destination4}>
            <Listen>
              <img src="images/listennow.svg" alt="" />
            </Listen>
          </Link>
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
  cursor: pointer;
  margin-bottom: 16px;
  aspect-ratio: 1/1;
  max-width: 300px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TitleMore = styled.div`
  display: flex;
  max-width: 280px;
  height: 50px;
  margin-bottom: 16px;
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
  }
`;

const Listen = styled.div`
  max-width: 200px;
  height: 27px;
  display: flex;
  cursor: pointer;

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
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding: 50px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 20px 14vw;
  }
`;
