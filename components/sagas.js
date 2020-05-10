import fetch from 'isomorphic-fetch';
import { receivePosts, REQUEST_POSTS } from '../actions';
import { call, fork, takeLatest, put } from 'redux-saga/effects';

function fetchCityCodes(prefCode) {
  console.log('request sending.');
  const URL = `https://www.land.mlit.go.jp/webland/api/CitySearch?area=${prefCode}`;
  return fetch(URL)
    .then(response => response.json())
    .then(json => {
      const data = json.data;
      console.table(data);
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
  yield takeLatest('REQUEST_POSTS', fetchPostsIfNeeded);
}
export default function* rootSaga() {
  yield fork(watchPostsAsync);
  //非同期処理はここに追加
}
