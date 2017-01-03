import axios from 'axios';
import { FETCH_POSTS, CREATE_POST } from './types';

const API_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = 'GlaHquq0';

export function fetchPosts () {
  return {
    type: FETCH_POSTS,
    payload: axios.get(`${API_URL}/posts?key=${API_KEY}`)
  }
}

export function createPost (props) {
  return {
    type: CREATE_POST,
    payload: axios.post(`${API_URL}/posts?key=${API_KEY}`, props)
  }
}
