import {takeEvery , put , call, takeLatest} from 'redux-saga/effects'
import { BASEURL,headers } from '../../../Config/siteconfig';
import axios from 'axios';
function* getTypeOftransaction(){
    try{
        const response = yield call(axios.get, `${BASEURL}/typeoftransaction`,{headers});
        // console.log("type of transaction",response.data);
        yield put({ type: 'GET_TYPE_OF_TRANSACTION_SUCCESS', data: response.data });
    }catch(err){
        // console.log("type of transaction error",err);
        yield put({ type: 'GET_TYPE_OF_TRANSACTION_ERROR', data : err });
    }
}
function* typeOfTransactionSaga(){
    yield takeEvery('FETCH_TYPE_OF_TRANSACTION',getTypeOftransaction)
}
export default typeOfTransactionSaga