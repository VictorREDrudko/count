import { useState } from "react";
import { Button } from "../button/Button"
import { Input } from "../input/Input"
import { S } from "./SettingCounter_Styles"

// TYPE PROPS
type SettingCounterType = {
  maxValue: number
  minValue: number
  setNewValues: (newMaxValue: number, newMinValue: number) => void
  changeValidInput: (valid: boolean) => void
}

export const SettingCounter = ({maxValue, minValue, changeValidInput, setNewValues} : SettingCounterType)=> {
  // LOCAL STATE 
  // Entered value from input
  const [maxEnteredValue, setMaxEnteredValue] = useState<number>(maxValue);
  const [minEnteredValue, setMinEnteredValue] = useState<number>(minValue);
  // Active/Inactive button
  const [disabled, setDisabled] = useState(true)

  // FUNCTIONS
  const changeMaxValue = (valueInput: string) => {
    const validMaxValueInput = +valueInput > minEnteredValue;

    validMaxValueInput ? setDisabled(false) : setDisabled(true);
    validMaxValueInput ? changeValidInput(true) : changeValidInput(false);

    setMaxEnteredValue(+valueInput);
  }

  const changeMinValue = (valueInput: string) => {
    const validMinValueInput = +valueInput < maxEnteredValue && +valueInput >= 0 ;

    validMinValueInput ? setDisabled(false) : setDisabled(true);
    validMinValueInput ? changeValidInput(true) : changeValidInput(false);

    setMinEnteredValue(+valueInput);
  }

  const onClickButtonHandler = () => {
    setNewValues(maxEnteredValue, minEnteredValue);
    setDisabled(true);
    localStorage.setItem("maxValue", maxEnteredValue.toString())
    localStorage.setItem("minValue", minEnteredValue.toString())
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