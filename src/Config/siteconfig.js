export const BASEURL = "http://127.0.0.1:8000/api"; 
export const LOGINURL = "/login";
export let token =  localStorage.getItem('_k');
let headers;
if(token!=null){
  token = [...token].reverse().join(""); 
  headers = {
    Authorization: `Bearer ${token}`,
  }
}
export {headers}


  
