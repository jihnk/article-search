import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

export const store = configureStore({
	reducer,
	middleware: (defaultMiddleware) =>
		defaultMiddleware({
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
