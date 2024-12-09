export type InitialStateSettingsType = typeof initialStateSettings

const initialStateSettings = {
  maxValueInput: 5,
  minValueInput: 0,
  disabled: true
}


export const settingsCounterReducer = (state: InitialStateSettingsType = initialStateSettings, action: ActionsType) : InitialStateSettingsType => {
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

