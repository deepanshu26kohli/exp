import { all } from 'redux-saga/effects';
import typeOfTransactionSaga from './Header/TypeOfTransactionSaga';
import getAllHeadsSaga from './Header/GetAllHeadsSaga';
import AddHeadSaga from './Header/AddHeadSaga';
import DeleteHeadSaga from './Header/DeleteHeadSaga';
import getAllBanksSaga from './Bank/GetAllBanksSaga';
import AddBankSaga from './Bank/AddBankSaga';
import getAllTransactionsSaga from './Transaction/GetAllTransactionSaga';
import AddTransactaionSaga from './Transaction/AddTransactionSaga';
import BalanceSaga from './Balance/BalanceSaga';
import IncomeSaga from './Income/IncomeSaga';
import ExpenseSaga from './Expense/Expense';
import CashSaga from './Cash/Cash';
import BankBalanceSaga from './BankBalance/BankBalanceSaga';

export default function* rootSaga() {
  yield all([
   typeOfTransactionSaga(),
   getAllHeadsSaga(),
   AddHeadSaga(),
   DeleteHeadSaga(),
   getAllBanksSaga(),
   AddBankSaga(),
   getAllTransactionsSaga(),
   AddTransactaionSaga(),
   BalanceSaga(),
   IncomeSaga(),
   ExpenseSaga(),
   CashSaga(),
   BankBalanceSaga()
  ]);
}