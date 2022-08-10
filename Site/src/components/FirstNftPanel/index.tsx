/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import contract from '../../contractABI.json';
import { Loading } from 'notiflix';
import { ethers } from 'ethers';

import Icon2 from '../../image/pic02.webp';

import { MintButton, ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon,  ServicesP } from './FirstNftPanelElements';

const FirstNftPanel = ({isStoped, isPaused, isRestarted}:any) => {
  const abi = contract;
  const isConnected = localStorage.getItem('Connected'); 
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const ClientWalletAddress = localStorage.getItem('address');
  const [NFT_Price, setPrice] = useState(0.1);
  const [NFTID, setID] = useState(0);
  let interval: any;
  // let price = 0.1;
  let price = 5;
  let durationTime;
  let time: number;
  let NftID = 0;
  const MINUTE_MS = 10;

  // useEffect(() => {
  //   (async () => {
  //     const countProvider = ethers.getDefaultProvider("http://127.0.0.1:8545/");
  //     const countContract = new ethers.Contract(contractAddress, abi, countProvider);
  //     time = Number(await countContract.getPrice());
  //     // setID(Number(await countContract.getNftID())+1);
  //     // console.log("ID:", Number(await countContract.getNftID()));
  //     // console.log("time:" , time);
  //     // setPrice(0.1);
  //   })() 
  // }, [])


  useEffect (()=>{
    
    if(isPaused === true)
    {
      alert(isPaused);
      clearInterval(interval);
    }
    if(isPaused === false)
    {
      alert(price);
      // alert(3);
      (async () => {
        const countProvider = ethers.getDefaultProvider("http://127.0.0.1:8545/");
        const countContract = new ethers.Contract(contractAddress, abi, countProvider);
        time = Number(await countContract.getPrice());
        setID(Number(await countContract.getNftID())+1);
        // console.log("ID:", Number(await countContract.getNftID()));
        // console.log("time:" , time);
        setPrice(0.1);
      })() 
      interval = setInterval(() => {
        durationTime = Math.floor(Date.now()/1000) - time;
        let minus = 0.2 * Math.floor((durationTime)/7200);
        let finalPrice = price - minus;
        if(finalPrice <= 1.5)
        {
          finalPrice = 1.5;
        }
        // console.log(finalPrice);
        setPrice(Number(finalPrice.toFixed(3)));
      }, MINUTE_MS);
      return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }
    
  }, [isPaused])
  const OnMintHandle = async () => {
 
      try{
        const {ethereum}:any = window;
        if(ethereum)
        {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const nftContract = new ethers.Contract(contractAddress, abi, signer);

          console.log(ClientWalletAddress);
          console.log("Price:", NFT_Price);

          console.log(Number(await nftContract.getNftID()));
          let nftTxn = await nftContract.mintNFT({value: ethers.utils.parseEther(String(NFT_Price))}); 
          Loading.standard();
          console.log("Minting... please wait!");
          await nftTxn.wait();
          console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
          Loading.remove();
          setID(Number(await nftContract.getNftID())+1);
        }
      }catch(err){
          console.log(err);
      }
  }
  return (
    <ServicesContainer id='services'>
      <ServicesH1>First Type Of NFT</ServicesH1>
      <ServicesWrapper>   
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesP>NftID:{NFTID}</ServicesP>
          <ServicesP>Price: {NFT_Price} Ether</ServicesP>
          <MintButton onClick={OnMintHandle}>Mint</MintButton>
          {/* <MintButton>Mint</MintButton> */}
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default FirstNftPanel;


