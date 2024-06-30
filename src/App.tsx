import { useState } from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';
import { SettingsCounter } from './components/settingCounter/SettingCounter';

function App() {
  const minValue = 0;
  const maxValue = 10;
  let [valueCounter, setValueCounter] = useState(minValue);

  const increaseCounter = () => {
    valueCounter === maxValue ? setValueCounter(maxValue) : setValueCounter(valueCounter + 1)
  }

  const resetCounter = () => {
    setValueCounter(0);
  }

  return (
    <div className="App">
      <SettingsCounter/>
      <Counter  minValue={minValue} 
                maxValue={maxValue} 
                valueCounter={valueCounter}
                increaseCounter={increaseCounter}
                resetCounter={resetCounter}/>
    </div>
  );
}

export default App;
