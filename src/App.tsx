import { useState } from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';
import { SettingCounter } from './components/settingCounter/SettingCounter';

function App() {
  // Global State setting value
  const [maxValue, setMaxValue] = useState(3);
  const [minValue, setMinValue] = useState(0);
  // Global State counter value
  const [valueCounter, setValueCounter] = useState<number>(minValue);

  // Global State Error/Enter
  const [correctSettingValue, setCorrectSettingValue] = useState(true)

  // Global State message
  const [message, setMessage] = useState<string>('')


  const increaseCounter = () => {
    valueCounter === maxValue ? setValueCounter(maxValue) : setValueCounter(valueCounter + 1)
  }

  const resetCounter = () => {
    setValueCounter(minValue);
  }

  const changeValue = (valueMax: number, valueMin: number) => {
    setMaxValue(valueMax);
    setMinValue(valueMin);
    setValueCounter(valueMin);
    setCorrectSettingValue(false);
  }

  const changeErr = (correctValue: boolean) => {
    setCorrectSettingValue(correctValue);
    // setMessage(message);
  }

  return (
    <div className="App">

      <SettingCounter maxValue={maxValue} 
                      minValue={minValue} 
                      changeValue={changeValue}
                      changeCorrectSettingValue={changeErr}
                      correctSettingValue={correctSettingValue}/>

        
      <Counter  minValue={minValue} 
                maxValue={maxValue} 
                valueCounter={valueCounter}
                increaseCounter={increaseCounter}
                resetCounter={resetCounter}
                correctSettingValue={correctSettingValue}
                message={message}/>
    </div>
  );
}

export default App;
