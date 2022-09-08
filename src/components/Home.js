import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../styles/Button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Wraped>
      <h1>Olá Fulano</h1>
      <Content>
        <Extract>extrato</Extract>
        <div className="buttons">
          <Button
            width="43vw"
            height="115px"
            onClick={() => navigate("/incomes")}
          >
            <div>
              <ion-icon name="add-circle-outline"></ion-icon>
              <p>Nova entrada</p>
            </div>
          </Button>
          <Button
            width="43vw"
            height="115px"
            onClick={() => navigate("/expenses")}
          >
            <div>
              <ion-icon name="remove-circle-outline"></ion-icon>
              <p>Nova saída</p>
            </div>
          </Button>
        </div>
      </Content>
    </Wraped>
  );
}

const Wraped = styled.div`
  h1 {
    font-weight: 700;
    font-size: 26px;
    margin: 24px auto;
  }
`;

const Content = styled.div`
  .buttons {
    margin: 15px auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Extract = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 60vh;
  border-radius: 5px;
  color: #868686;
`;
