import styled from "styled-components"
import { Button } from "../Button/button"

export const Counter = () => {
  return (
    <WrapperCounter>
      <Count>0</Count>
      <WrapperButton>
        <Button title={"inc"}/>
        <Button title={"reset"}/>
      </WrapperButton>
    </WrapperCounter>
  )
}

const WrapperCounter = styled.div`
  width: 300px;
  height: 30vh;
  border: 3px solid rgb(128, 253, 106);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
`

const Count = styled.div`
  margin: 0 15px;
  background-color: rgb(128, 253, 106);
  border-radius: 10px;
  color: #850c0c;
  font-size: 80px;
  text-align: center;
  vertical-align: center;
  font-weight: 600;
`

const WrapperButton = styled.div`
  margin: 0 15px;
  border: 3px solid rgb(128, 253, 106);
  border-radius: 10px;
  display: flex;
  justify-content: space-around
`