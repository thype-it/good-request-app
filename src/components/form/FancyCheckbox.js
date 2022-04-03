import React from 'react';
import './fancyCheckbox.scss';

const FancyCheckbox = ({text, register}) => {
  return (
    <label className="control control-checkbox">
        <span>{text}</span>
        <input
        {...register("gdpr", {
        required: "Pre odoslanie žiadosti začiarknite políčko s udelením súhlasu, so spracovávaním osobných udajov"
        })} 
        type="checkbox"
        name='gdpr'
        />
    <div className="control_indicator"></div>
    </label>
  )
}

export default FancyCheckbox