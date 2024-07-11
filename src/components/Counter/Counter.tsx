import styled from "styled-components"
import { Button } from "../button/Button"

type CounterType = {
  minValue: number
  maxValue: number
  valueCounter: number
  error: boolean
  message: string
  increaseCounter: () => void
  resetCounter: () => void
}

export const Counter = (props: CounterType) => {
  // Change color ValueCounter 
  const colorCount = props.valueCounter === props.maxValue ? {color: '#b00202'} : {color: '#2c2c2c'};

  return (
    <WrapperCounter>
      <ValueCounter style={colorCount}>{props.error ? props.message : props.valueCounter }</ValueCounter>
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

const ValueCounter = styled.div`
  margin: 15px;
  background-color: rgb(128, 253, 106);
  border-radius: 10px;
  color: #2c2c2c;
  font-size: 40px;
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