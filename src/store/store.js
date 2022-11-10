import { configureStore } from "@reduxjs/toolkit";
import { ApiService } from "./service/ApiService.js";
import authSlicer from "./slicer/authSlicer.js";

import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [ApiService.reducerPath]: ApiService.reducer,
    auth: authSlicer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiService.middleware),
  devTools: true,
});

setupListeners(store.dispatch);
