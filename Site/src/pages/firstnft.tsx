import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import FirstNftPanel from '../components/FirstNftPanel';
import Footer from '../components/Footer';
const FirstNFTPage = ({isStoped, isPaused, isRestarted, isConnected, setIsConnected, walletAddress, setWalletAddress}:any) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar isConnected = {isConnected} setIsConnected = {setIsConnected} walletAddress = {walletAddress} setWalletAddress = {setWalletAddress} toggle = {toggle}/>
        <FirstNftPanel isRestarted = {isRestarted} isStoped = {isStoped} isPaused = {isPaused}/>
        <Footer/>
      </>
    );
  };
  
  export default FirstNFTPage;
  