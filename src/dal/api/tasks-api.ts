import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/todo-lists',
    withCredentials: true,
    headers: {
        'API-KEY': 'a32b35ae-c578-47f3-b8a9-0885cd248a9d'
    }
})

export const tasksApi = {
    getTasks(todolistId: string) {
        return instance.get<TaskFromServerType[], AxiosResponse<ResponseTaskType<TaskFromServerType[]>>>(`${todolistId}/tasks`)
    },
    createTask(todolistId: string, data: Pick<TaskFromServerType, 'title'>) {
        return instance.post<TaskFromServerType, AxiosResponse<ResponseTaskType<TaskFromServerType>>>(`${todolistId}/tasks`, data)
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<TaskFromServerType, AxiosResponse<ResponseTaskType<TaskFromServerType>>>(`${todolistId}/tasks/${taskId}`)
    },
    updateTask(todolistId: string, taskId: string, data: Pick<TaskFromServerType, 'title'>) {
        return instance.put<TaskFromServerType, AxiosResponse<ResponseTaskType<TaskFromServerType>>>(`${todolistId}/tasks/${taskId}`, data)
    },
}

export type TaskFromServerType = {
    addedDate: string
    deadline: string
    description: string
    id: string
    order: number
    priority: number
    startDate: string
    status: number
    title: string
    todoList: null
    todoListId: string
}

export type ResponseTaskType<T> = {
    data: T
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}