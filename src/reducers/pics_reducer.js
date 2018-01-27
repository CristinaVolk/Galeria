import {FETCH_PICS, ADD_PICS} from '../actions/index';

export default function(state = { }, action) {

  switch(action.type) {
    case FETCH_PICS:
      return action.payload;
    default:
      return state;
  }
}
