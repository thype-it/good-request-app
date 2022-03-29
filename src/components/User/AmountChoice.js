import React, { useState } from 'react'
import styled from 'styled-components';

const AllAmounts = styled.div`
  display:flex;
  width: 100%;
  & > *{
    margin-right: .8em;
    &:last-of-type {
      margin: 0;
    }
  }
`;

const AmountChoice = ({register, title, setValue}) => {

  const amounts = ["5", "10", "20", "30","50", "100"]; //contribution values
  const idList = [];
  amounts.forEach((e,i) => {
    idList.push({id: ++i})
  });
  idList.push({id: amounts.length+1})

  //handle selection 
  const [isActive, setActive] = useState({
    activeObj: null,
    objects: idList
  });

  const toggleActive = (i) => {
    setActive({...isActive, activeObj: isActive.objects[i]})
  }

  const toggleActiveStyle = (i) => {
    if (isActive.objects[i] === isActive.activeObj) {
      return "contributionAmount active"
    } else {
      return "contributionAmount"
    }
  }


  // handle custom amount
  const [checked, setChecked] = useState(false);
  const cancelCheck = () => setChecked(false);
  const addCheck = () => setChecked(true);

  return (
      <AllAmounts>
        {[...amounts].map((e, i) =>
            <label 
            className= {toggleActiveStyle(i)}
            key={i}
            onClick={() => {toggleActive(i); setValue("customValue", "");}} 
            >
              <span>{e} €</span>
                <input 
                onClick={cancelCheck}
                {...register("value", 
                {required: "Prosím zvolťe sumu, alebo zadajte vlastnú hodotu. "}
                )}
                type="radio"
                value = {e} 
                name="value"
                />
            </label>            
        )}

        <label
          onClick={() => {toggleActive(amounts.length); addCheck();}} 
          className= { `special ${toggleActiveStyle(amounts.length)}`}
        >
            <input
            {...register("value")}
            type="radio"
            value=""
            name="value"
            checked = {checked}
            onChange = {()=>{}}
            />

            <input 
            {...register("customValue", {
              required: {checked},
              pattern: {
                value: /^[1-9][0-9]*$/,
                message: "Číslo sa nesmie začínať nulou"
              },
              min: {
                value: 5,
                message: "Minimálna výška príspevku je 5€"
              }
            })}
            name="customValue"
            type="number" 
            />
            <span>€</span>
        </label>
      </AllAmounts>
  )
}

export default AmountChoice;