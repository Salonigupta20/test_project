import React from "react";
import "./styles.css";
import './App.css';
import { Provider } from './context/auth-context';
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="register" element={<Register />} />
          <Route path="successful" element={<Dashboard />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
