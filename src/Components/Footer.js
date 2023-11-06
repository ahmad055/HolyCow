import React from "react";
import a from "../Images/HCP.png";
import e from "../Images/Ellipse 1.png"

const Footer = () => {
  return (
    <div className="row mt-5 footer">
      <div className="col-12">
        <div className="row pt-3">
          <div className="col-11 mx-auto">
            <div className="row">
            <div className="col-6 ">
              <img className="" src={a} alt="abc" />
              <img className="pt-4 " src={e} alt="eclipse"/>
            </div>
            <div className="col-2">

            </div>
            <div className="col-4 d-flex flex-row justify-content-end align-items-center ">
                <p className="me-5 fw-bold ">Privacy Policy</p> 
                <p className="fw-bold">Terms & Conditions</p>
            </div>
               
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
