import { useState } from "react";
import { Button } from "../button/Button"
import { Input } from "../input/Input"

type SettingCounterProps = {
  maxValue: number
  minValue: number
  changeValue: (valueMax: number, valueMin: number) => void
  changeErr: (message: string) => void
}

export const SettingCounter = ({maxValue, minValue, changeValue, changeErr} : SettingCounterProps)=> {
  // Local State setting value
  const [maxValueSetting, setMaxValueSetting] = useState<number>(maxValue);
  const [minValueSetting, setMinValueSetting] = useState<number>(minValue);

  const changeMaxValue = (valueInput: number) => {
    valueInput > minValueSetting ? changeErr("Enter values and press 'set'") : changeErr("Incorrect value")
    setMaxValueSetting(valueInput)
  }

  const changeMinValue = (valueInput: number) => {
    valueInput < maxValueSetting ? changeErr("Enter values and press 'set'") : changeErr("Incorrect value")
    setMinValueSetting(valueInput);
   

  }

  const onClickHandler = () => {
    changeValue(maxValueSetting, minValueSetting)
  }

  return (
    <div>
      <div>max value:</div>
      <Input type="number" value={maxValueSetting} onChange={changeMaxValue}/>
      <div>min value:</div>
      <Input type="number" value={minValueSetting} onChange={changeMinValue}/>
      <div>
        <Button title={"set"} callback={onClickHandler} disabled={false}/>
      </div>
    </div>
  )
}