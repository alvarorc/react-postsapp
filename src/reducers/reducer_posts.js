import { FETCH_POSTS, FETCH_POST } from '../actions/types';
const INITIAL_STATE = { all: [], selected: null };

export default function (state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case FETCH_POSTS:
      return { ...state, all: payload.data };
    default:
      return state;
  }
}
