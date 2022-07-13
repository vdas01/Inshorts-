import { data } from '../constants/data.js';
import News from '../model/NewsSchema.js';
export const getNews =async (req,res)=>{
    try{
       let data = await News.find({});
       res.status(200).json(data);
    }catch(err){
           res.status(500).json(data.message)
    }
}