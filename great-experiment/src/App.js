import React from "react";
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
        <SessionS />
      </div>
    );
  }
}
export default App;
