import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../styles/Button";
import UserContext from "../common/UserContext";
import { getTransacions } from "../common/Services";

export default function Home() {
  const navigate = useNavigate();
  const { email } = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransacions()
      .then((ans) => {
        setTransactions(ans.data);
      })
      .catch((error) => alert(`Opa, algo deu errado... ${error.message}`));
  }, []);

  console.log(transactions);

  return (
    <Wraped>
      <h1>
        Olá {email}
        <span>
          <ion-icon
            name="log-out-outline"
            onClick={() => navigate("/")}
          ></ion-icon>
        </span>
      </h1>
      <Content>
        <Extract>
          {transactions.length === 0 ? (
            <div className="empty">Não há registros de entrada ou saída</div>
          ) : (
            transactions.map((trans) => (
              <div className="transactions">
                <h2>
                  <span>{trans.date}</span>
                  {trans.desc}
                </h2>
                <h3>{trans.amount}</h3>
              </div>
            ))
          )}
        </Extract>
        <Total>
          <h4>SALDO</h4>
          <h5>6000,00</h5>
        </Total>
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
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
  }
  span ion-icon {
    font-size: 32px;
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
  height: 54vh;
  border-radius: 5px 5px 0 0;
  padding-top: 2px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  .transactions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 12px;
  }
  h2 {
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    text-align: left;
  }
  span {
    color: #c6c6c6;
    margin-right: 12px;
  }
  h3 {
    color: #03ac00;
  }
  .empty {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
  }
`;

const Total = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 6vh;
  border-radius: 0 0 5px 5px;
  display: flex;
  justify-content: space-between;
  h4 {
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
    margin: 12px;
  }
  h5 {
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    right: 300;
    margin: 12px;
    color: #03ac00;
  }
`;
