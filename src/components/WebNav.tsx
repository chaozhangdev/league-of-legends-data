import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function WebNav() {
  return (
    <Wrapper>
      <NavWrapper>
        <Link to="/champions">
          <Item>Champions</Item>
        </Link>
        <Link to="/items">
          <Item>Items</Item>
        </Link>
        <Link to="/">
          <LogoImg
            src="https://cdn1.dotesports.com/wp-content/uploads/2018/08/12031808/599f9846-474d-4867-9164-559f2dd5f1ac.png"
            alt="lol logo image"
          />
        </Link>
        <Link to="/summoners">
          <Item>Summoners</Item>
        </Link>
        <Link to="/factions">
          <Item>Factions</Item>
        </Link>
      </NavWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0px;
`;

const NavWrapper = styled.div`
  height: 160px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: black;
  /* background-image: url(https://mir-s3-cdn-cf.behance.net/project_modules/1400/9112b576009313.5c5ca8e8c45c3.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed; */
`;

// const BgVideo = styled.video`
//   height: 100%;
//   width: 100%;
//   float: left;
//   top: 0;
//   padding: none;
//   position: fixed;
//   z-index: -1;
// `;

const LogoImg = styled.img`
  width: 200px;
  margin: 20px 60px;
`;

const Item = styled.p`
  font-size: 18px;
  color: white;
  margin: 0 60px;
  z-index: 2;
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
