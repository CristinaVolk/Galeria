import axios from 'axios';

export const FETCH_PICS = 'fetch_pics';
export const ADD_PICS = 'add_pics';

export function fetchPics() {


  return {
    type: FETCH_PICS,
    payload: null
  };
}


export function addPics() {


  return {
    type: ADD_PICS,
    payload: null
  };
}
