import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function WebNav() {
  return (
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
  );
}

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-image: url(https://mir-s3-cdn-cf.behance.net/project_modules/1400/9112b576009313.5c5ca8e8c45c3.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: fixed;
`;

const LogoImg = styled.img`
  width: 300px;
  margin: 60px;
`;

const Item = styled.p`
  font-size: 22px;
  color: white;
  margin: 60px;
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
