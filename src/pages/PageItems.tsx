import React, { useEffect } from "react";
import WebNav from "../components/WebNav";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function PageItems() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const colorPool = [
    "#0d6963",
    "#0d6936",
    "#69100d",
    "#69540d",
    "#0d5769",
    "#570d69",
    "#0d2369",
    "#690d38",
  ];
  const items = useSelector((state: any) => state.global.items);
  const itemsAllKeys = Object.keys(items);
  console.log(items);

  return (
    <>
      <WebNav />
      <Wrapper>
        {itemsAllKeys.map((el: string) => (
          <ItemCard key={el} style={{ backgroundColor: colorPool[+el % 8] }}>
            <p>
              {items[el].name} - {items[el].plaintext}
            </p>
          </ItemCard>
        ))}
        <h1>Items</h1>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: #131313;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ItemCard = styled.div`
  padding: 10px;
  margin: 10px;
  p {
    color: #fff;
    font-size: 12px;
  }
  :hover {
    transition: 0.4s;
    cursor: pointer;
    background-color: #fff !important;
    p {
      color: #000;
    }
  }
`;
