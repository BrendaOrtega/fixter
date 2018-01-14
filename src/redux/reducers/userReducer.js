/**
 * Created by brendaortega on 14/01/18.
 */
import {combineReducers} from 'redux';
import {LOGIN_SUCCESS, LOGOUT_SUCCESS} from '../actions/userAction';

function userObject(state={}, action){
    switch(action.type){
        case LOGIN_SUCCESS:
            return action.user;
        case LOGOUT_SUCCESS:
            return {};
        default:
            return state;
    }
}

export default combineReducers({
   userObject
});