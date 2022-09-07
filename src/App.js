import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import UserContext from "./common/UserContext";
import Expenses from "./components/Expenses";
import Home from "./components/Home";
import Incomes from "./components/Incomes";
import Login from "./components/Login";
import PrivatePage from "./PrivatePage";
import SignUp from "./components/SignUp";

export default function App() {
  return (
    <UserContext.Provider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivatePage>
                <Login />
              </PrivatePage>
            }
          />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/incomes" element={<Incomes />} />
          <Route path="/expenses" element={<Expenses />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
