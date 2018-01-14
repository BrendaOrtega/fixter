/**
 * Created by brendaortega on 14/01/18.
 */
import {combineReducers} from 'redux';
import userReducer from './userReducer';

export default combineReducers({
    user:userReducer
});