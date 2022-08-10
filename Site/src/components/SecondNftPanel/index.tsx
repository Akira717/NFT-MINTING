/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import contract from '../../contractABI1.json';
import { Loading } from 'notiflix';
import { ethers } from 'ethers';


import { MintButton, ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon,  ServicesP } from './SecondNftPanelElements';

const SecondNftPanel = ({isStoped,isPaused,isRestarted}:any) => {
  const abi = contract;
  const isConnected = localStorage.getItem('Connected'); 
  const contractAddress = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853";
  const ClientWalletAddress = localStorage.getItem('address');
  const [NFT_Price, setPrice] = useState(0.2);
  // let price = 0.1;
  let price = 0.2;
  let durationTime;
  let time: number;
  let NftID = 0;

  const MINUTE_MS = 1000;

  useEffect(() => {
    (async () => {
      const countProvider = ethers.getDefaultProvider("http://127.0.0.1:8545/");
      const countContract = new ethers.Contract(contractAddress, abi, countProvider);
    })()
  }, [])

  const OnMintHandle = async () => {
      try{
        const {ethereum}:any = window;
        if(ethereum)
        {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const nftContract = new ethers.Contract(contractAddress, abi, signer);
          console.log(ClientWalletAddress);
          console.log("Price:", price);
          

          let nftTxn = await nftContract.mintNFT({value: ethers.utils.parseEther(String(price)),gasLimit: 3000000}); 
          Loading.standard();
          console.log("Minting... please wait!");
          await nftTxn.wait();
          // console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
          Loading.remove();
           
          NftID =Number(await nftContract. getNftID());
          alert(NftID);
        }
      }catch(err){
          console.log(err);
      }
  }
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Second Type Of NFT</ServicesH1>
      <ServicesWrapper>   
        <ServicesCard>
          <ServicesP>Price: 0.2 Ether</ServicesP>
          <MintButton onClick={OnMintHandle}>Mint</MintButton>
          {/* <MintButton>Mint</MintButton> */}
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default SecondNftPanel;


