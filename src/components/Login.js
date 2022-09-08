import React, { useContext, useState } from "react";
import Input from "../styles/Input";
import Button from "../styles/Button";
import { postLogin } from "../common/Services";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../common/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const { email, setEmail } = useContext(UserContext);
  const [password, setPassword] = useState("");
  const body = { email, password };

  function handleForm(e) {
    e.preventDefault();
    postLogin(body)
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
          placeholder={"E-mail"}
          type={"email"}
          name={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder={"Senha"}
          type={"password"}
          name={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Entrar</Button>
      </form>
      <Link to="/sign-up">Primeira vez? Cadastre-se</Link>
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
