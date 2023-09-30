export const deleteHead = (id)=>{
    console.log("action",id)
    return {
        type : 'DELETE_HEAD',
        id : id
    }
}