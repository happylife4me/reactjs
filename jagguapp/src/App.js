import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import {Login} from "./components/Login"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <div className="App">
      <header>
      <Header></Header>
        <img src={logo} className="App-logo" alt="logo" width="50" height="50" />
        <h1 className="App-title">React & Redux Tranning</h1>
        
        <Login title="Verizon Portal "></Login>
        <Dashboard></Dashboard>
        <Footer year="2019" month="Oct"></Footer>
      </header>
    </div>
  );
}

export default App;
