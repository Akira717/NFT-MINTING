import React from 'react';

import background_img from '../../image/background.jpg';

import './ConverStyle.css';


import { NavBtnLink, CoverContainer, CoverBg,  ImgBg, CoverContent, CoverH1, CoverP, CoverBtnWrapper } from './converElements';

const CoverSection = () => {
  return (
    <CoverContainer>
      <CoverBg>
      <ImgBg src={background_img}/>
      </CoverBg>
      <CoverContent>
        <CoverH1>Minting WebSite</CoverH1>
        <CoverP>Professional NFT Mint</CoverP>
        <CoverBtnWrapper>
          <NavBtnLink to="/nft1">Get started now</NavBtnLink>
        </CoverBtnWrapper>
      </CoverContent>
    </CoverContainer>
  );
};

export default CoverSection;
