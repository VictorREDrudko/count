import { ChangeEvent, useState } from "react"
import styled from "styled-components"

type InputType = {
  type: string
  value: number
  onChange: (valueInput: number) => void
}

export const Input = ({type, value, onChange} : InputType) => {


  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(+event.currentTarget.value)
  }

  return (
    <>
      <InputStyle type={type} value={value} onChange={onChangeHandler}></InputStyle>
    </>
  )
}

const InputStyle = styled.input`
  width: 80px;
  text-align: center;
  vertical-align: center;
  border-radius: 5px;
  border: none;
  padding: 5px;
  color: #2c2c2c;
  font-size: 16px;
  font-weight: 600;
`