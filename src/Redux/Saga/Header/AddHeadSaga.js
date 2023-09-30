import {takeEvery , put , call, takeLatest} from 'redux-saga/effects'
import { BASEURL,headers,printfxn } from '../../../Config/siteconfig';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function* postHead(action){
    try{
        const response = yield call(axios.post, `${BASEURL}/add-head`,action.data,{headers});
        // printfxn("all heads success",response.data)
        // yield put({ type: 'GET_ALL_HEADS_SUCCESS', data: response.data });
    }catch(err){
        console.log("all heads error",err);
        // yield put({ type: 'GET_ALL_HEADS_ERROR', data : err });
    }

}
function* AddHeadSaga(){
    yield takeEvery('POST_HEAD',postHead)
}
export default AddHeadSaga