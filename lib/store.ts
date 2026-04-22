import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "@/redux/api/postsApi";
import { ebookApi } from "@/redux/api/ebookApi";
import { serviceApi } from "@/redux/api/serviceApi";
import blogSliceReducer from "@/redux/slice/blogSlice";

export const store = () => {
  return configureStore({
    reducer: {
      [postsApi.reducerPath]: postsApi.reducer,
      [ebookApi.reducerPath]: ebookApi.reducer,
      [serviceApi.reducerPath]: serviceApi.reducer,
      blogSlice: blogSliceReducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([postsApi.middleware, ebookApi.middleware, serviceApi.middleware]),
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
