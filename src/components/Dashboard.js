import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context as AuthContext } from '../context/auth-context';

export default function() {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/sign-in");
    }
    return (
    <>
        <div>User Successfully Signed In </div>
        <div className="button-container">
            <input type="button" value="LOGOUT" onClick={handleLogout} />
      </div>
    </>
    );
}