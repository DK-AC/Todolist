import {TasksStateType} from "../types/taskTypes";
import {createSlice} from "@reduxjs/toolkit";
import {TodolistType} from "../types/todolistTypes";
import {setTodolistsAC} from "./todolistsReducer";
import {addTask, fetchTasks, removeTask, updateTask} from "../thunk/taskThunk";

const initialTasksState: TasksStateType = {}

export const slice = createSlice({
    name: 'tasks',
    initialState: initialTasksState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addTask.fulfilled, (state, action) => {
            state[action.payload.todoListId].unshift(action.payload)
        })
        builder.addCase(removeTask.fulfilled, (state, action) => {
            const index = state[action.payload.todolistId].findIndex(task => task.id === action.payload.taskId)
            if (index !== -1) state[action.payload.todolistId].splice(index, 1)
        })
        builder.addCase(setTodolistsAC, (state, action) => {
            action.payload.todolists.forEach((todo: TodolistType) => state[todo.id] = [])
        })
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state[action.payload.todolistId] = action.payload.tasks
        })
        builder.addCase(updateTask.fulfilled, (state, action) => {
            let task = state[action.payload.todolistId]
            const index = task.findIndex(task => task.id === action.payload.taskId)
            if (index !== -1) task[index] = {...task[index], ...action.payload.model}
        })
    },
})

export const tasksReducer = slice.reducer
