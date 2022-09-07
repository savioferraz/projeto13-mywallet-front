import React from "react";
import styled from "styled-components";

export default function Input({ placeholder, type, name, value, onChange }) {
  return (
    <Wrapper
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    ></Wrapper>
  );
}

const Wrapper = styled.input`
  width: 100%;
  background: #ffffff;
  height: 58px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin: 6px auto;
`;
