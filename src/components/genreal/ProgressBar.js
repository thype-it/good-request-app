import React from 'react'
import styled, {keyframes} from 'styled-components'

const enterActive = keyframes`
    from {
        transform: scaleX(.5);
    }
    to {
        transform: scaleX(1);
    }
`;

const MyProgress = styled.div`
    width: 95px;
    height: 5px;
    display: flex;
    justify-content: space-between;
    margin: 1em 0;
    & > * {
        border-radius: 10px;
        height: 100%;
        width: 25%;
        background: gray;
        animation: ${enterActive} .8s ease-out;
        &.active {
            width: 41%;
        }
    }
`;

const ProgressBar = ({activeEl}) => {
  return (
    <MyProgress className='ProgressBar'>
        <div className={activeEl == 1 ? 'active' : null }></div>
        <div className={activeEl == 2 ? 'active' : null }></div>
        <div className={activeEl == 3 ? 'active' : null }></div>
    </MyProgress>
  )
}

export default ProgressBar