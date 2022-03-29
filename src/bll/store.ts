import {combineReducers, compose} from "redux";
import {todolistReducer} from "./reducers/todolistReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {tasksReducer} from "./reducers/tasksReducer";
import thunk from "redux-thunk";
import {appReducer} from "./reducers/appReducer";
import {authReducer} from "./reducers/authReducer";
import {configureStore} from "@reduxjs/toolkit";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const appRootState = combineReducers({
    todolists: todolistReducer,
    tasks: tasksReducer,
    app: appReducer,
    auth: authReducer
})

export const store = configureStore({
    reducer: appRootState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk)
})

export type AppRootStateType = ReturnType<typeof appRootState>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()


// @ts-ignore
window.store = store