import React from 'react'; //optional
import { useState } from 'react';

function AngryButton(){
  const [anger, setAnger] = useState()

  return (
    <button className="AngryButton">
      <span>Don't click me too much! </span>
      <span>Rawr!</span>
    </button>
  );
}

export default AngryButton;