import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ConverSection from '../components/Conversection';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
const Dashboard = ({isConnected, setIsConnected, walletAddress, setWalletAddress}:any) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar isConnected = {isConnected} setIsConnected = {setIsConnected} walletAddress = {walletAddress} setWalletAddress = {setWalletAddress} toggle = {toggle}/>
            <ConverSection />
            <Footer/>
        </>
    );
};

export default Dashboard;
