import React, { useRef } from "react";
import { Wrapper, Title, ReadMore } from "./StyledComponents";



const NewsTemplate = ({ newsItem }) => {
  const readMore = () =>{
    window.open(newsItem.url);
  }

  const wrapper = useRef(null);




  return (
    <>
      <Wrapper ref={wrapper} onMouseLeave={()=>wrapper.current.style.boxShadow=''} onMouseEnter={()=>wrapper.current.style.boxShadow='10px 10px 20px #cccccc'}>
        <div className="row">
          <div className="col-sm-3">
            <img className="img-fluid rounded" src={newsItem.urlToImage} />
          </div>
          <div className="col-sm-9">
            <Title>{newsItem.title}</Title> 
            <div>{newsItem.description}</div>
            <a className="right">
              <ReadMore onClick={readMore}>Read More ...</ReadMore>
            </a>
          </div>
        </div>
      </Wrapper>
      <br />
    </>
  )
}

export default NewsTemplate;