import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function WebNav() {
  return (
    <Wrapper>
      <WebNavWrapper>
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
      </WebNavWrapper>
      <MobileNavWrapper>
        <Link to="/">
          <MobileLogoImg
            src="https://cdn1.dotesports.com/wp-content/uploads/2018/08/12031808/599f9846-474d-4867-9164-559f2dd5f1ac.png"
            alt="lol logo image"
          />
        </Link>
        <MobileNavBar>
          <Link to="/champions">
            <MobileItem>Champions</MobileItem>
          </Link>
          <Link to="/items">
            <MobileItem>Items</MobileItem>
          </Link>
          <Link to="/summoners">
            <MobileItem>Summoners</MobileItem>
          </Link>
          <Link to="/factions">
            <MobileItem>Factions</MobileItem>
          </Link>
        </MobileNavBar>
      </MobileNavWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0px;
  background-color: black;
`;

const WebNavWrapper = styled.div`
  height: 160px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: black;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

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

const MobileNavWrapper = styled.div`
  background-color: black;
  text-align: center;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const MobileLogoImg = styled.img`
  width: 140px;
  margin-top: 30px;
`;

const MobileNavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
`;

const MobileItem = styled.p`
  font-size: 12px;
  color: white;
`;
