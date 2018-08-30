import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PersonalInfo from "./components/personal-info";
import Education from "./components/education";
import Skills from "./components/skills";
import Experience from "./components/experience";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my Resume</h1>
        </header>
        <div className="container-fluid">
          <br />
          <PersonalInfo />
          <br />
          <Education />
          <br />
          <Skills />
          <br />
          <Experience />
        </div>
      </div>
    );
  }
}

export default App;
