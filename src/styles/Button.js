import React from "react";
import styled from "styled-components";

export default function Button({
  children,
  width = "100%",
  height = "46px",
  onClick,
}) {
  return (
    <Wraped width={width} height={height} onClick={onClick}>
      {children}
    </Wraped>
  );
}

const Wraped = styled.button`
  background-color: #a328d6;
  color: #ffffff;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  text-align: center;
  border: none;
  border-radius: 5px;
  margin: 3px;
  ion-icon {
    color: #ffffff;
    font-size: 32px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
    text-align: left;
  }
`;
