import "./App.css";
import { React, useState } from "react";

const App = () => {
  const [titleState, setTitleState] = useState({
    title: "ml market",
  });

  const switchTitleHandler = () => {
    setTitleState({
      title: "other title",
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{titleState.title}</h1>
        <p>this will be my passport to a new work</p>
        <button onClick={switchTitleHandler}>hi!!!</button>
      </header>
    </div>
  );
};

export default App;
