import * as ActionTypes from '../../constants/actionTypes';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';
const client = axios.create({
    baseURL: apiUrl,
    headers: { 'Content-Type': 'application/json' }
});

export const loginAsync = (username, password) => {
    return (dispatch) => {
        dispatch(Login_Pending());
        setTimeout(function () {
            client.get(`/?username=${username}`)
                .then((response) => {
                    console.log(response.data);
                    localStorage.setItem('username', JSON.stringify(response.data));
                    dispatch(Login_Success(response.data));
                })
                .catch((error) => {
                    dispatch(Login_Error(error));
                });
        }, 3000);
    }
}


const Login_Pending = () => ({
    type: ActionTypes.LOGIN_PENDING
})

const Login_Error = (error) => ({
    type: ActionTypes.LOGIN_ERROR,
    error: error
})

const Login_Success = (data) => ({
    type: ActionTypes.LOGIN_SUCCESS,
    user: data
})