import React, {useState} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Dashboard from './pages';
import FirstNFTPage from './pages/firstnft';
import SecondNFTPage from './pages/secondnft';
import AdminPage from './pages/admin';
import './App.css';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [isStoped, setIsStoped] = useState(false);
  const [isRestarted, setIsRestarted] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard isConnected = {isConnected} setIsConnected = {setIsConnected} walletAddress = {walletAddress} setWalletAddress = {setWalletAddress}/>}></Route>
        <Route path='/NFT1' element = {<FirstNFTPage isRestarted = {isRestarted} setIsRestarted = {setIsRestarted} isStoped = {isStoped} setIsStoped = {setIsStoped} isPaused = {isPaused} setIsPaused = {setIsPaused} isConnected = {isConnected} setIsConnected = {setIsConnected} walletAddress = {walletAddress} setWalletAddress = {setWalletAddress}/>}></Route>
        <Route path='/NFT2' element = {<SecondNFTPage isRestarted = {isRestarted} setIsRestarted = {setIsRestarted} isStoped = {isStoped} setIsStoped = {setIsStoped} isPaused = {isPaused} setIsPaused = {setIsPaused} PauisConnected = {isConnected} setIsConnected = {setIsConnected} walletAddress = {walletAddress} setWalletAddress = {setWalletAddress}/>}></Route>
        <Route path='/Admin' element = {<AdminPage isRestarted = {isRestarted} setIsRestarted = {setIsRestarted} isStoped = {isStoped} setIsStoped = {setIsStoped} isPaused = {isPaused} setIsPaused = {setIsPaused} isConnected = {isConnected} setIsConnected = {setIsConnected} walletAddress = {walletAddress} setWalletAddress = {setWalletAddress}/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
