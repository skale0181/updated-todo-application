import { GLOBAL_API } from "../../Global-api";

///type of action
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//action creator
export const loginLoading = () => ({
    type: LOGIN_LOADING
});

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload: payload
}); 

export const loginFailure = () => ({
    type: LOGIN_FAILURE
});

export const logout = () => ({
    type: "LOGOUT"
});


export const login =({email,password})=> (dispatch) => {
    
    dispatch(loginLoading())
    fetch(GLOBAL_API+'login', {
        method: 'POST',
        body: JSON.stringify({email,password}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(res => dispatch(loginSuccess({userId:res.user._id,name:res.user.name,token:res.token})))
        .catch(err => dispatch(loginFailure(err)))
}

///https://updated-todo-application-0181.herokuapp.com/users