import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title,text }) => {
  return (
    <>
      {/* breadcrumb start */}
      <div
        className='breadcrumb-area bg-overlay-2 '
        style={{ backgroundImage: 'url("assets/img/banner/bg.png")',height:"10vh"  }}
      >
        <div className='container'>
          <div className='d-flex justify-content-between' style={{width:"65%"}}>
                  <ul className='page-list'>
                    <li>
                      <Link to='/'>HOME</Link>
                    </li>{" "}
                    /<li className='ps-0'>{title}</li>
                  </ul>
                  <h2 className='page-title  mr-4' style={{display:"flex",justifyContent:"center",textAlign:"center",marginRight:"50px"}}>  {title}</h2>
          
          </div>
        </div>
      </div>
      {/* breadcrumb end */}
    </>
  );
};

export default Breadcrumb;
