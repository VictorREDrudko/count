import { Button } from "../button/Button"
import { S } from "./../settingCounter/SettingCounter_Styles"
import { s } from "./Counter_Styled"
import { InitialStateType, MessageType } from "../../reducers/counter-reducer"

type CounterType = {
  counter: InitialStateType
  increaseCounter: () => void
  resetCounter: () => void
}

export const Counter = ({increaseCounter, resetCounter, counter}: CounterType) => {
  const value = counter.valueCounter
  const maxValue = counter.maxValue
  const message = counter.message

  // Output ValueCounter and Message
  const outputValueCounter = message ? '' : value;
  const outputMessage = message ? counter.message : '';

  // Change color ValueCounter and Message
  const colorValueCount = value === maxValue ? {color: '#b00202'} : {};
  const colorMessage = message === "Incorrect value" ? {color: '#b00202'} : {};

  // Change disabled / active button
  const setDisabledIncButton = message ? true : value === maxValue;
  const setDisabledResetButton = message ? true : value === counter.minValue

  return (
    <S.WrapperCounter>
      <s.ValueCounterWrapper>
        <s.ValueCounter style={colorValueCount}>{outputValueCounter}</s.ValueCounter>
        <s.Message style={colorMessage}>{outputMessage}</s.Message>
      </s.ValueCounterWrapper>
      <S.WrapperButton>
        <Button title={"inc"} onClickButton={increaseCounter} disabled={setDisabledIncButton}/> 
        <Button title={"reset"} onClickButton={resetCounter} disabled={setDisabledResetButton}/>
      </S.WrapperButton>
    </S.WrapperCounter>
  )
}