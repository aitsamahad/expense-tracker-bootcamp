import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import EmailSticky from "./components/EmailSticky";
import SocialSticky from "./components/SocialSticky";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <>
      <GlobalProvider id="particles-js">
        <div className="container">
          <Header />
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
          <EmailSticky />
          <SocialSticky />
        </div>
      </GlobalProvider>
      <section>
        <p>
          Bootcamp Assignment by Aitsam Ahad -{" "}
          <a href="https://aitsamahad.dev">Check my portfolio here!</a> - 2020
        </p>
      </section>
    </>
  );
}

export default App;
