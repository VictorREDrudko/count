import './App.css';
import { Counter } from '../components/counter/Counter';
import { SettingCounter } from '../components/settingCounter/SettingCounter';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../bll/store';
import { increaseCounterAC, InitialStateType, messageCounterAC, MessageType, resetCounterAC, setValueCounterAC } from '../bll/reducers/counter-reducer';
import { changeMaxValueInputAC, changeMinValueInputAC, disabledSettingsAC, InitialStateSettingsType } from '../bll/reducers/settings-counter-reducer';

function App() {
  const counter = useSelector<RootState, InitialStateType>(state => state.counter)
  const settings = useSelector<RootState, InitialStateSettingsType>(state => state.settings)
  const dispatch = useDispatch()

  // Functions
  const increaseCounter = () => {
    dispatch(increaseCounterAC()) 
  }

  const resetCounter = () => {
    dispatch(resetCounterAC()) 
  }

  const changeMaxValueSettings = (valueInput: string) => {
    dispatch(changeMaxValueInputAC(valueInput))
  }

  const changeMinValueSettings = (valueInput: string) => {
    dispatch(changeMinValueInputAC(valueInput))
  }

  const setValueSettings = (newMaxValue: number, newMinValue: number) => {
    dispatch(setValueCounterAC({newMaxValue: newMaxValue, newMinValue: newMinValue}))
  }

  const addMessage = (message: MessageType) => {
    dispatch(messageCounterAC(message));
  }

  const addDisabled = (valid: boolean) => {
    dispatch(disabledSettingsAC(valid));
  }


  // MARKUP
  return (
    <div className="App">
      <SettingCounter settings={settings}
                      addDisabled={addDisabled}
                      addMessage={addMessage}
                      changeMaxValueSettings={changeMaxValueSettings}
                      changeMinValueSettings={changeMinValueSettings}
                      setValueSettings={setValueSettings}
      />

      <Counter  counter={counter}
                increaseCounter={increaseCounter}
                resetCounter={resetCounter}
      />
    </div>
  );
}

export default App;
