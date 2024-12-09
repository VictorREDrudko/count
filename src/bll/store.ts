import { combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "./reducers/counter-reducer";
import { settingsCounterReducer } from "./reducers/settings-counter-reducer";
import { loadingState, saveState } from "./utils/localStorage-utils";

// Объект-состояние создается объединяя reducer-ы (combineReducers)
const rootReducer = combineReducers({
  counter: counterReducer,
  settings: settingsCounterReducer,
});

// Создаём store
export const store = legacy_createStore(rootReducer, loadingState());

store.subscribe(() => {
  saveState({
    counter: store.getState().counter,
    settings: store.getState().settings,
  })
})

// автоматическая типизация всего объекта-состояния
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
