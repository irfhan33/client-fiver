import React from "react";
import styled from "styled-components";
import FooterCr from "./FooterCr";
import Link from "next/link";

function Footer({ bio }) {
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
            <img src="/instagram.svg" alt="" />
          </a>
        </Instagram>
        <BioFooter>
          <Link href="/bio">
            <img src="/images/bio_footer.png" alt="" />
          </Link>
        </BioFooter>
      </WrapperLogo>
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
  ${({ bio }) => (bio ? "margin-top:80px;" : "margin-top: 60px;")};

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

  img {
    width: 40px;
  }
`;

const BioFooter = styled(Instagram)`
  margin-left: 10px;
  cursor: pointer;
`;
const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
`;
