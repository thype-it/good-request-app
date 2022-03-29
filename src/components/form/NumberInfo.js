import React, { useState } from 'react'
import styled from 'styled-components';

//children
import CountryNum from "./CountryNum.js"

const NumWrapper = styled.div`
    position: absolute;
    bottom: 11.6px;
    left: 20px
`;

const NumInput = styled.input`
    padding-top: 35px;
    padding-left: 83px;
`;

const NumberInfo = ({register, title, textClass}) => {

    //template functions
    const [otherNum, setNum] = useState(false);
    const switchNum = () => {setNum(!otherNum)};

  return (
    <>
        <span>{title}</span>
        <NumWrapper onClick={switchNum} className={textClass}>
            {otherNum? <CountryNum code="cz" /> : <CountryNum code="sk" />}
        </NumWrapper>
        <NumInput 
        {...register("phone",{
            pattern: {
            value: /^(9)[0-9]{8}$/,
            message: "Číslo si prosím skontrolujte. Čísla v medzinárodnom formáte sa píšu bez 0 na začiatku. Napr. 905 123 456"
            }
        })}
        type="tel" name='phone'
        />
    </>
  )
}

export default NumberInfo