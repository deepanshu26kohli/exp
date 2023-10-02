import { printfxn } from '../../../Config/siteconfig';
export function getCashReducer(state=[], action) {
    switch (action.type) {
        case 'GET_CASH_SUCCESS':
            printfxn("Cash",action.data);
            state = action.data
            return state
        case 'GET_CASH_ERROR':
            return action.data
        default:
            return state
    }
}