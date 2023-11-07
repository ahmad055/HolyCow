import React from "react";
import cow from "../Images/417-1.png";
import {Scrollbars} from "react-custom-scrollbars-2";
// import b from "../Images/Group 1.png";
const DepositCalculator = () => {
  return (
    <div className="row mt-5">
      <div className="col-11 mt-5 mx-auto">
        <h1 className="text-center">Deposit Calculator</h1>
        <div className="row mt-5">
          <div className="col-md-6 mt-5">
            {/* <Scrollbars> */}
          
            <div className="card card-calculator p-3"> 
              <div className="table-area p-1">
                
            
            <Scrollbars style={{ width: "100%", height: 270 }}>
                <table className="table">
                  <thead className="">
                    <tr>
                      <th scope="col">User ID</th>
                      <th scope="col">Deposit Amount</th>
                      <th scope="col">Deposit Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>User#0038492</td>
                      <td>$ 583.67</td>
                      <td>04 : 50 PM</td>
                    </tr>
                    <tr>
                      <td>User#0038492</td>
                      <td >$ 583.67</td>
                      <td>04 : 50 PM</td>
                    </tr>
                    <tr>
                      <td>User#0038492</td>
                      <td>$ 583.67</td>
                      <td>04 : 50 PM</td>
                    </tr>
                    <tr>
                      <td>User#0038492</td>
                      <td>$ 583.67</td>
                      <td>04 : 50 PM</td>
                    </tr>
                    <tr>
                      <td>User#0038492</td>
                      <td>$ 583.67</td>
                      <td>04 : 50 PM</td>
                    </tr>
                    <tr>
                      <td>User#0038492</td>
                      <td>$ 583.67</td>
                      <td>04 : 50 PM</td>
                    </tr>
                    <tr>
                      <td>User#0038492</td>
                      <td>$ 583.67</td>
                      <td>04 : 50 PM</td>
                    </tr>
                    <tr>
                      <td>User#0038492</td>
                      <td>$ 583.67</td>
                      <td>04 : 50 PM</td>
                    </tr>
                    <tr>
                      <td>User#0038492</td>
                      <td>$ 583.67</td>
                      <td>04 : 50 PM</td>
                    </tr>
                  </tbody>
                </table>
                </Scrollbars>
                
              </div>
             
            </div>
            {/* </Scrollbars> */}
        
          </div>
          <div className="col-md-6 mt-5">
            <div className="container d-flex justify-content-center">
              <img className="calculator-img" src={cow} alt="cow-pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositCalculator;
