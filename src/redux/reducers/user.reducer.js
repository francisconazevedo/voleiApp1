import { userConstants } from '../constants/user.constants';

export function user (state = {loading:false, logged: false, userLogged:[], erroMessage: false}, action){
    switch(action.type){
        case userConstants.login:
            return{
                ...state,
                loading: true,
                erroMessage: false
            };
        case userConstants.logout:
            return{
                ...state,
                logged: false,
                userLogged: []
            };
        case userConstants.successlogin:
            return{
                ...state,
                loading: false,
                userLogged: action.userLogged,
                logged: true
            };
        case userConstants.failedlogin:
            return{
                ...state,
                loading:false,
                erroMessage: true
            };
        default:
            return state;
        
    }
}