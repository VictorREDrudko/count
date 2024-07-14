import { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';
import { SettingCounter } from './components/settingCounter/SettingCounter';

export type MessageType = 'Enter values and press "set"' | '' | 'Incorrect value'

function App() {
  // GLOBAL STATE
  // Value from settings (initial state from local storage)
  const [maxValue, setMaxValue] = useState<number>(localStorage.getItem('maxValue') ? Number(localStorage.getItem('maxValue')) : 5);
  const [minValue, setMinValue] = useState<number>(localStorage.getItem('minValue') ? Number(localStorage.getItem('minValue')) : 0);
  // Counter value 
  const [valueCounter, setValueCounter] = useState<number>(minValue);
  // Boolean value from input (valid/invalid)
  const [validInput, setValidInput] = useState<boolean>(true)
  // Message in the counter
  const [message, setMessage] = useState<MessageType>('')


  // FUNCTIONS
  const increaseCounter = () => {
    setValueCounter(valueCounter + 1);
  }

  const resetCounter = () => {
    setValueCounter(minValue);
  }

  const setNewValues = (newMaxValue: number, newMinValue: number) => {
    setMaxValue(newMaxValue);
    setMinValue(newMinValue);
    setValueCounter(newMinValue);
    setValidInput(true);
  }

  const changeValidInput = (valid: boolean) => {
    setValidInput(valid);
  }

  const addMessage = (message: MessageType) => {
    setMessage(message);
  }

  // MARKUP
  return (
    <div className="App">
      <SettingCounter maxValue={maxValue} 
                      minValue={minValue} 
                      setNewValues={setNewValues}
                      changeValidInput={changeValidInput}
                      addMessage={addMessage}
      />

      <Counter  minValue={minValue} 
                maxValue={maxValue} 
                valueCounter={valueCounter}
                message={message}
                increaseCounter={increaseCounter}
                resetCounter={resetCounter}
      />
    </div>
  );
}

export default App;
