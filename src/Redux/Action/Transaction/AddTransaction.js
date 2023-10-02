export const postTransaction = (data)=>{
    // console.log("Transaction",data)
    return {
        type : 'POST_TRANSACTION',
        data : data
    }
}