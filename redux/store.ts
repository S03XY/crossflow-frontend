import type { TypedUseSelectorHook } from "react-redux";
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";

const persistConfig = {
  key: "persistStorage",
  storage,
  //   whitelist: ["localstorage"], //localstorage is tha name of the reducer in your root reducer
  // blacklist: ["UserReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  //   reducer: rootReducer,
  reducer: persistedReducer,
  //   devTools: enableDevTools,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const useDispatch = () => useReduxDispatch<AppDispatch>();

// sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
