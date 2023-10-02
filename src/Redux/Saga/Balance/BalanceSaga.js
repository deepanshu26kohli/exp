import {takeEvery , put , call, takeLatest} from 'redux-saga/effects';
import { BASEURL,headers,printfxn } from '../../../Config/siteconfig';
import axios from 'axios';
function* getBalance(){
    try{
        const response = yield call(axios.get, `${BASEURL}/getTotalAmount`,{headers});
        // printfxn("all balance",response.data)
        yield put({ type: 'GET_BALANCE_SUCCESS', data: response.data });
    }catch(err){
        console.log("all balance",err);
        yield put({ type: 'GET_BALANCE_ERROR', data : err });
    }
}
function* BalanceSaga(){
    yield takeEvery('FETCH_BALANCE',getBalance)
}
export default BalanceSaga