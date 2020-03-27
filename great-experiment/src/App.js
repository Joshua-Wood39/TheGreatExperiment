import React, { Component } from "react";
import { Route } from "react-router-dom";
import SessionS from "./components/SessionS.js";
import RoomOne from "./components/RoomOne.js";
import RoomTwo from "./components/RoomTwo.js";
import RoomThree from "./components/RoomThree.js";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      room: 0
    };
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={SessionS} />
        <Route path="/1" component={RoomOne} />
        <Route path="/2" component={RoomTwo} />
        <Route path="/3" component={RoomThree} />
      </div>
    );
  }
}
export default App;
