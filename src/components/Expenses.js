import React, { useContext } from "react";
import UserContext from "../common/UserContext";

export default function Expenses() {
  const { email } = useContext(UserContext);

  return <>ola {email}</>;
}
