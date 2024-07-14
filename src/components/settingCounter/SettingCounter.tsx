import { useState } from "react";
import { Button } from "../button/Button"
import { Input } from "../input/Input"
import styled from "styled-components";

type SettingCounterProps = {
  maxValue: number
  minValue: number
  errorInput: boolean
  changeValue: (valueMax: number, valueMin: number) => void
  changeErrorInput: (error: boolean) => void
  addMessage: (message: string) => void
}

export const SettingCounter = ({maxValue, minValue, changeErrorInput, changeValue, addMessage} : SettingCounterProps)=> {
  // Local State setting value
  const [maxValueSetting, setMaxValueSetting] = useState<number>(maxValue);
  const [minValueSetting, setMinValueSetting] = useState<number>(minValue);

    // Local State button
    const [disabled, setDisabled] = useState(true)

    const changeMaxValue = (valueInput: number) => {
      valueInput <= minValueSetting ? setDisabled(true) : setDisabled(false)
      valueInput <= minValueSetting ? changeErrorInput(true) : changeErrorInput(false);
      valueInput <= minValueSetting ? addMessage('Incorrect value') : addMessage('Enter values and press "set"')
      setMaxValueSetting(valueInput)
  }

  const changeMinValue = (valueInput: number) => {
    valueInput >= maxValueSetting || valueInput < 0 ? setDisabled(true) : setDisabled(false)
    valueInput >= maxValueSetting || valueInput < 0 ? changeErrorInput(true) : changeErrorInput(false);
    valueInput >= maxValueSetting || valueInput < 0 ? addMessage('Incorrect value') : addMessage('Enter values and press "set"')
    setMinValueSetting(valueInput);
  }

  const onClickHandler = () => {
    changeValue(maxValueSetting, minValueSetting);
    setDisabled(true);
    addMessage('');
    localStorage.setItem("maxValue", maxValueSetting.toString())
    localStorage.setItem("minValue", minValueSetting.toString())
  }

  const inputStyleMaxValue = maxValueSetting <= minValueSetting ? {color: '#b00202', outline: "2px solid red", backgroundColor: '#fccfcf'} : {color: '#2c2c2c'};
  const inputStyleMinValue = maxValueSetting <= minValueSetting || minValueSetting < 0 ? {color: '#b00202', outline: "2px solid red", backgroundColor: '#fccfcf'} : {color: '#2c2c2c'};


  return (
    <WrapperSettingCounter>
      <ValueSettingCounterWrapper>
        <div>
          <span>max value:</span>
          <Input style={inputStyleMaxValue} type="number" value={maxValueSetting} onChange={changeMaxValue}/>
        </div>
        <div>
          <span>min value:</span>
          <Input style={inputStyleMinValue} type="number" value={minValueSetting} onChange={changeMinValue}/>
        </div>
      </ValueSettingCounterWrapper>
      <WrapperButton>
        <Button title={"set"} callback={onClickHandler} disabled={disabled}/>
      </WrapperButton>
    </WrapperSettingCounter>
  )
}

const WrapperSettingCounter = styled.div`
  max-width: 280px;
  width: 100%;
  border: 3px solid rgb(128, 253, 106);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
`

const ValueSettingCounterWrapper = styled.div`
  /* padding: 50px 0; */
  min-height: 150px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 15px;
  background-color: rgb(128, 253, 106);
  border-radius: 10px;

  & span {
    color: #2c2c2c;
    font-size: 25px;
    font-weight: 700;
    display: inline-block;
    margin-right: 10px;
  }
`

const WrapperButton = styled.div`
  margin: 15px;
  border: 3px solid rgb(128, 253, 106);
  border-radius: 10px;
  display: flex;
  justify-content: space-around
`