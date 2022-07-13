import axios from 'axios';
export const getNews= async()=>{
    const url = 'http://localhost:8000';

    try{
       return await axios.get(`${url}/news`)
    }catch(err){
        console.log("Error while calling ", err);
    }
}