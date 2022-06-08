import React from "react";
import styled from "styled-components";
import FooterCr from "./FooterCr";
import Link from "next/link";

function Footer({ bio, hideform }) {
  return (
    <Container bio={bio}>
      <a target="_blank" rel="noopener noreferrer" href="mailto:mzk@hnryst.com">
        mzk@hnryst.com
      </a>
      <WrapperLogo>
        <Instagram>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/hnryst_mzk/"
          >
            <img src="../instagram.svg" alt="" />
          </a>
        </Instagram>
        <BioFooter>
          <Link href="bio">
            <img src="../images/test.png" alt="" />
          </Link>
        </BioFooter>
      </WrapperLogo>
      {!hideform && (
        <FormContainer
          action="https://hnryst.us18.list-manage.com/subscribe/post?u=2b312dd30f5f08967adcaf504&amp;id=7d8fea2616"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <FieldContainer>
            <input
              placeholder="Name"
              type="text"
              name="FNAME"
              className=""
              id="mce-FNAME"
            />
            <input
              placeholder="Email"
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
            />
          </FieldContainer>
          <ButtonSubscribe
            className="button-subscribe"
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
          >
            Subscribe
          </ButtonSubscribe>
        </FormContainer>
      )}

      <FooterCr />
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  padding: 0 76px;
  ${({ bio }) => (bio ? "margin-top:80px;" : "margin-top: 60px;")};

  @media (max-width: 768px) {
    padding: 0 40px;
  }

  @media (max-width: 426px) {
    padding: 0 18px;
  }

  a {
    font-size: 30px;

    @media (max-width: 426px) {
      font-size: 14px;
    }
  }
`;

const Instagram = styled.div`
  margin-top: 20px;
  margin-right: 10px;
  width: 40px;
  height: 40px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const BioFooter = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  cursor: pointer;
  margin-right: 10px;
  width: 40px;
  height: 40px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
`;

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonSubscribe = styled.div`
  background: #00a651;
  border: none;
  color: white;
  font-size: 16px;
  padding: 8px 14px;

  width: 100%;
  max-width: 300px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: semibold;
  cursor: pointer;
  transition: all 250ms;
  margin-bottom: 50px;
  text-align: center;
  &:hover {
    background: #464847;
  }

  &:focus {
    background: #464847;
  }
`;

const FieldContainer = styled.div`
  display: grid;
  margin-top: 50px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5%;
  width: 100%;
  max-width: 600px;
  margin-bottom: 30px;
  place-items: center;
  justify-content: center;

  input {
    padding: 8px 14px;
    border-radius: 4px;
    border: none;
    width: 100%;
    max-width: 400px;
    font-size: 14px;
    &:focus {
      outline: none;
    }
  }
`;
