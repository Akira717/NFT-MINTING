import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SecondNftPanel from '../components/SecondNftPanel';
import Footer from '../components/Footer';
const SecondNFTPage = ({isStoped,  isPaused, isRestarted, isConnected, setIsConnected, walletAddress, setWalletAddress}:any) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar isConnected = {isConnected} setIsConnected = {setIsConnected} walletAddress = {walletAddress} setWalletAddress = {setWalletAddress} toggle = {toggle}/>
        <SecondNftPanel isRestarted = {isRestarted} isStoped = {isStoped} isPaused = {isPaused}/>
        <Footer/>
      </>
    );
  };
  
  export default SecondNFTPage;
  