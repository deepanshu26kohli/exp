import {takeEvery , put , call, takeLatest} from 'redux-saga/effects'
import { BASEURL,headers,printfxn } from '../../../Config/siteconfig';
import axios from 'axios';


function* postBank(action){
    try{
        const response = yield call(axios.post, `${BASEURL}/add-bank`,action.data,{headers});
        // printfxn("post bank success",response.data)
        // yield put({ type: 'GET_ALL_HEADS_SUCCESS', data: response.data });
    }catch(err){
        console.log("all heads error",err);
        // yield put({ type: 'GET_ALL_HEADS_ERROR', data : err });
    }

}
function* AddBankSaga(){
    yield takeEvery('POST_BANK',postBank)
}
export default AddBankSaga