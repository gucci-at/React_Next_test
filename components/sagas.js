import fetch from 'isomorphic-fetch';
import { receivePosts, REQUEST_POSTS } from './actions';
import { call, fork, takeLatest, put } from 'redux-saga/effects';

function fetchCityCodes(prefCode) {
  const URL = `https://www.land.mlit.go.jp/webland/api/CitySearch?area=${prefCode}`;
  return fetch(URL)
    .then(response => response.json())
    .then(json => {
      const data = json.data;
      return { data };
    });
}

function* fetchPostsIfNeeded(action) {
  // 引数で与えられた関数を実行し、Promiseの完了を待つ
  const { data } = yield call(fetchCityCodes, action.prefCode);
  yield put(receivePosts(data));
}

export default function* rootSaga() {
  // 実行中の処理があったら中断し、新しく処理を開始する
  yield takeLatest(REQUEST_POSTS, fetchPostsIfNeeded);
}