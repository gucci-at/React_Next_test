'use strict';

// https://www.s-arcana.co.jp/blog/2017/03/07/3499
const {createStore, applyMiddleware, combineReducers} = require('redux');
const reduxSaga = require('redux-saga');
const effects = require('redux-saga/effects');
const createSagaMiddleware = reduxSaga.default;
//const {takeEvery, delay, effects} = reduxSaga;
const {put, takeEvery, delay} = effects;
//const provider = require('react-redux');
const logger = require('redux-logger').createLogger;

const fetch = require('isomorphic-fetch');
const { call, fork, takeLatest, select, take} = effects;

// initialize
const initialState = {
    isFetching: false,
    prefs: [
      { code: '01', name: '北海道' },
      { code: '02', name: '青森県' }
    ],
    cities: []
  };

// reducers
function counter(state = 0, action) {
    switch (action.type) {
    case 'INCREMENT':
            return state + 1;
    case 'DECREMENT':
            return state - 1;
    default:
        return state;
    }
}

function pulldown (state = initialState, action) {
    switch (action.type) {
    case 'REQUEST_POSTS':
        return Object.assign({}, state, {
            isFetching: true
        });
  
    case 'RECEIVE_POSTS': 
        const { cities } = action;
        return Object.assign({}, state, {
            isFetching: false,
            cities: cities
        });
  
    default:
        return initialState;
    }
}

// action creater
function requestPosts(prefCode) {
    console.log('requestPosts called.');
    return {
        type: 'REQUEST_POSTS',
        prefCode
    }
}

function receivePosts(data) {
    return {
        type: 'RECEIVE_POSTS',
        cities: data
    }
}

//saga
function * incrementAsync() {
    /*console.log('delaying.');
    yield delay(1000);*/
    yield setTimeout(() => {
        console.log('timeout.');
    }, 1000);
    console.log('timer started.');
    yield put({type: 'INCREMENT'});
}

function * incrementTimer() {
    yield setInterval(() => {
        console.log('timeout.');
        doaction('INCREMENT');
    }, 1000);
    console.log('timer started.');
}

function fetchCityCodes(prefCode) {
    console.log('request sending.');
    const URL = `https://www.land.mlit.go.jp/webland/api/CitySearch?area=${prefCode}`;
    return fetch(URL)
        .then(response => response.json())
        .then(json => {
            const data = json.data;
            console.log('response received.');
            return { data };
        });
}

function* fetchPostsIfNeeded(action) {
    // 引数で与えられた関数を実行し、Promiseの完了を待つ
    console.log('fetchPostsIfNeeded:' + action.prefCode);
    const { data } = yield call(fetchCityCodes, action.prefCode);
    yield put(receivePosts(data));
}

function* watchPostsAsync() {
    // 実行中の処理があったら中断し、新しく処理を開始する
    console.log('watching PostsAsync');
    yield takeLatest('REQUEST_POSTS', fetchPostsIfNeeded);
    console.log('watched');
}
function * watchIncrementAsync() {
    // actionが実行されるたびに関数を実行する
    yield  takeEvery('INCREMENT_ASYNC', incrementAsync);
}

function * watchAndLog() {
    while (true) {
        console.log('before', yield select());
        const action = yield take('*');
        console.log('action', action);
        console.log('after ', yield select());
    }
}

const sagaMiddleware = createSagaMiddleware();

let rootReducer = combineReducers(
    {
        counter,
        pulldown
    }
);

const store = createStore(
    rootReducer,
    //applyMiddleware(sagaMiddleware, logger())
    applyMiddleware(sagaMiddleware)
);

function* rootSaga(){
    yield fork(watchAndLog);
    yield fork(watchPostsAsync);
    yield fork(watchIncrementAsync);
}  

sagaMiddleware.run(rootSaga);

/*
store.subscribe(() => {
    console.log(store.getState().counter);
    console.log(store.getState().pulldown.cities);
});
*/

const doaction = type => store.dispatch({type});
const dorequest = action => store.dispatch(action);

dorequest(requestPosts('47'));
doaction('INCREMENT_ASYNC');
doaction('INCREMENT');
doaction('INCREMENT');
doaction('INCREMENT');
doaction('DECREMENT');
doaction('INCREMENT_ASYNC');
doaction('INCREMENT');
doaction('INCREMENT');
doaction('DECREMENT');