import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import React, { Component } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import { Link, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Route path="/home">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </div>
  );
}

export default App;
