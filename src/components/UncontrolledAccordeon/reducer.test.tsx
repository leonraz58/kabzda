import {reducer, StateType, TOGGLE_CONSTANT} from "./reducer";

test('collapced should be true', ()=>{
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: TOGGLE_CONSTANT})
    //expectation
    expect(newState.collapsed).toBe(true)
})

test('collapced should be false', ()=>{
    //data
    const state: StateType = {
        collapsed: true
    }
    //action
    const newState = reducer(state, {type: TOGGLE_CONSTANT})
    //expectation
    expect(newState.collapsed).toBe(false)
})

test('testing invalid type', ()=>{
    //data
    const state: StateType = {
        collapsed: true
    }
    //action
    expect(()=>{
        reducer(state, {type: "FAKE"})
    }).toThrowError()
})


