import React from 'react';
import { useState } from 'react';
import './App.css';
import AngryButton from './components/AngryButton'
import CounterButton from './components/CounterButton'
import LightSwitchButton from './components/LightSwitchButton'
import TextRepeaterButton from './components/TextRepeaterButton'

function App() {
  const [angryApp, setAngryApp] = useState(0)
  const increaseAnger = (amount) => {
    if (angryApp < 1) {
      setAngryApp(angryApp + amount);
    } else {
      setAngryApp(0);
    }
  }
  const [light, setLight] = useState('off');
  const switchLight = () => {
    setLight(light === "on" ? "off" : "on");
    increaseAnger(0.1);
  }
  const dark = (light === 'off') ? 'dark' : ' ';

  return (
    <div className={`App ${dark}`}>
      <h1>{angryApp < 1 ? "Fancy Buttons!" : "YOU'RE CLICKING TOO MANY BUTTONS!"}</h1>
      <section>
        <AngryButton increaseAnger={increaseAnger} />
        <CounterButton increaseAnger={increaseAnger} />
        <LightSwitchButton light={light} switchLight={switchLight} increaseAnger={increaseAnger} />
        <TextRepeaterButton increaseAnger={increaseAnger} />
      </section>
    </div>
  );
}

export default App;
