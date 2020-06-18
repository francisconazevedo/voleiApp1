import {userConstants} from '../redux/constants/user.constants';
import api from '../services/api';

export  const userActions = {
    login
}

function login(user, password){
    return dispatch => {
        console.log("ok")
        dispatch(loginRequest());
        api.get('events.json').then((response) => {
        console.log("ok2")
        if(response.user){
                dispatch(loginSuccess(response.user));
            }else{
                dispatch(loginFailed());
            }
        }).catch(
            () => {
                dispatch(loginFailed());
            }
        );
    }
    function loginRequest(){
        return{
            type:userConstants.login
        }
    }
    function loginSuccess(user){
        return{
            type:userConstants.successlogin, userLogged:user
        }
    }
    function loginFailed(){
        return{
            type:userConstants.loginFailed
        }
    }
}