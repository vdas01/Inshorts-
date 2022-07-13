import React,{useEffect,useState} from 'react'
import {Box} from '@mui/material';
import { getNews } from '../service/api';
import Article from './Article';

const Articles = () => {
  const [news,setNews] = useState([]);
    useEffect(()=>{
           dailyNews();
    },[]);

const dailyNews= async ()=>{
    let response =await getNews();   //return pormise
    // console.log(response.data);
    setNews(response.data);
}
  return (
    <Box>
      {
        news.map((data) => (
         <Article data ={data}/>
        ))
      }
    </Box>
  )
}

export default Articles
