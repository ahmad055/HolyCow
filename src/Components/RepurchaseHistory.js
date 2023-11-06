import React from "react";

const RepurchaseHistory = () => {
  return (
    <div className="row mt-5">
      <div className="col-11 mt-5 mx-auto">
        <div className="text-center">
          <h1 className="text-center">Total Repurchase Tickets</h1>
          <button type="submit" className="Repurchase-btn">
            Total Repurchase
          </button>
        </div>
        <div className="row">
          <div className="col-11 mt-5 mx-auto">
            <div className="table-div p-5">
              <h1 className="pb-3">Ticket History</h1>
              <div className="table-responsive">
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
                  {/* Add more rows as needed */}
                </tbody>
              </table>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepurchaseHistory;
