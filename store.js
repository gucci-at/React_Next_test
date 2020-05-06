import { createStore, applyMiddleware } from 'redux'
//import thunkMiddleware from 'redux-thunk'
import rootSaga from './components/sagas';
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'

const initial = {
  counter:{
    message:'START',
    count: 0
  },
  districts:{
      isFetching: false,
      prefs: [],
      cities: []
    }
  }

// initStore関数（redux-store.jsで必要）
export function initStore(state = initial) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, state,
    applyMiddleware(sagaMiddleware, logger))
  sagaMiddleware.run(rootSaga);

  return store;
}
