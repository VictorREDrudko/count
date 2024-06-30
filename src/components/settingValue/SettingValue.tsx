import styled from "styled-components"

type SettingValueType = {
  title: string
  minValue?: number
  maxValue?: number
}

export const SettingValue = (props: SettingValueType) => {
  const choseValue = props.maxValue ? props.maxValue : props.minValue

  return (
    <SettingValueWrapper>
      <div>{props.title}</div>
      <Input type={"text"} placeholder="0" value={choseValue}></Input>
    </SettingValueWrapper>
  )
}

const SettingValueWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`

const Input = styled.input`
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