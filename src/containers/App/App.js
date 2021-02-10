import { React, useState } from "react";
import SearchProducts from "../../components/SearchProducts/SearchProducts";
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

        <SearchProducts></SearchProducts>
        {/* <router-outlet></router-outlet> */}
      </header>
    </div>
  );
};

export default App;
