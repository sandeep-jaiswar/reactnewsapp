import React from "react";
import Layout from './Layout';
import { ReactNewsHomeBG, ReactNews, Developer } from "./StyledComponents";

const aboutMe = () =>{
  window.open('https://stackblitz.com/@sandeep-jaiswar');
}

const Home = ()=>{
  return(
    <Layout title="Home" description="home" className="Home">
      <ReactNewsHomeBG>
        <div className="home">
          <div><ReactNews >This App is made using ReactJS by</ReactNews></div>
          <div><a><Developer onClick={aboutMe}>Sandeep Jaiswar</Developer></a></div>
        </div>
      </ReactNewsHomeBG>
    </Layout>
  )
}

export default Home;