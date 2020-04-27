export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export function requestPosts(prefCode) {
  return {
    type: REQUEST_POSTS,
    prefCode
  }
}

export function receivePosts(data) {
  return {
    type: RECEIVE_POSTS,
    cities: data
  }
}
