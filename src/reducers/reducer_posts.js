import { FETCH_POSTS, CREATE_POST, FETCH_POST, DELETE_POST } from '../actions/types';
const INITIAL_STATE = { all: [], selected: null };

export default function (state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case FETCH_POSTS:
      return { ...state, all: payload.data };
    case FETCH_POST:
      return { ...state, selected: payload.data };
    default:
      return state;
  }
}
