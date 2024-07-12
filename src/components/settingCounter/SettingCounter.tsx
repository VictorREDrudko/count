import { useState } from "react";
import { Button } from "../button/Button"
import { Input } from "../input/Input"
import styled from "styled-components";

type SettingCounterProps = {
  maxValue: number
  minValue: number
  correctSettingValue: boolean
  changeValue: (valueMax: number, valueMin: number) => void
  changeCorrectSettingValue: (correctValue: boolean) => void
}

export const SettingCounter = ({maxValue, minValue, correctSettingValue, changeValue, changeCorrectSettingValue} : SettingCounterProps)=> {
  // Local State setting value
  const [maxValueSetting, setMaxValueSetting] = useState<number>(maxValue);
  const [minValueSetting, setMinValueSetting] = useState<number>(minValue);

    const changeMaxValue = (valueInput: number) => {
    valueInput > minValueSetting ? changeCorrectSettingValue(false) : changeCorrectSettingValue(true);
    setMaxValueSetting(valueInput)
  }

  const changeMinValue = (valueInput: number) => {
    valueInput < maxValueSetting && valueInput >= 0 ? changeCorrectSettingValue(false) : changeCorrectSettingValue(true)
    setMinValueSetting(valueInput);
  }

  const onClickHandler = () => {
    changeValue(maxValueSetting, minValueSetting)
  }

  const inputStyle = correctSettingValue ? {color: '#b00202'} : {color: '#2c2c2c'};


  return (
    <WrapperSettingCounter>
      <ValueSettingCounterWrapper>
        <div>
          <span>max value:</span>
          <Input style={inputStyle} type="number" value={maxValueSetting} onChange={changeMaxValue}/>
        </div>
        <div>
          <span>min value:</span>
          <Input style={inputStyle} type="number" value={minValueSetting} onChange={changeMinValue}/>
        </div>
      </ValueSettingCounterWrapper>
      <WrapperButton>
        <Button title={"set"} callback={onClickHandler} disabled={maxValue === maxValueSetting && minValue === minValueSetting ? true : correctSettingValue}/>
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