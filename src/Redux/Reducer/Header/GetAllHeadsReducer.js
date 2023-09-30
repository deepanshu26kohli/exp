import { printfxn } from '../../../Config/siteconfig';
export function getAllHeadsReducer(state=[], action) {
    switch (action.type) {
        case 'GET_ALL_HEADS_SUCCESS':
            // printfxn("heads",action.data);
            state = action.data
            return state
        case 'GET_ALL_HEADS_ERROR':
            return action.data
        default:
            return state
    }
}