import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Context as AuthContext } from '../context/auth-context';

export default function(props) {
    const { state } = useContext(AuthContext);
    if(state.isLoggedIn) {
        return <>{props.children}</>
    } else {
        return <Navigate to="/" />
    }

}