import styled from "styled-components"
import { Button } from "../button/Button"
import { MessageType } from "../../App"
import { S } from "./../settingCounter/SettingCounter_Styles"
import { s } from "./Counter_Styled"

type CounterType = {
  minValue: number
  maxValue: number
  valueCounter: number
  message: MessageType
  increaseCounter: () => void
  resetCounter: () => void
}

export const Counter = ({minValue, maxValue, valueCounter, message, increaseCounter, resetCounter}: CounterType) => {
  // Output ValueCounter and Message
  const outputValueCounter = message ? '' : valueCounter;
  const outputMessage = message ? message : '';

  // Change color ValueCounter and Message
  const colorValueCount = valueCounter === maxValue ? {color: '#b00202'} : {};
  const colorMessage = message === "Incorrect value" ? {color: '#b00202'} : {};

  // Change disabled / active button
  const setDisabledIncButton = message ? true : valueCounter === maxValue;
  const setDisabledResetButton = message ? true : valueCounter === minValue

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