import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context as AuthContext } from '../context/auth-context';

export default function Register() {

    const { register, state } = useContext(AuthContext);
    const [uname,setUname] = useState('');
    const [pass,setPass] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        register({ uname, pass });
        navigate("/sign-in")
    };

    return (<div className="form">
        <h3> Register </h3>
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Username </label>
        <input
            type="text"
            name="uname"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
            required
        />
      </div>
      <div className="input-container">
        <label>Password </label>
        <input
            type="password"
            name="pass"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
        />
      </div>
      <div className="button-container">
        <input type="submit" />
      </div>
    </form>

  </div>)
}