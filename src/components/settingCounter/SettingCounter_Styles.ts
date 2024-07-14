import styled from "styled-components"

const WrapperCounter = styled.div`
  max-width: 380px;
  width: 100%;
  border: 3px solid rgb(128, 253, 106);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
`

const WrapperEnteredValue = styled.div`
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

export const S = {
  WrapperCounter,
  WrapperEnteredValue,
  WrapperButton,
}