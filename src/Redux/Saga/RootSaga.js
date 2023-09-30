import { all } from 'redux-saga/effects';
import typeOfTransactionSaga from './Header/TypeOfTransactionSaga';
import getAllHeadsSaga from './Header/GetAllHeadsSaga';
import AddHeadSaga from './Header/AddHeadSaga';
import DeleteHeadSaga from './Header/DeleteHeadSaga';

export default function* rootSaga() {
  yield all([
   typeOfTransactionSaga(),
   getAllHeadsSaga(),
   AddHeadSaga(),
   DeleteHeadSaga()
  ]);
}