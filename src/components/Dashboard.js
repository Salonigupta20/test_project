import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context as AuthContext } from '../context/auth-context';

export default function() {
    const { state, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/sign-in");
    }

    // useEffect(() => {
    //     if (!state.isLoggedIn) {
    //         navigate('/sign-in')
    //     }
    // }, [state.isLoggedIn])

    return (
    <>
        <div>User Successfully Signed In </div>
        <div className="button-container">
            <input type="button" value="LOGOUT" onClick={handleLogout} />
      </div>
    </>
    );
}