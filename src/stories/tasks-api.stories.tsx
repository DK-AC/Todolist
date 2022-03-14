import axios from "axios";
import React, {useEffect, useState} from "react";
import {tasksApi} from "../dal/api/tasks-api";

export default {
    title: 'API/Tasks'
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/todo-lists/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a32b35ae-c578-47f3-b8a9-0885cd248a9d'
    }
})

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let todolistId: string = '418ab450-3836-48a6-b67a-127dc9ceb485'
        tasksApi.getTasks(todolistId)
            .then(res => setState(res.data))
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let todolistId: string = '418ab450-3836-48a6-b67a-127dc9ceb485'
        tasksApi.createTask(todolistId, {title: 'New Task'})
            .then(res => setState(res.data))
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let todolistId: string = '418ab450-3836-48a6-b67a-127dc9ceb485'
        let taskId: string = '95c4768a-882f-4e98-8726-96f80e46875f'
        tasksApi.deleteTask(todolistId, taskId)
            .then(res => setState(res.data))
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let todolistId: string = '418ab450-3836-48a6-b67a-127dc9ceb485'
        let taskId: string = 'd59fa423-9bb4-404b-aa9c-3c3027743dad'
        instance.put(`${todolistId}/tasks/${taskId}`, {title: 'Update Title'})
            .then(res => setState(res.data))
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
