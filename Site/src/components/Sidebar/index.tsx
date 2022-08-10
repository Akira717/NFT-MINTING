import React, { FC , useState, useEffect} from 'react';
import { LanguageImage, SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from "./SidebarElements";
import EnImg from '../../image/lang/lang__en.png';
import ZhImg from '../../image/lang/lang__zh.png';
import './style.css';
export interface SideBarProps {
    // any props that come into the component
    isOpen?: Boolean,
    toggle?: any,
}

const Sidebar : FC<SideBarProps> = ({isOpen, toggle}) => {
  const [showBtn, setshowBtn] = useState(false);

  const deleteUser = () =>
    {
      localStorage.removeItem('user');
      
    }
  
  useEffect(()=>{
    if(localStorage.getItem('user'))
    {
      console.log('user');
      setshowBtn(true);
    }
  });
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>Home</SidebarLink>
          <SidebarLink to="/NFT1" onClick={toggle}>NFT1</SidebarLink>
          <SidebarLink to="/NFT2" onClick={toggle}>NFT2</SidebarLink>
          <SidebarLink to="/Admin" onClick={toggle}>Admin</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/login" >ConnectWallet</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
