import {takeEvery , put , call, takeLatest} from 'redux-saga/effects';
import { BASEURL,headers,printfxn } from '../../../Config/siteconfig';
import axios from 'axios';
function* getCash(){
    try{
        const response = yield call(axios.get, `${BASEURL}/getCashAmount`,{headers});
        // printfxn("all balance",response.data)
        yield put({ type: 'GET_CASH_SUCCESS', data: response.data });
    }catch(err){
        console.log("all balance",err);
        yield put({ type: 'GET_CASH_ERROR', data : err });
    }
}
function* CashSaga(){
    yield takeEvery('FETCH_CASH',getCash)
}
export default CashSaga