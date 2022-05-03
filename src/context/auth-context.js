import actionTypes from "../constants/actionTypes";
import createDataContext from "./create_data_context";
import database from "../constants/db";

const initialState = {
  isLoggedIn: false,
  isError: false,
  username: null,
  password: null,
  database
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN: {
      const { uname, pass } = action.payload;
      const userData = state.database.find((user) => user.username === uname);
      if(!userData || userData.password !== pass) return { ...state, isError: true };
      return { ...state, isLoggedIn: true, isError: false, username: uname, password: pass }
    }
    case actionTypes.LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        isError: false,
        username: null,
        password: null
      }
    }
    case actionTypes.REGISTER: {
      return { ...state, database: [ ...state.database, { 
        username: action.payload.uname,
        password: action.payload.pass
       } ] }
    }
  }
};


const login = (dispatch) => ({ uname, pass }) => {
  dispatch({ type:actionTypes.LOGIN, payload: { uname, pass } })
}
const logout = (dispatch) => () => {
  dispatch({ type: actionTypes.LOGOUT })
}

const register = (dispatch) => ({ uname, pass }) => {
  dispatch({ type:actionTypes.REGISTER, payload: { uname, pass } })
}

const actionsObj = { login, logout,register };

export const { Provider, Context } = createDataContext(reducer, actionsObj, initialState);
