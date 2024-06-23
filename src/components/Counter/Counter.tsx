import styled from "styled-components"
import { Button } from "../Button/button"
import { useState } from "react";

export const Counter = () => {
  let [count, setCount] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const stopCounter = 10;

  const increaseCounter = () => {
    count < stopCounter ? setCount(++count) : setCount(stopCounter);
    count === stopCounter && setIsActive(false);
  }

  const resetCounter = () => {
    setCount(0);
  }

  const colorCountFirst = {
    color: '#2c2c2c',
  }

  const colorCountSecond = {
    color: '#b00202',
  };

  const colorCount = count === stopCounter ? colorCountSecond : colorCountFirst;
  const disabledInc = count === stopCounter ? !isActive : isActive;
  const disabledReset = count === 0 ? !isActive : isActive

  return (
    <WrapperCounter>
      <Count style={colorCount}>{count}</Count>
      <WrapperButton>
        <Button title={"inc"} callback={increaseCounter} active={disabledInc}/>
        <Button title={"reset"} callback={resetCounter} active={disabledReset}/>
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

const Count = styled.div`
  margin: 15px;
  background-color: rgb(128, 253, 106);
  border-radius: 10px;
  color: #2c2c2c;
  font-size: 80px;
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