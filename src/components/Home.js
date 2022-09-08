import React from "react";
import styled from "styled-components";
import Button from "../styles/Button";

export default function Home() {
  return (
    <Wraped>
      tela Home<Button>butão</Button>
    </Wraped>
  );
}

const Wraped = styled.div`
  h1 {
    font-family: Saira Stencil One;
    font-size: 32px;
    margin: 24px auto;
  }
`;
