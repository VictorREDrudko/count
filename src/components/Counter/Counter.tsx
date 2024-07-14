import { Button } from "../button/Button"
import { S } from "./../settingCounter/SettingCounter_Styles"
import { s } from "./Counter_Styled"

type CounterType = {
  minValue: number
  maxValue: number
  valueCounter: number
  increaseCounter: () => void
  resetCounter: () => void
  changeRenderingComponent: () => void
}

export const Counter = ({minValue, maxValue, valueCounter, increaseCounter, resetCounter, changeRenderingComponent}: CounterType) => {
  // Change color ValueCounter
  const colorValueCount = valueCounter === maxValue ? {color: '#b00202'} : {};

  // Change disabled / active button
  const setDisabledIncButton = valueCounter === maxValue;
  const setDisabledResetButton = valueCounter === minValue;

  return (
    <S.WrapperCounter>
      <s.ValueCounterWrapper>
        <s.ValueCounter style={colorValueCount}>{valueCounter}</s.ValueCounter>
      </s.ValueCounterWrapper>
      <S.WrapperButton>
        <Button title={"inc"} onClickButton={increaseCounter} disabled={setDisabledIncButton}/> 
        <Button title={"reset"} onClickButton={resetCounter} disabled={setDisabledResetButton}/>
        <Button title={"set"} onClickButton={changeRenderingComponent} disabled={false}/>
      </S.WrapperButton>
    </S.WrapperCounter>
  )
}