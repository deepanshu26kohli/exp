import { printfxn } from '../../../Config/siteconfig';
export function getExpenseReducer(state=[], action) {
    switch (action.type) {
        case 'GET_EXPENSE_SUCCESS':
            printfxn("Expense",action.data);
            state = action.data
            return state
        case 'GET_EXPENSE_ERROR':
            return action.data
        default:
            return state
    }
}