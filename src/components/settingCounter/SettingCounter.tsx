import styled from "styled-components"
import { Button } from "../button/Button"
import { SettingValue } from "../settingValue/SettingValue"

export const SettingsCounter = () => {
  return (
    <WrapperCounter>
      <ValueCounter>
        <SettingValue title={"max value:"}/>
        <SettingValue title={"min value:"}/>
      </ValueCounter>
      <WrapperButton>
        <Button title={"set"} callback={()=>{}} disabled={false}/>
      </WrapperButton>
    </WrapperCounter>
  )
}

const WrapperCounter = styled.div`
  max-width: 280px;
  width: 100%;
  border: 3px solid rgb(128, 253, 106);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
`

const ValueCounter = styled.div`
  margin: 15px;
  background-color: rgb(128, 253, 106);
  border-radius: 10px;
  color: #2c2c2c;
  font-size: 25px;
  text-align: center;
  vertical-align: center;
  font-weight: 600;
`

const WrapperButton = styled.div`
  margin: 15px;
  border: 3px solid rgb(128, 253, 106);
  border-radius: 10px;
  display: flex;
  justify-content: space-around
`