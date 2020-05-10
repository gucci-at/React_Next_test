import { combineReducers } from 'redux'
export const person = (state, action) => {
  if(!state) return {
    name: 'tkow',
    age: 12
  }
  return combineReducers({
      name,
      age 
  })(state,action)
}

function name(state='', action) {
  switch(action.type) {
    case "SET_PERSON_NAME": return action.name
    default:
      return state
  }
}

function age(state=0, action) {
  switch(action.type) {
    case "SET_PERSON_AGE": return action.age
    case "ADD_PERSON_AGE": return state + 1 
    default:
      return state
  }
}