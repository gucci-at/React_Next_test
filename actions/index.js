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

export const setPersonName = name => ({
  type: 'SET_PERSON_NAME',
  name
})

export const setPersonAge = age => ({
  type: 'SET_PERSON_AGE',
  age
})

export const addPersonAge = age => ({
  type: 'ADD_PERSON_AGE'
})

export const inputName = (name) => (
  { type: 'INPUT_NAME', payload: {name} }
);