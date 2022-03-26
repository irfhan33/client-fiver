import React from "react";
import styled from "styled-components";
import Link from "next/link";

function FooterCr({ home }) {
  return (
    <Copyright home={home}>
      <div className="copyright">
        <img src="/images/1NLV.svg" alt="" /> <span>©2022 HNRY ST mzk</span>
      </div>
      <Dlp>
        <span>
          <Link href="/dlp">
            <a>Direct Licensing Policy</a>
          </Link>
        </span>
      </Dlp>
    </Copyright>
  );
}

export default FooterCr;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  ${({ home }) => (home ? "margin-top:50px;" : "margin-top:60px;")};

  /* margin-top: 100px; */
  margin-bottom: 30px;
  position: relative;
  width: 100%;
  justify-content: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }
  .copyright {
    display: flex;
    align-items: center;
    img {
      width: 20px;
      margin-right: 10px;
      @media (max-width: 768px) {
        width: 10px;
        margin-right: 6px;
      }
    }

    span {
      font-size: 16px;

      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
  }
`;

const Dlp = styled.div`
  position: absolute;
  right: 50px;
  display: flex;
  align-items: center;

  span {
    a {
      font-size: 16px;
      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 768px) {
    right: 20px;
  }

  @media (max-width: 500px) {
    position: static;
    margin-top: 20px;
  }
`;
