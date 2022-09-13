import React from 'react';
import { Link } from "react-router-dom";
import { Frame } from "../../components/frame/Frame";
import { Button } from "../../components/button/Button";

import './Home.css';

function App() {
  return (
    <Frame>
      <div className="App-menu">
        <Link to="/play">
          <Button large><h3>Play</h3></Button>
        </Link>
        <Link to="/records">
          <Button large><h3>Records</h3></Button>
        </Link>
      </div>
    </Frame>
  );
}

export default App;
