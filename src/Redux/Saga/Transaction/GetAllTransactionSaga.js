import {takeEvery , put , call, takeLatest} from 'redux-saga/effects'
import { BASEURL,headers,printfxn } from '../../../Config/siteconfig';
import axios from 'axios';
function* getAllTransactions(){
    try{
        const response = yield call(axios.get, `${BASEURL}/transaction`,{headers});
        // printfxn("all transaction success",response.data)
        yield put({ type: 'GET_ALL_TRANSACTION_SUCCESS', data: response.data });
    }catch(err){
        console.log("all heads error",err);
        yield put({ type: 'GET_ALL_TRANSACTION_ERROR', data : err });
    }
}
function* getAllTransactionsSaga(){
    yield takeEvery('FETCH_ALL_TRANSACTIONS',getAllTransactions)
}
export default getAllTransactionsSaga