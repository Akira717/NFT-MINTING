/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import contract from '../../contractABI.json';
import contract1 from '../../contractABI1.json';
import { Loading } from 'notiflix';
import { ethers } from 'ethers';


import { MintButton, ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard,   ServicesP } from './AdminPanelElements';

const AdminPanel = ({isPaused, isStoped, isRestarted, setIsStoped, setIsPaused, setIsRestarted}:any) => {
  
  const abi = contract;
  const abi1 = contract1;
  const isConnected = localStorage.getItem('Connected'); 
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const contractAddress1 = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853";
  
  useEffect(() => {
    (async () => {
      const countProvider = ethers.getDefaultProvider("http://127.0.0.1:8545/");
      const countContract = new ethers.Contract(contractAddress, abi, countProvider);
      const countContract1 = new ethers.Contract(contractAddress1, abi1, countProvider);
    })()
  }, [])

   const OnPauseHandle1 = async () => {
            try{
                const {ethereum}:any = window;
                if(ethereum)
                {
                    const provider = new ethers.providers.Web3Provider(ethereum);
                    const signer = provider.getSigner();
                    const nftContract = new ethers.Contract(contractAddress, abi, signer);

                    console.log(nftContract);
                    let nftTxn = await nftContract.pause(true , {gasLimit:300000});
                    alert(isPaused);
                    Loading.standard();
                    await nftTxn.wait();
                    Loading.remove();
                    setIsPaused(true);
                    // await sleep(10000);
                }
            }catch(err){
                console.log(err);
            }
   }

   const sleep = (ms: number | undefined) => {
    alert(ms);
      return new Promise(
        resolve => setTimeout(resolve, ms)
      );
   }

   const OnStopHandle1 = async () => {
            try{
                const {ethereum}:any = window;
                if(ethereum)
                {
                    const provider = new ethers.providers.Web3Provider(ethereum);
                    const signer = provider.getSigner();
                    const nftContract = new ethers.Contract(contractAddress, abi, signer);
                    let nftTxn = await nftContract.stop(true);
                    Loading.standard();
                    await nftTxn.wait();
                    Loading.remove();
                    setIsStoped(true);
                    alert(isStoped);
                }
            }catch(err){
                console.log(err);
            }
   }
   const OnRestartHandle1 = async () => {
            try{
                const {ethereum}:any = window;
                if(ethereum)
                {
                    const provider = new ethers.providers.Web3Provider(ethereum);
                    const signer = provider.getSigner();
                    const nftContract = new ethers.Contract(contractAddress, abi, signer);
                    let nftTxn = await nftContract.restart(true);
                    Loading.standard();
                    await nftTxn.wait();
                    Loading.remove();
                    setIsRestarted(true);
                    setIsStoped(false);
                    setIsPaused(false);
                    alert(isRestarted);
                }
            }catch(err){
                console.log(err);
            }
   }

   const OnPauseHandle2 = async () => {
          try{
              const {ethereum}:any = window;
              if(ethereum)
              {
                  const provider = new ethers.providers.Web3Provider(ethereum);
                  const signer = provider.getSigner();
                  const nftContract = new ethers.Contract(contractAddress1, abi1, signer);

                  console.log(nftContract);
                  let nftTxn = await nftContract.pause(true , {gasLimit:300000});
                  alert(isPaused);
                  Loading.standard();
                  await nftTxn.wait();
                  Loading.remove();
                  setIsPaused(true);
                  // await sleep(10000);
              }
          }catch(err){
              console.log(err);
          }

    }
    const OnStopHandle2 = async () => {
            try{
                const {ethereum}:any = window;
                if(ethereum)
                {
                    const provider = new ethers.providers.Web3Provider(ethereum);
                    const signer = provider.getSigner();
                    const nftContract = new ethers.Contract(contractAddress1, abi1, signer);
                    let nftTxn = await nftContract.stop(true);
                    Loading.standard();
                    await nftTxn.wait();
                    Loading.remove();
                    setIsStoped(true);
                    alert(isStoped);
                }
            }catch(err){
                console.log(err);
            }
    }
    const OnRestartHandle2 = async () => {
            try{
                const {ethereum}:any = window;
                if(ethereum)
                {
                    const provider = new ethers.providers.Web3Provider(ethereum);
                    const signer = provider.getSigner();
                    const nftContract = new ethers.Contract(contractAddress1, abi1, signer);
                    let nftTxn = await nftContract.restart(true);
                    Loading.standard();
                    await nftTxn.wait();
                    Loading.remove();
                    setIsRestarted(true);
                    setIsStoped(false);
                    setIsPaused(false);
                    alert(isRestarted);
                }
            }catch(err){
                console.log(err);
            }
    }
  return (
    <ServicesContainer id='services'>
      <ServicesH1>AdminPanel</ServicesH1>
      <ServicesWrapper>   
        <ServicesCard>
          <ServicesP>NFT1</ServicesP>
          <MintButton onClick={OnPauseHandle1}>Pause</MintButton>
          <MintButton onClick={OnStopHandle1}>Stop</MintButton>
          <MintButton onClick={OnRestartHandle1}>Restart</MintButton>
        </ServicesCard>
        <ServicesCard>
          <ServicesP>NFT2</ServicesP>
          <MintButton onClick={OnPauseHandle2}>Pause</MintButton>
          <MintButton onClick={OnStopHandle2}>Stop</MintButton>
          <MintButton onClick={OnRestartHandle2}>Restart</MintButton>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default AdminPanel;


