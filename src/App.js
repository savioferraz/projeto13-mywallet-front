import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import Expenses from "./components/Expenses.js";
import Home from "./components/Home.js";
import Incomes from "./components/Incomes.js";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
import PrivatePage from "./common/PrivatePage.js";
import { UserProvider } from "./common/UserContext.js";

export default function App() {
  return (
    <UserProvider>
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
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/incomes" element={<Incomes />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
