export const postBank = (data)=>{
    // console.log("bank action",data)
    return {
        type : 'POST_BANK',
        data : data
    }
}