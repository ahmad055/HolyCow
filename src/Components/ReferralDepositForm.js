import React from "react";
// import {AiOutlineMail} from "react-icons/ai";
import e from "../Images/ic_round-email.png";

const ReferralDepositForm = () => {
  return (
    <div className="row mt-5">
      <div className="col-11 mt-5 mx-auto">
        <div className="row mt-5">
          <div className="col-md-6 mt-2">
            <div className="card mx-auto card-referral-form">
            <form>
                <div className="form-group  pt-3 p-2">
                  <label className="form-label" >Referral Adress</label>
                  <div className="icon-inputfield d-flex flex-row">
                    <img className="icon-mail" src={e} alt="e"/><input type="email" className=" formInputField" id="exampleInputEmail1" placeholder="Enter Referral Adress"/>
                  </div>
                  
                </div>

                <button type="submit" className="submit-btn mb-2">
                  Register Now
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6 mt-2">
          <div className="card card-referral-form mx-auto">
          <form>
                <div className="form-group  pt-3 p-2">
                  <label className="form-label">Deposit</label>
                  <div className="icon-inputfield d-flex flex-row">
                    <img className="icon-mail" src={e} alt="e"/><input type="email" className=" formInputField" id="exampleInputEmail1" placeholder="Enter Deposit Amount"/>
                  </div>
                  
                </div>

                <button type="submit" className="submit-btn mb-2">
                  Deposit
                </button>
              </form>
            </div>
          </div>
           
        </div>
      </div>
    </div>
  );
};

export default ReferralDepositForm;
