import { all } from 'redux-saga/effects';
import typeOfTransactionSaga from './Header/TypeOfTransactionSaga';

export default function* rootSaga() {
  yield all([
   typeOfTransactionSaga()
  ]);
}