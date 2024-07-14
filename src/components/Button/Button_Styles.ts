import styled from "styled-components";

const ButtonStyle = styled.button`
  padding: 5px 15px;
  margin: 15px;
  border-radius: 10px;
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:active {
    background-color: #2c2c2c !important; 
  }
`

export const S = {
  ButtonStyle,
}