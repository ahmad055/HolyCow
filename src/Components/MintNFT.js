import React from "react";
import cow from "../Images/image 7.png";
import group2 from "../Images/Group 2.png";

const MintNFT = () => {
  return (
    <div className="NFT-container">
      <div className="row mt-5">
        <div className="col-11 mt-5 mx-auto">
          <h1 className="text-center">Mint NFT</h1>
          <div className="row">
            <div className="col-lg-4">
              <img className="NFT-cow" src={cow} alt="cow" />
            </div>
            <div className="col-lg-3">
              <img className="mt-5 p-3 d-none d-sm-block" src={group2} alt="pic" />
            </div>
            <div className="col-lg-5">
              <div className="p-5 mt-5 nft-card d-flex justify-content-end">
                <div className="card NFT-search-card p-3">
                  <div className="search-div p-2">
                    <span>
                      No:{" "}
                      <input
                        className="NFT-inputfield p-2"
                        type="Search"
                        placeholder="#89503"
                      />
                    </span>
                  </div>
                  <div className="data-section mt-4">
                    <p>Show NFT</p>
                  </div>
                  <div className="d-flex justify-content-evenly">
                    <button className="StakeNFT-btn">Stake NFT</button> 
                    <button className="StakeNFT-btn mx-1 ">Unstake NFT</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintNFT;
