import React, { useState } from "react";
import Layout from './Layout';
import { SubmitButton } from "./StyledComponents";
import {fetchNewsDataByInput} from '../api/Api';
const NewsTemplate = React.lazy(() => import('./NewsTemplate'));

const Research = ()=>{
  const [userInput, setUserInput] = useState("");
  const [newsArr,setNewsArr] =useState([]);
  const [hovered,setHovered]= useState(false);

  function submitClicked(e){
    e.preventDefault();
    fetchNewsDataByInput(userInput).then(res=>{
      if(res.articles){
      setNewsArr(res.articles);
      }
    });
  }

  return(
    <Layout title="Research" description="Research" className="Research">
        <div className="center">
        <form onSubmit={submitClicked}>
          <label>
            Search By Keyword :
            <input type="text" required onChange={e => setUserInput(e.target.value)} value={userInput} name="userInput" />
          </label>
          <SubmitButton primary={hovered===true?"true":undefined} onMouseLeave={()=>setHovered(false)} onMouseEnter={()=>setHovered(true)} type="submit" value="Submit">Submit</SubmitButton>
        </form>
        </div>
        {newsArr.map((e,i)=>(<NewsTemplate newsItem={e} key={i} />))}


    </Layout>
  )
}

export default Research;