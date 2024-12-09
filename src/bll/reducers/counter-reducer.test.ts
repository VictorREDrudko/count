import { counterReducer, increaseCounterAC, InitialStateType, resetCounterAC } from "./counter-reducer"

let initialState: InitialStateType

beforeEach(() => {
	initialState = {
    minValue: 0,
    maxValue: 5,
    valueCounter: 2,
    message: '',
    validInput: true
  }
})

test('the counter should increase the value by one correctly', () => {
	const endState = counterReducer(initialState, increaseCounterAC())
	expect(endState.valueCounter).toBe(3)
  expect(endState.valueCounter).not.toBe(2)
})

test('the counter should reset correctly', () => {
	const endState = counterReducer(initialState, resetCounterAC())
	expect(endState.valueCounter).toBe(0)
  expect(endState.valueCounter).not.toBe(2) 
})







// test('correct todolist should be added', () => {
// 	const newTitle = 'New Todolist'

// 	const endState = todolistsReducer(startState, addTodolistAC(newTitle))

// 	expect(endState.length).toBe(3)
// 	expect(endState[2].title).toBe(newTitle)
// })

// test('correct todolist should change its name', () => {
// 	const newTitle = 'New Todolist'

// 	const endState = todolistsReducer(startState, changeTodolistTitleAC({id: todolistId2, title: newTitle}))

// 	expect(endState[0].title).toBe('What to learn')
// 	expect(endState[1].title).toBe(newTitle)
// })

// test('correct filter of todolist should be changed', () => {

// 	const newFilter = 'completed'

// 	const endState = todolistsReducer(startState, changeTodolistFilterAC({id: todolistId2, filter: newFilter}))

// 	expect(endState[0].filter).toBe('all')
// 	expect(endState[1].filter).toBe(newFilter)
// })

