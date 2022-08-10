import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import AdminPanel from '../components/AdminPanel';
import Footer from '../components/Footer';
const AdminPage = ({isPaused, isStoped, isRestarted, setIsStoped, setIsPaused, setIsRestarted, isConnected, setIsConnected, walletAddress, setWalletAddress}:any) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar isConnected = {isConnected} setIsConnected = {setIsConnected} walletAddress = {walletAddress} setWalletAddress = {setWalletAddress} toggle = {toggle}/>
        <AdminPanel isPaused = {isPaused} isStoped = {isStoped} isRestarted = {isRestarted} setIsRestarted = {setIsRestarted} setIsStoped = {setIsStoped} setIsPaused = {setIsPaused}/>
        <Footer/>
      </>
    );
  };
  
  export default AdminPage;
  