import React from 'react'
import Header from './Components/Header';
// import About from './Components/About';
import ReferralDepositForm from './Components/ReferralDepositForm';
import DepositCalculator from './Components/DepositCalculator';
import MintNFT from './Components/MintNFT';
import Withdraw  from './Components/Withdraw';
import RepurchaseHistory from './Components/RepurchaseHistory';
import NFTHistory from './Components/NFTHistory';
import Footer from './Components/Footer';

const Home = () => {
  return (
    <div>
        <Header/>
        <ReferralDepositForm/>
        <DepositCalculator/>
        <MintNFT/>
        <Withdraw/>
        <RepurchaseHistory/>
        <NFTHistory/>
        <Footer/>


    </div>
  )
}

export default Home