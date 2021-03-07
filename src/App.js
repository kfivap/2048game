import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {GameProvider} from "./GameContext";
import React from "react";
import {Game} from "./components/Game";

function App() {
  return (
      <GameProvider>
          <div className="App">

              <Game/>
          </div>
      </GameProvider>
  );
}

export default App;
