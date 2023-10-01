import {takeEvery , put , call, takeLatest} from 'redux-saga/effects';
import { BASEURL,headers,printfxn } from '../../../Config/siteconfig';
import axios from 'axios';
function* getAllBanks(){
    try{
        const response = yield call(axios.get, `${BASEURL}/bank`,{headers});
        // printfxn("all banks success",response.data)
        yield put({ type: 'GET_ALL_BANKS_SUCCESS', data: response.data });
    }catch(err){
        console.log("all banks error",err);
        yield put({ type: 'GET_ALL_BANKS_ERROR', data : err });
    }
}
function* getAllBanksSaga(){
    yield takeEvery('FETCH_ALL_BANKS',getAllBanks)
}
export default getAllBanksSaga