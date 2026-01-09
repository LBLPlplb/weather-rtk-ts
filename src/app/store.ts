import {configureStore} from "@reduxjs/toolkit";
import city from "../features/city/citySlice";
import {weatherApi} from "../features/api/weatherActions.ts";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        city,
        [weatherApi.reducerPath]: weatherApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApi.middleware)
})

// window.addEventListener('focus', () => store.dispatch(weatherApi.util.resetApiState()));
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch