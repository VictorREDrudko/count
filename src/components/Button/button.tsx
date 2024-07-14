import { S } from "./Button_Styles"

type ButtonPropsType = {
  title: string
  disabled: boolean
  onClickButton: ()=>void
}

export const Button = ({title, disabled, onClickButton} : ButtonPropsType) => {
  // Style disabled/active button
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
    <S.ButtonStyle style={backgroundColorButton} disabled={disabled} onClick={onClickButton}>{title}</S.ButtonStyle>
  )
}