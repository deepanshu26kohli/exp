import { printfxn } from '../../../Config/siteconfig';
export function getAllBanksReducer(state=[], action) {
    switch (action.type) {
        case 'GET_ALL_BANKS_SUCCESS':
            // printfxn("Banks",action.data);
            state = action.data
            return state
        case 'GET_ALL_BANKS_ERROR':
            return action.data
        default:
            return state
    }
}