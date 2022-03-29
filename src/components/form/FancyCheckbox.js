import React from 'react';
import './fancyCheckbox.scss';

const FancyCheckbox = ({text, required}) => {
  return (
    <label class="control control-checkbox">
        <span>{text}</span>
        <input type="checkbox" required = {required? true : false} />
    <div class="control_indicator"></div>
    </label>
  )
}

export default FancyCheckbox