import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions'

const Initial = {
  isFetching: false,
  prefs: [],
  cities: []
}

export default function districts(state = Initial, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      });

    case RECEIVE_POSTS: {
      const { cities } = action;
      return Object.assign({}, state, {
        cities: cities,
        isFetching: false
      });
    }

    default:
      return state;
  }
}
