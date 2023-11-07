import React from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';

const NFTHistory = () => {
  return (
    <div className="row mt-5">
      <div className="col-11 mt-5 mx-auto">
        <h1 className="text-center">NFT History</h1>
        <div className="row mt-5">
          <div className="col-11 mt-2 mx-auto">
            <div className="table-div p-4">
              <Scrollbars style={{width:"100%", height:400}}>
            <table className="table">
              <thead className="">
                <tr>
                 
                  <th scope="col">Adress</th>
                  <th scope="col">NFT No</th>
                  <th scope="col">Stake/Unstake</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  
                  <td>921409198-87782</td>
                  <td>#54712</td>
                  <td>Stake</td>
                </tr>
                <tr>
                  
                  <td>921409198-87782</td>
                  <td>#54712</td>
                  <td>Unstake</td>
                </tr>
                <tr>
                  
                  <td>921409198-87782</td>
                  <td>#54712</td>
                  <td>Stake</td>
                </tr>
                <tr>
                  
                  <td>921409198-87782</td>
                  <td>#54712</td>
                  <td>Unstake</td>
                </tr>
                <tr>
                  
                  <td>921409198-87782</td>
                  <td>#54712</td>
                  <td>Stake</td>
                </tr>

                <tr>
                
                  <td>921409198-87782</td>
                  <td>#49832</td>
                  <td>Unstake</td>
                </tr>
                <tr>
              
                  <td >921409198-87782</td>
                  <td>#03456</td>
                  <td>Stake</td>
                </tr>
              </tbody>
            </table>
            </Scrollbars>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTHistory;
