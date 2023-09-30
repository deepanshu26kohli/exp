import {takeEvery , put , call, takeLatest} from 'redux-saga/effects'
import { BASEURL,headers,printfxn } from '../../../Config/siteconfig';
import axios from 'axios';


function* deleteHead(action){
    try{
        const response = yield call(axios.delete,`${BASEURL}/delete-head/${action.id}`,{headers});
        printfxn("head delete",response.data)
       
    }catch(err){
        console.log("head delete error",err);
    }
}
function* DeleteHeadSaga(){
    yield takeEvery('DELETE_HEAD',deleteHead)
}
export default DeleteHeadSaga