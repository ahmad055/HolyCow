import React from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';


const RepurchaseHistory = () => {
  return (
    <div className="row mt-5">
      <div className="col-11 mt-5 mx-auto">
        <div className="text-center">
          <h1 className="text-center">Tickets purchase</h1>
          <button type="submit" className="Repurchase-btn">
            Repurchase Ticket
          </button>
        </div>
        <div className="row">
          <div className="col-11 mt-5 mx-auto">
            <div className="table-div p-4">
              <h1 className="pb-2">Ticket History</h1>

              <div className=" p-1">
                <Scrollbars style={{ width:"100%", height:370 }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Ticket Number</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>921409198-87782</td>
                    <td>cosmos1wj30wcq2qkvev8tdakjcfja4yl0pgptdsd5u5</td>
                  </tr>
                  <tr>
                    <td>921409198-877</td>
                    <td>cosmos1wj30wcq2qkvev8tdakjcfja4yl0pgptdsd5u5</td>
                  </tr>
                  <tr>
                    <td>921409198-87782</td>
                    <td>cosmos1wj30wcqa</td>
                  </tr>
                  <tr>
                    <td>921409198-87782</td>
                    <td>cosmos1wj30wcqa</td>
                  </tr>
                  <tr>
                    <td>921409198-87782</td>
                    <td>cosmos1wj30wcqa</td>
                  </tr>
                  <tr>
                    <td>921409198-87782</td>
                    <td>cosmos1wj30wcqa</td>
                  </tr>
                  <tr>
                    <td>921409198-87782</td>
                    <td>cosmos1wj30wcqa</td>
                  </tr>
                  <tr>
                    <td>921409198-87782</td>
                    <td>cosmos1wj30wcqa</td>
                  </tr>

                  {/* Add more rows as needed */}
                </tbody>
              </table>
              </Scrollbars>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepurchaseHistory;
