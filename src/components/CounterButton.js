import React from 'react'; //optional
import { useState } from 'react';

function CounterButton(){
  const [clickAmount, setClickAmount] = useState();
    
  return (
    <button className="CounterButton">
      You clicked me X amount of times
    </button>
  );
}

export default CounterButton;