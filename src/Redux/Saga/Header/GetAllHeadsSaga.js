import {takeEvery , put , call, takeLatest} from 'redux-saga/effects'
import { BASEURL,headers,printfxn } from '../../../Config/siteconfig';
import axios from 'axios';
function* getAllHeads(){
    try{
        const response = yield call(axios.get, `${BASEURL}/head`,{headers});
        // printfxn("all heads success",response.data)
        yield put({ type: 'GET_ALL_HEADS_SUCCESS', data: response.data });
    }catch(err){
        console.log("all heads error",err);
        yield put({ type: 'GET_ALL_HEADS_ERROR', data : err });
    }
}
function* getAllHeadsSaga(){
    yield takeEvery('FETCH_ALL_HEADS',getAllHeads)
}
export default getAllHeadsSaga