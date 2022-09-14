import React from 'react';
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import './Frame.css'

interface Props {
  children: React.ReactNode
}

export const Frame = ({ children }: Props) => {
  const location = useLocation()

  return <div className="App">
    <header className="App-header">
      <h1>Rock Paper Scissors</h1>
      <div>
        {location.pathname !== '/' && <Link to="/">Home</Link>}
      </div>
    </header>
    <div className="App-content">
      {children}
    </div>
  </div>
}

export default Frame
