import React, { useContext } from "react";
import "./styles.css";
import './App.css';
import SignIn from "./SignIn";
import { Context as AuthContext } from '../context/auth-context';

function Home() {
    
    const { state } = useContext(AuthContext)

    return (
      <div className="app">
        <div className="login-form">
          <div className="title">Sign In</div>
          { state.isLoggedIn ? <div>User is successfully logged in</div> : <SignIn />}
        </div>
      </div>
    );
  }

export default Home;
