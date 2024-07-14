import { ChangeEvent, useState } from "react"
import { S } from "./Input_Styles"

type InputType = {
  type: string
  value: string
  style: {}
  onChangeInput: (valueInput: string) => void
}

export const Input = ({type, value, style, onChangeInput} : InputType) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeInput(event.currentTarget.value)
  }

  return (
    <S.InputStyle style={style} type={type} value={value} onChange={onChangeHandler}/>
  )
}