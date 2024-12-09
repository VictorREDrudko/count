import { Button } from "../button/Button"
import { Input } from "../input/Input"
import { S } from "./SettingCounter_Styles"
import { InitialStateType, MessageType } from "../../bll/reducers/counter-reducer";
import { InitialStateSettingsType } from "../../bll/reducers/settings-counter-reducer";

// TYPE PROPS
type SettingCounterType = {
  settings: InitialStateSettingsType
  addDisabled: (valid: boolean) => void
  addMessage: (message: MessageType) => void
  changeMaxValueSettings: (value: string) => void
  changeMinValueSettings: (value: string) => void
  setValueSettings: (newMaxValue: number, newMinValue: number) => void
}

export const SettingCounter = (
                                {addMessage,
                                settings,
                                changeMaxValueSettings, 
                                changeMinValueSettings, 
                                setValueSettings, 
                                addDisabled} : SettingCounterType)=> {
  
  const disabled = settings.disabled;
  const maxEnteredValue = settings.maxValueInput;
  const minEnteredValue = settings.minValueInput;

  const changeMaxValue = (valueInput: string) => {
    const validMaxValueInput = +valueInput > minEnteredValue;

    validMaxValueInput ? addDisabled(false) : addDisabled(true);
    validMaxValueInput ? addMessage('Enter values and press "set"') : addMessage('Incorrect value');

    changeMaxValueSettings(valueInput)
  }

  const changeMinValue = (valueInput: string) => {
    const validMinValueInput = +valueInput < maxEnteredValue && +valueInput >= 0 ;

    validMinValueInput ? addDisabled(false) : addDisabled(true);
    validMinValueInput ? addMessage('Enter values and press "set"') : addMessage('Incorrect value');

    changeMinValueSettings(valueInput)
  }

  const onClickButtonHandler = () => {
    addDisabled(true);
    addMessage('');
    localStorage.setItem("maxValue", settings.maxValueInput.toString())
    localStorage.setItem("minValue", settings.minValueInput.toString())
    setValueSettings(settings.maxValueInput, settings.minValueInput)
  }

  // Style invalid input
  const invalidInputStyle = {
    color: '#b00202', 
    outline: "2px solid red", 
    backgroundColor: '#fccfcf'
  }

  const inputStyleMaxValue = maxEnteredValue <= minEnteredValue ? invalidInputStyle : {};
  const inputStyleMinValue = maxEnteredValue <= minEnteredValue || minEnteredValue < 0 ? invalidInputStyle : {};

  // MARKUP
  return (
    <S.WrapperCounter>
      <S.WrapperEnteredValue>
        <div>
          <span>max value:</span>
          <Input style={inputStyleMaxValue} type="number" value={maxEnteredValue.toString()} onChangeInput={changeMaxValue}/>
        </div>
        <div>
          <span>min value:</span>
          <Input style={inputStyleMinValue} type="number" value={minEnteredValue.toString()} onChangeInput={changeMinValue}/>
        </div>
      </S.WrapperEnteredValue>
      <S.WrapperButton>
        <Button title={"set"} onClickButton={onClickButtonHandler} disabled={disabled}/>
      </S.WrapperButton>
    </S.WrapperCounter>
  )
}