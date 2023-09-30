import { combineReducers } from "redux";
import { typeOfTransactionReducer } from "./Header/TypeOfTransaqctionReducer";
import { getAllHeadsReducer } from "./Header/GetAllHeadsReducer";
 export default combineReducers(
    {
      typeOfTransactionReducer,getAllHeadsReducer
    }
 )