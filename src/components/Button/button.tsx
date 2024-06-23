import styled from "styled-components"

type ButtonPropsType = {
  title: string
}

export const Button = ({title} : ButtonPropsType) => {
  return (
    <ButtonStyle>{title}</ButtonStyle>
  )
}

const ButtonStyle = styled.button`
  padding: 5px 15px;
  margin: 15px;
  background-color: rgb(128, 253, 106);
  border-radius: 10px;
  font-size: 30px;
  font-weight: 600;
  color: #2c2c2c;
`