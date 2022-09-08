import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postIncome } from "../common/Services";
import Button from "../styles/Button";
import Input from "../styles/Input";

export default function Incomes() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const body = { amount, desc };

  function handleForm(e) {
    e.preventDefault();
    postIncome(body)
      .then((ans) => {
        const token = ans.data.token;
        const authJSON = JSON.stringify({ token: token });
        localStorage.setItem("mywallet", authJSON);
        navigate("/home");
      })
      .catch((error) => alert(`Opa, algo deu errado... ${error.message}`));
  }

  return (
    <Wraped>
      <h1>MyWallet</h1>
      <form onSubmit={handleForm}>
        <Input
          placeholder={"Valor"}
          type={"number"}
          name={"amount"}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Input
          placeholder={"Descrição"}
          type={"text"}
          name={"desc"}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <Button type="submit">Salvar entrada</Button>
      </form>
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
