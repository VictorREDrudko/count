export type InitialStateType = {
  minValue: number,
  maxValue: number,
  valueCounter: number,
  message: MessageType,
  validInput: boolean
}

export type MessageType = 'Enter values and press "set"' | '' | 'Incorrect value'

const initialMaxValue = localStorage.getItem('maxValue') ? Number(localStorage.getItem('maxValue')) : 4
const initialMinValue = localStorage.getItem('minValue') ? Number(localStorage.getItem('minValue')) : 1

const initialStateCounter: InitialStateType = {
  maxValue: initialMaxValue,
  minValue: initialMinValue,
  valueCounter: 0,
  message: '',
  validInput: true
}


export const counterReducer = (state = initialStateCounter, action: ActionsType) => {
	switch (action.type) {
    case 'INCREASE_COUNTER': {
      return {...state, valueCounter: state.valueCounter+=1}
    }

    case 'RESET_COUNTER': {
      return {...state, valueCounter: state.minValue}
    }

    case 'SET_VALUE': {
      return {...state, maxValue: action.payload.newMaxValue, minValue: action.payload.newMinValue, valueCounter: action.payload.newMinValue}
    }

    case 'MESSAGE_COUNTER': {
      return {...state, message: action.payload.message}
    }

		default:
			return state
	}
}


// Action creators
export const increaseCounterAC = () => {
	return {type: 'INCREASE_COUNTER'} as const
}

export const resetCounterAC = () => {
	return {type: 'RESET_COUNTER'} as const
}

export const setValueCounterAC = (payload: {newMaxValue: number, newMinValue: number}) => {
	return {type: 'SET_VALUE', payload} as const
}

export const messageCounterAC = (message: MessageType) => {
	return {type: 'MESSAGE_COUNTER', payload: {message}} as const
}


// Actions types
export type IncreaseCounterType = ReturnType<typeof increaseCounterAC>
export type DecreaseCounterType = ReturnType<typeof resetCounterAC>
export type SetValueCounterType = ReturnType<typeof setValueCounterAC>
export type MessageCounterType = ReturnType<typeof messageCounterAC>

type ActionsType = IncreaseCounterType | DecreaseCounterType | SetValueCounterType | MessageCounterType

