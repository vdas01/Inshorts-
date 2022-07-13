import mongoose from 'mongoose';


const Connection = async (url)=>{
  
    try{
       await mongoose.connect(url);
       console.log("Database Connection Successfull");
    }catch(err){
        console.log("Error while connecting database", err);

        
    }
}
export default Connection;
