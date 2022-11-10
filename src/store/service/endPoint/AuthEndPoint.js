import { ApiService } from "../ApiService.js";

const AuthEndPoint = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (arg) => ({
        url: "user/login",
        method: "POST",
        body: arg,
      }),
    }),
    register: builder.mutation({
      query: (arg) => ({
        url: "user/register",
        method: "POST",
        body: arg,
      }),
    }),
    getMe: builder.query({
      query: () => "user/me",
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetMeQuery } =
  AuthEndPoint;
