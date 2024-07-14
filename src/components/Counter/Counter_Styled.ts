import styled from "styled-components"

const ValueCounterWrapper = styled.div`
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

export const s = {
  ValueCounterWrapper,
  Message,
  ValueCounter
}