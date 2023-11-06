import React from "react";
import Image8 from "../Images/image 8.png";
import u from "../Images/mdi_dollar.png";
const Withdraw = () => {
  return (
    <div className="row mt-5 withdraw">
      <div className="col-11 mt-5 withdraw-form mx-auto">
        <h1 className="text-center">Withdraw</h1>
        <div className="row withdraw-form mt-5">
          <div className="col-lg-6 withdraw-form p-5 mt-5">
            <div className="card p-2">
              <form>
                <div class="form-group  pt-3 p-2">
                  <h4 className="form-label" for="exampleInputEmail1">
                    Withdraw Amount
                  </h4>
                  <div className="icon-inputfield d-flex flex-row">
                    <img className="icon-mail" src={u} alt="e"/><input type="email" className=" formInputField" id="exampleInputEmail1" placeholder="$586.09"/>
                  </div>
                </div>

                <button type="submit" className="submit-btn mb-2">
                  Withdraw
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <img  className="img-fluid" src={Image8} alt="MobileImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
