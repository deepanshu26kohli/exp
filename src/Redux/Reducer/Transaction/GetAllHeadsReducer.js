import { printfxn } from '../../../Config/siteconfig';
export function getAllTransactionReducer(state=[], action) {
    switch (action.type) {
        case 'GET_ALL_TRANSACTION_SUCCESS':
            // printfxn("Transaction",action.data);
            state = action.data
            return state
        case 'GET_ALL_TRANSACTION_ERROR':
            return action.data
        default:
            return state
    }
}