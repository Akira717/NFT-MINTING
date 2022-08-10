import React, {useEffect, useState , useMemo, useCallback} from 'react';
import { IconContext } from 'react-icons/lib';
import { FaBars } from 'react-icons/fa';


import {NavBtn, MenuIcon, NavbarContainer, NavItem, NavLink, NavLogo, NavMenu,ConnectButton, Nav} from './NavElements';


const Navbar = ({isConnected, setIsConnected, walletAddress, setWalletAddress, toggle}:any) => {
  // const [walletAddress, setWalletAddress] = useState("");
    const [currentAccount, setCurrentAccount] = useState(null);

    const checkWalletIsConnected = () => {
      const {ethereum}:any = window;

      if(!ethereum) {
        console.log("Make sure you have Metamask installed!");
        return;
      } else {
       console.log("Wallet exists! We're ready to go!"); 
      }
    }
    
    const connectWalletHandler = async () => {
      //Loading.standard();

        // alert("adf");
        const {ethereum}:any = window;
        // alert("d");
        if(!ethereum) {
          alert("Please install Metamask!");
        }
        try {
          const accounts =  await ethereum.request({method: 'eth_requestAccounts'});

          ethereum.on('accountsChanged', handleAccountsChanged);
          console.log("Found an account! Address: ", accounts[0]);
          setCurrentAccount(accounts[0]);
          
          var str = accounts[0].substring(0,5) + "...";
          var str1 = accounts[0].toString().split('').reverse().join('').substring(0,4);
          str += str1.split('').reverse().join('');
          
          setIsConnected(true); 
          setWalletAddress(str);
          
        } catch(err) {
          console.log(err);
        }
    }

    function handleAccountsChanged(accounts: string | any[]) {
      if(accounts.length === 0) {
        console.log("Please connect to Metamask.");
        setIsConnected(false);
      } else if(accounts[0] !== currentAccount) {
        setCurrentAccount(accounts[0]);
      }
    }

    const connectWalletButton = () => {
      return (
        <ConnectButton onClick={connectWalletHandler}>ConnectWallet</ConnectButton>
      )
    }

    const walletAddressButton = () => {
      return (
        <ConnectButton onClick={connectWalletHandler}>{walletAddress}</ConnectButton>
      )
    }

    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <Nav>
            <NavbarContainer>
              <NavLogo to='/'>
                BXO Pro
              </NavLogo>
            
              <MenuIcon onClick={toggle}>
                <FaBars />
              </MenuIcon>
              <NavMenu>
                <NavItem>
                  <NavLink to='/NFT1'>NFT1</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/NFT2'>NFT2</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/Admin'>Admin</NavLink>
                </NavItem>
              </NavMenu>
              <NavBtn>
                {isConnected ? walletAddressButton() : connectWalletButton()}
              </NavBtn>

            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
      </>
    );
  };

export default Navbar;
