import React, { useState } from 'react';
import styled from 'styled-components';

//assets
import { ReactComponent as Paw } from "../../assets/icons/paw.svg"
import { ReactComponent as Wallet } from "../../assets/icons/wallet.svg"

const flexcenter = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Contribution = styled.div`
width: 100%;
display: flex;
margin-bottom: 3em;
> * {
    ${flexcenter}
    border-radius: 0 30px 30px 0;
    align-items: flex-start;
    justify-content: space-evenly;
    min-height: 182px;
    width: 50%;
    padding: 0 2em;
    cursor: pointer;
    &:nth-child(1){
        border-radius: 30px 0 0 30px;
    }
}
.icon-wrapper {
    ${flexcenter}
    width: 30px;
    height: 30px;
    padding: 1.3em;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.2);
    box-sizing: content-box;
}
svg {
    width: 90%;
    path {
        border-radius: none;
    }
}
`;

const ContributionChoice = ({ContributionClick}) => {
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
      };
  return (
      <>
        <Contribution className='contribution'>
            <div
                className={isActive ? null : "active"} 
                onClick={ () => {ContributionClick(true); handleToggle();}}>
                <span className='icon-wrapper'>
                    <Wallet/>
                </span>
                <p>Chcem finančne prispieť konkrétnemu útulku</p>
            </div>
            <div 
                className={isActive ? "active" : null} 
                onClick={ ()=> {ContributionClick(false); handleToggle();}}>
                <span className='icon-wrapper'>
                    <Paw/>
                </span>
                <p>Chcem finančne prispieť celej nadácii</p>
            </div>
        </Contribution>


      </>
  )
}

export default ContributionChoice;