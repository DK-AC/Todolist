import {TodolistType} from "../../app/App";
import {v1} from "uuid";
import {GeneralType} from "../types/todolistTypes";


export const todolistsReducer = (state: Array<TodolistType>, action: GeneralType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return [...state.filter(tl => tl.id != action.params.id)]
        case 'ADD-TODOLIST':
            return [...state, {id: v1(), title: action.params.title, filter: 'all'}]
        case 'CHANGE-TODOLIST-TITLE':
            return [...state.map(m => m.id === action.params.id ? {...m, title: action.params.title} : m)]
        case 'CHANGE-TODOLIST-FILTER':
            return [...state.map(m => m.id === action.params.id ? {...m, filter: action.params.filter} : m)]
        default:
            throw new Error("I don't understand this type")
    }
}
