// ReduxPersistor
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from "redux-persist";

// AuthSlice
import authSlice from "./auth/authSlice";

const persistedConfig = {
  key: "root",
  storage,
  whiteList: ["auth"],
};

const authRootConfig = {
  key: "auth",
  storage,
  whiteList: ["user", "accessToken"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authRootConfig, authSlice),
});

const persistedReducer = persistReducer(persistedConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefalutMiddleware) => {
    return getDefalutMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, REGISTER, PURGE, PERSIST],
      },
    });
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Export Persistor
const persistor = persistStore(store);
export { store, persistor };
