import styled from "styled-components"
import { Button } from "../button/Button"

type CounterType = {
  minValue: number
  maxValue: number
  valueCounter: number
  errorInput: boolean
  message: string
  increaseCounter: () => void
  resetCounter: () => void
}

export const Counter = (props: CounterType) => {
  // Change color ValueCounter 
  const colorCount = props.valueCounter === props.maxValue ? {color: '#b00202'} : {color: '#2c2c2c'};

  const ErrorTrueMessage = props.message === "Enter values and press 'set'" ? {color: '#2c2c2c'} : {color: '#b00202'};

  return (
    <WrapperCounter>
      <ValueCounterWrapper>
        <ValueCounter style={colorCount}>{props.errorInput ? '' : props.valueCounter }</ValueCounter>
        <Message style={ErrorTrueMessage}>{props.errorInput ? props.message : ''}</Message>
      </ValueCounterWrapper>
      <WrapperButton>
        <Button title={"inc"} callback={props.increaseCounter} disabled={props.valueCounter === props.maxValue}/> 
        <Button title={"reset"} callback={props.resetCounter} disabled={props.valueCounter === props.minValue}/>
      </WrapperButton>
    </WrapperCounter>
  )
}

const WrapperCounter = styled.div`
  max-width: 280px;
  width: 100%;
  border: 3px solid rgb(128, 253, 106);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
`

const ValueCounterWrapper = styled.div`
  /* padding: 50px 0; */
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  background-color: rgb(128, 253, 106);
  border-radius: 10px;
`

const Message = styled.span`
  color: #2c2c2c;
  font-size: 35px;
  text-align: center;
  vertical-align: center;
  font-weight: 600;
`

const ValueCounter = styled.span`
color: #2c2c2c;
font-size: 100px;
text-align: center;
vertical-align: center;
font-weight: 600;
`

const WrapperButton = styled.div`
  margin: 15px;
  border: 3px solid rgb(128, 253, 106);
  border-radius: 10px;
  display: flex;
  justify-content: space-around
`