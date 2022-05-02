import actionTypes from "../constants/actionTypes";
import createDataContext from "./create_data_context";
import database from "../constants/db";

const initialState = {
  isLoggedIn: false,
  isError: false,
  username: null,
  password: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN: {
      console.log(action)
      const { uname, pass } = action.payload;
      const userData = database.find((user) => user.username === uname);
      if(!userData || userData.password !== pass) return { ...state, isError: true };
      return { isLoggedIn: true, isError: false, username: uname, password: pass }
    }
    case actionTypes.LOGOUT: {
      return { ...initialState }
    }
  }
};


const login = (dispatch) => ({ uname, pass }) => {
  dispatch({ type:actionTypes.LOGIN, payload: { uname, pass } })
}
const logout = (dispatch) => () => {
  dispatch({ type: actionTypes.LOGOUT })
}

const actionsObj = { login, logout };

export const { Provider, Context } = createDataContext(reducer, actionsObj, initialState);
