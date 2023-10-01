import { combineReducers } from "redux";
import { typeOfTransactionReducer } from "./Header/TypeOfTransaqctionReducer";
import { getAllHeadsReducer } from "./Header/GetAllHeadsReducer";
import { getAllBanksReducer } from "./Bank/GetAllBanksReducer";
 export default combineReducers(
    {
      typeOfTransactionReducer,getAllHeadsReducer,getAllBanksReducer
    }
 )