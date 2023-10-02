import {takeEvery , put , call, takeLatest} from 'redux-saga/effects';
import { BASEURL,headers,printfxn } from '../../../Config/siteconfig';
import axios from 'axios';
function* getIncome(){
    try{
        const response = yield call(axios.get, `${BASEURL}/totalincome`,{headers});
        printfxn("all income saga",response.data)
        yield put({ type: 'GET_INCOME_SUCCESS', data: response.data });
    }catch(err){
        console.log("all balance",err);
        yield put({ type: 'GET_INCOME_ERROR', data : err });
    }
}
function* IncomeSaga(){
    yield takeEvery('FETCH_INCOME',getIncome)
}
export default IncomeSaga