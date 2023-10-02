import { printfxn } from '../../../Config/siteconfig';
export function getBalanceReducer(state=[], action) {
    switch (action.type) {
        case 'GET_BALANCE_SUCCESS':
            printfxn("Balance",action.data);
            state = action.data
            return state
        case 'GET_BALANCE_ERROR':
            return action.data
        default:
            return state
    }
}