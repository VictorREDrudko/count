import { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';
import { SettingCounter } from './components/settingCounter/SettingCounter';

function App() {
  // GLOBAL STATE
  // Value from settings (initial state from local storage)
  const [maxValue, setMaxValue] = useState<number>(localStorage.getItem('maxValue') ? Number(localStorage.getItem('maxValue')) : 5);
  const [minValue, setMinValue] = useState<number>(localStorage.getItem('minValue') ? Number(localStorage.getItem('minValue')) : 0);
  // Counter value 
  const [valueCounter, setValueCounter] = useState<number>(minValue);
  // Boolean value from input (valid/invalid)
  const [validInput, setValidInput] = useState<boolean>(true)
  // Visible components
  const [visible, setVisible] = useState<boolean>(true)


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
    setVisible(!visible);
  }

  const changeValidInput = (valid: boolean) => {
    setValidInput(valid);
  }

  const changeRenderingComponent = () => {
    setVisible(!visible);
  }

  const renderingComponent = visible ? <Counter minValue={minValue} 
                                                maxValue={maxValue} 
                                                valueCounter={valueCounter}
                                                increaseCounter={increaseCounter}
                                                resetCounter={resetCounter} 
                                                changeRenderingComponent={changeRenderingComponent}/> 
                                    : <SettingCounter maxValue={maxValue} 
                                                      minValue={minValue} 
                                                      setNewValues={setNewValues}
                                                      changeValidInput={changeValidInput}/> 

  // MARKUP
  return (
    <div className="App">{renderingComponent}</div>
  );
}

export default App;
