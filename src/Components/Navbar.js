import React from "react";
import Group1 from "../Images/Group 1.png";
// import {AiOutlineShoppingCart} from "react-icons/ai";
import { AiOutlineWallet } from "react-icons/ai";

// import {AftContractAddress, AftContractAbi} from '../utils/Contract';

const Navbar = () => {
  


  return (
    <div>
      <div className="container-navbar nav-bg">
        <div className="row ">
          <div className="col-11 mx-auto">
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light  ">
              <div className="container-fluid mt-1 ">
                <a className="navbar-brand" href="./">
                  <img src={Group1} alt="navbarlogo" />
                </a>

                <button style={{border:"none"}} className="CartIcon-btn ms-5" >

                  <span>
                    <AiOutlineWallet className="cart-icon" />{" "}
                  </span>
                  Connect Wallet
                  
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
