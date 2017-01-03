import axios from 'axios';
import { FETCH_POSTS, CREATE_POST, FETCH_POST, DELETE_POST } from './types';

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

export function fetchPost (postId) {
  return {
    type: FETCH_POST,
    payload: axios.get(`${API_URL}/posts/${postId}?key=${API_KEY}`)
  }
}

export function deletePost (postId) {
  return {
    type: DELETE_POST,
    payload: axios.delete(`${API_URL}/posts/${postId}?key=${API_KEY}`)
  }
}
