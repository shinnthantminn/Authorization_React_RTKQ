import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiService = createApi({
  reducerPath: "API",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://auth-sps6.onrender.com/api/v1",
    baseUrl: "http://localhost:3001/api/v1",
    prepareHeaders: (header, { getState }) => {
      if (localStorage.getItem("token")) {
        header.set("authorization", `Bearer ${localStorage.getItem("token")}`);
      } else {
        header.delete("authorization");
      }

      return header;
    },
  }),
  endpoints: (builder) => ({}),
});
