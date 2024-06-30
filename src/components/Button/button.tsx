import styled from "styled-components"

type ButtonPropsType = {
  title: string
  disabled: boolean
  callback: ()=>void
}

export const Button = ({title, disabled, callback} : ButtonPropsType) => {
  const backgroundColorDisabledButton = {
    backgroundColor: '#676767',
    color: '#2c2c2c',
  };

  const backgroundColorActiveButton = {
    backgroundColor: 'rgb(128, 253, 106)',
    color: '#2c2c2c',
  };

  const backgroundColorButton = disabled ? backgroundColorDisabledButton : backgroundColorActiveButton;

  return (
    <ButtonStyle style={backgroundColorButton} disabled={disabled} onClick={callback}>{title}</ButtonStyle>
  )
}

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