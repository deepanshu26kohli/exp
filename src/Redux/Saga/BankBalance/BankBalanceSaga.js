import {takeEvery , put , call, takeLatest} from 'redux-saga/effects';
import { BASEURL,headers,printfxn } from '../../../Config/siteconfig';
import axios from 'axios';
function* getBankBalance(){
    try{
        const response = yield call(axios.get, `${BASEURL}/getBankAmount`,{headers});
        console.log(response.data)
        yield put({ type: 'GET_BANK_BALANCE_SUCCESS', data: response.data });
    }catch(err){
        console.log("all balance",err);
        yield put({ type: 'GET_BANK_BALANCE_ERROR', data : err });
    }
}
function* BankBalanceSaga(){
    yield takeEvery('FETCH_BANK_BALANCE',getBankBalance)
}
export default BankBalanceSaga