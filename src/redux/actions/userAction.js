/**
 * Created by brendaortega on 14/01/18.
 */
//User login


    //grupito
//constante
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

//actioncreator
function loginSuccess(user){
    return {
        type:LOGIN_SUCCESS,
        user
    }
}

//thunk
export const loginAction = (user) => (dispatch, getState) => {
  dispatch(loginSuccess(user));
};

//check for user at the begginning
export const checkForUser = () => (dispatch) => {
  const user = localStorage.getItem("user");
  if (user){
    dispatch(loginSuccess(JSON.parse(user)));
  }
};

//grupito de cerrar sesion
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

function logoutSuccess(){
    return {
        type:LOGOUT_SUCCESS
    }
}

export const logoutAction = () => (dispatch) => {
    //firebase.auth().signOut();
    dispatch(logoutSuccess());
};
