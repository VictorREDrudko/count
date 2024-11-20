export type InitialStateSettingsType = {
  maxValueInput: number,
  minValueInput: number,
  disabled: boolean
}

const initialMaxValue = localStorage.getItem('maxValue') ? Number(localStorage.getItem('maxValue')) : 4
const initialMinValue = localStorage.getItem('minValue') ? Number(localStorage.getItem('minValue')) : 1

const initialStateSettings: InitialStateSettingsType = {
  maxValueInput: initialMaxValue,
  minValueInput: initialMinValue,
  disabled: true
}


export const settingsCounterReducer = (state = initialStateSettings, action: ActionsType) => {
	switch (action.type) {
    case 'CHANGE_MAX_VALUE': {
      return {...state, maxValueInput: +action.payload.valueInput}
    }

    case 'CHANGE_MIN_VALUE': {
      return {...state, minValueInput: +action.payload.valueInput}
    }

    case 'DISABLED_SETTINGS': {
      return {...state, disabled: action.payload.valid}
    }

		default:
			return state
	}
}


// Action creators
export const changeMaxValueInputAC = (valueInput: string) => {
	return {type: 'CHANGE_MAX_VALUE', payload: {valueInput}} as const
}

export const changeMinValueInputAC = (valueInput: string) => {
	return {type: 'CHANGE_MIN_VALUE', payload: {valueInput}} as const
}

export const disabledSettingsAC = (valid: boolean) => {
	return {type: 'DISABLED_SETTINGS', payload: {valid}} as const
}


// Actions types
export type ChangeMaxValueInputType = ReturnType<typeof changeMaxValueInputAC>
export type ChangeMinValueInputType = ReturnType<typeof changeMinValueInputAC>
export type DisabledSettingsType = ReturnType<typeof disabledSettingsAC>

type ActionsType = ChangeMaxValueInputType | ChangeMinValueInputType | DisabledSettingsType

