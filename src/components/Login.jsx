import React from "react";
import styled from "styled-components";
import Input from "../styles/Input";
import Button from "../styles/Button"

function handleForm() {
    return
}

export default function Login() {
    return (
        <>
            <form onSubmit={handleForm}>
            <Input placeholder={"E-mail"}
          type={"email"}
          name={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
            <Input placeholder={"Senha"}
          type={"password"}
          name={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
            <Button>Entrar</Button>
            </form>
            
        </>
    )
}

