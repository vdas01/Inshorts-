
import {data} from './constants/data.js';
import News from './model/NewsSchema.js';
const DefaultData = async ()=>{
    try{
          const dt = await News.insertMany(data);
          console.log("data imported succesfully " );
    }catch(err){
        console.log('Error' + err.message);
    }
}

export default DefaultData; 