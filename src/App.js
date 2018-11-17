import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    fetch("http://localhost:3000/writers")
      .then(res => res.json)
      .then(writers => console.log(writers));
  }
  render() {
    return <div className="App">hh</div>;
  }
}

export default App;
