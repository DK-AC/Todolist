import {setError, setStatus} from "../actions/appActions";

export const SET_STATUS = 'APP/SET_STATUS'
export const SET_ERROR = 'APP/SET_ERROR'


export type ActionsAppType =
    ReturnType<typeof setStatus>
    | ReturnType<typeof setError>