import {ADD_TASK, CHANGE_TASK_STATUS, CHANGE_TASK_TITLE, GET_TASKS, REMOVE_TASK} from "../types/taskTypes";
import {TaskType} from "../../dal/api/tasks-api";

export const removeTaskAC = (todolistId: string, taskId: string) => {
    return {type: REMOVE_TASK, todolistId, taskId} as const
}
export const addTaskAC = (task: TaskType) => {
    return {type: ADD_TASK, task} as const
}
export const changeTaskTitleAC = (todolistId: string, taskId: string, title: string) => {
    return {type: CHANGE_TASK_TITLE, todolistId, taskId, title} as const
}
export const changeTaskStatusAC = (todolistId: string, taskId: string, status: number) => {
    return {type: CHANGE_TASK_STATUS, todolistId, taskId, status} as const
}
export const getTasksAC = (todolistId: string, tasks: TaskType[]) => {
    return {type: GET_TASKS, todolistId, tasks} as const
}
