import React, { Fragment } from "react";

import "./App.css";

//components

import Input from "./components/Input";
import Table from "./components/Table";
import Header from "./components/Header";

function App() {
  return (
    <Fragment>
      <div className="container">
        <Header title="Pern Todo List" />
        <Input />
        <Table />
      </div>
    </Fragment>
  );
}

export default App;
