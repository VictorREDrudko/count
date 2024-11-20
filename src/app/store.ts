import { combineReducers, legacy_createStore } from "redux"
import { counterReducer } from './../reducers/counter-reducer'
import { settingsCounterReducer } from "../reducers/settings-counter-reducer"

// Объект-состояние создается объединяя reducer-ы (combineReducers)
const rootReducer = combineReducers({
  counter: counterReducer,
  settings: settingsCounterReducer
})

// Создаём store
export const store = legacy_createStore(rootReducer)

// автоматическая типизация всего объекта-состояния
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
