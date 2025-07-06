import { configureStore } from '@reduxjs/toolkit'
import agentReducer from './agentsSlice'
import authReducer from "./authSlice";

export const store = configureStore({
    reducer: {
        agents: agentReducer,
        auth: authReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
