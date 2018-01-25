import { combineReducers } from 'redux';
import {picdReducer} from './pics_reducer';

const rootReducer = combineReducers({
   pics: picdReducer
});

export default rootReducer;
