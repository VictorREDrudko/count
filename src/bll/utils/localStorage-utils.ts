import { RootState } from "../store"

export const loadingState = () => {
  try {
    const stateFromLS = localStorage.getItem('state')
    if (stateFromLS === null) {return undefined}

    return JSON.parse(stateFromLS)
  }
  catch (err) {
    return 'Error loading state from Local Storage'
  }
}


export const saveState = (state: RootState) => {
  try {
    const stateInLS = JSON.stringify(state)
    localStorage.setItem('state', stateInLS)
  }
  catch { }
}