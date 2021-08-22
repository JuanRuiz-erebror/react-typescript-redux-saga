import { put, takeLatest, fork, call } from 'redux-saga/effects';

import { createApiCall, listingRoute, MethodType } from 'services/Api';
import { ActionType } from 'model/model';

// login
function* getListingSaga(action: any): any {

  const payload = action.payload
  try {

    const response: any = yield call(
      createApiCall, { method: MethodType.GET, url: `${listingRoute}${payload ? `?timestamp=${payload}` : ''}`, data: undefined, auth: true }
    )

    if (response.status === 'ok') {
      yield put({ type: ActionType.LISTING_REQUEST_SUCCESS, payload: response.data });
    } else {
      yield put({ type: ActionType.LOGIN_USER_ERROR, payload: 'error' })
    }

  } catch (error) {
    yield put({ type: ActionType.LISTING_REQUEST_ERROR, payload: error })
  }
}
function* onLoginSubmitWatcher() {
  yield takeLatest(ActionType.LISTING_REQUEST, getListingSaga);;
}

export default [
  fork(onLoginSubmitWatcher),
];