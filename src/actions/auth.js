
import { USER_LOGGED_IN } from '../types';
import api from '../api';

export const userLoggedIn = (user)=>({
    type : USER_LOGGED_IN,
    user
});

//thunk action (basically dispatches an action after some processing)
export const login = (credentials)=>(
    (dispatch)=>(
    api.user.login(credentials)
    .then((user)=> dispatch(userLoggedIn(user)))
    )
);