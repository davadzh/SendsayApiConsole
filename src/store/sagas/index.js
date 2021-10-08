import {fork} from 'redux-saga/effects';

import login from 'src/store/sagas/auth';
import requests from 'src/store/sagas/requests';
import {all} from 'redux-saga/effects';

export default function* root() {
  yield all([fork(login), fork(requests)]);
}
