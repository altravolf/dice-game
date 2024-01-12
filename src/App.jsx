import { useState, useEffect, useRef } from 'react';
import './App.css';
import LuckyX from './components/LuckyX/LuckyX';

function App() {
  const [toWin, setToWin] = useState(null);
  const [numDice, setNumDice] = useState(null);
  const promptsShown = useRef(false);

  const promptForNumber = (message, defaultValue) => {
    let input;
    do {
      input = prompt(message, defaultValue);
    } while (!Number.isInteger(Number(input)));

    return Number(input);
  };

  useEffect(() => {
    if (!promptsShown.current) {
      const defaultNumDice = 3; // Set your default value here

      let inputNumDice;
      do {
        inputNumDice = promptForNumber('Enter the number of dice (Lesser number better experience!) :', defaultNumDice);
      } while (inputNumDice < 1); // Adjust the minimum value as needed

      setNumDice(inputNumDice);

      let inputToWin;
      do {
        inputToWin = promptForNumber(`Enter the value to win (between ${inputNumDice} and ${inputNumDice * 6}):`);
      } while (inputToWin < inputNumDice || inputToWin > inputNumDice * 6); // Adjust the range based on numDice

      setToWin(inputToWin);
      promptsShown.current = true;
    }
  }, [toWin, numDice]);

  return (
    <>
      {toWin !== null && numDice !== null && <LuckyX toWin={toWin} numDice={numDice} />}
    </>
  );
}

export default App;
