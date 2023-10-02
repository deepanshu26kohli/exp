import {takeEvery , put , call, takeLatest} from 'redux-saga/effects';
import { BASEURL,headers,printfxn } from '../../../Config/siteconfig';
import axios from 'axios';
function* getExpense(){
    try{
        const response = yield call(axios.get, `${BASEURL}/totalexpense`,{headers});
        // printfxn("all balance",response.data)
        yield put({ type: 'GET_EXPENSE_SUCCESS', data: response.data });
    }catch(err){
        console.log("all balance",err);
        yield put({ type: 'GET_EXPENSE_ERROR', data : err });
    }
}
function* ExpenseSaga(){
    yield takeEvery('FETCH_EXPENSE',getExpense)
}
export default ExpenseSaga