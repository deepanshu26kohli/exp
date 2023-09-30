export const postHead = (data)=>{
    console.log(data)
    return {
        type : 'POST_HEAD',
        data : data
    }
}