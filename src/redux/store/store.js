/**
 * Created by brendaortega on 14/01/18.
 */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
};

export default configureStore;
