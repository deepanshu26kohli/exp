import { printfxn } from '../../../Config/siteconfig';
export function getBankBalanceReducer(state=[], action) {
    switch (action.type) {
        case 'GET_BANK_BALANCE_SUCCESS':
            printfxn("Balance Bank",action.data);
            state = action.data
            return state
        case 'GET_BANK_BALANCE_ERROR':
            return action.data
        default:
            return state
    }
}