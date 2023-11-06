import React from "react";

const NFTHistory = () => {
  return (
    <div className="row mt-5">
      <div className="col-11 mt-5 mx-auto">
        <h1 className="text-center">NFT History</h1>
        <div className="row mt-5">
          <div className="col-11 mt-5 mx-auto">
            <div className="table-div p-4">
            <table class="table">
              <thead className="">
                <tr>
                 
                  <th scope="col">Adress</th>
                  <th scope="col">NFT No</th>
                  <th scope="col">State/Unstate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  
                  <td>921409198-87782</td>
                  <td>#54712</td>
                  <td>State</td>
                </tr>
                <tr>
                
                  <td>921409198-87782</td>
                  <td>#49832</td>
                  <td>Unstate</td>
                </tr>
                <tr>
              
                  <td >921409198-87782</td>
                  <td>#03456</td>
                  <td>State</td>
                </tr>
              </tbody>
            </table>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTHistory;
