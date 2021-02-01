import React, { useEffect, useState } from "react";
import Layout from './Layout';
import {fetchAllNewsData} from '../api/Api';
const NewsTemplate = React.lazy(() => import('./NewsTemplate'));

const NewsToday = ()=>{
  const [newsArr,setNewsArr] =useState([]);
  const fetchAllNews = ()=>{
    fetchAllNewsData().then(res=>{
      if(res.articles){
      setNewsArr(res.articles);
      }
    });
  }

  useEffect(()=>{
    fetchAllNews();
  },[])

  return(
    <Layout title="NewsToday" description="NewsToday" className="NewsToday">
      {newsArr.map((e,i)=>(<NewsTemplate newsItem={e} key={i} />))}
    </Layout>
  )
}

export default NewsToday;