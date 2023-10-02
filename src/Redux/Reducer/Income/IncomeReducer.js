import { printfxn } from '../../../Config/siteconfig';
export function getIncomeReducer(state=[], action) {
    switch (action.type) {
        case 'GET_INCOME_SUCCESS':
            printfxn("Balance",action.data);
            state = action.data
            return state
        case 'GET_INCOME_ERROR':
            return action.data
        default:
            return state
    }
}