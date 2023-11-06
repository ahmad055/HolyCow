import React from "react";
import Navbar from "./Navbar";
import group2 from "../Images/Group 2.png";
import group3 from "../Images/Group 3.png";
import vector1 from "../Images/Vector 1.png";
import { BsPlayFill } from "react-icons/bs";
// import { BsHddStack } from "react-icons/bs";
import p from "../Images/fluent_production-24-regular.svg"

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-11 mx-auto">
          <div className="row">
            <div className="col-lg-3 d-none d-sm-block">
              <img src={group2} alt="group2" />
            </div>
            <div className="col-lg-6">
              <div className="writing-section text-center pt-3 ">
                <h1 className="header-h1 mt-5 d-lg-flex justify-content-center">
                  <div className="me-3">Bridging
                     <img className="vector-image" src={vector1} alt="vector"></img>
                    </div>The<span className="h1-yellow"> Gap</span>
                  {/* <img className='header-vector-img' src={vector1} alt="pic"/> */}
                </h1>
                <p className="pt-2 fw-bold ">
                  Adopting Blockchain Technology to Empower the Lesser Fortunate
                  Through Inclusive Finance and Financial Literacy.
                </p>

                <div className="">
                  <a className="viewProduct-btn mt-3 " href=".">
                    <img className="me-2 mb-1" src={p} alt="p"/>
                    View Products
                  </a>
                  <a className="playVideo-btn" href=".">
                    <BsPlayFill className="play-icon mx-1 " />
                    Watch Video
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-none d-sm-block">
              <img className="float-right" src={group3} alt="group3" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Header;
