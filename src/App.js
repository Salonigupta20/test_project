import React from "react";
import "./styles.css";
import './App.css';
import { Provider } from './context/auth-context';
import Home from "./components/Home";

function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
