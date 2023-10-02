import { combineReducers } from "redux";
import { typeOfTransactionReducer } from "./Header/TypeOfTransaqctionReducer";
import { getAllHeadsReducer } from "./Header/GetAllHeadsReducer";
import { getAllBanksReducer } from "./Bank/GetAllBanksReducer";
import { getAllTransactionReducer } from "./Transaction/GetAllHeadsReducer";
import { getBalanceReducer } from "./Balance/BalanceReducer";
import { getIncomeReducer } from "./Income/IncomeReducer";
import { getExpenseReducer } from "./Expense/ExpenseReducer";
import { getCashReducer } from "./Cash/CashReducer";
import { getBankBalanceReducer } from "./BankBalance/BankBalanceReducer";
 export default combineReducers(
    {
      typeOfTransactionReducer,getAllHeadsReducer,getAllBanksReducer,getAllTransactionReducer,getBalanceReducer,getIncomeReducer,
      getExpenseReducer,
      getCashReducer,
      getBankBalanceReducer
    }
 )