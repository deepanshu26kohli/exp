export function typeOfTransactionReducer(state=[], action) {
    switch (action.type) {
        case 'GET_TYPE_OF_TRANSACTION_SUCCESS':
            // console.log("reducer",action.data)
            state = action.data
            return state
        case 'GET_TYPE_OF_TRANSACTION_ERROR':
            return action.data
        default:
            return state
    }
}