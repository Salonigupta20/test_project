import { useContext, useState } from "react";
import { Context as AuthContext } from '../context/auth-context';

export default function SignIn() {

    const { login } = useContext(AuthContext);
    const [uname,setUname] = useState('');
    const [pass,setPass] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(uname, pass)
        login({ uname, pass })
    };

    return (<div className="form">
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