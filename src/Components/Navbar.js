import React from 'react';
import Group1 from "../Images/Group 1.png";
// import {AiOutlineShoppingCart} from "react-icons/ai";
import {AiOutlineWallet} from "react-icons/ai"

const Navbar = () => {
  return (
    <div>
        <div className='container-navbar nav-bg'>
        <div className='row '>
          <div className='col-11 mx-auto'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light  ">
                <div className="container-fluid mt-1 ">
                  
                  <a className="navbar-brand" href="./">
                    <img src={Group1} alt="navbarlogo"/>
                  </a>
                  
                  
                
                  
                      
                        
                         
                          <a className='CartIcon-btn ms-5' href="." ><span><AiOutlineWallet className='cart-icon'/> </span>Connect Wallet</a>
                         
                   
      
                    
                 </div>
                </nav>
            </div>

        </div>

     </div>


    </div>
  )
}

export default Navbar