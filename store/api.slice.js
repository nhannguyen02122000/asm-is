import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../utils/axios-settings'

const apiSlice = createApi({
  reducerPath: 'appApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: [],
  endpoints: (builder) => {
    return {
      register: builder.mutation({
        query: ({ email, password }) => ({
          url: `/register`,
          method: 'POST',
          data: {
            email,
            password,
          },
        }),
      }),

      login: builder.mutation({
        query: ({ email, password }) => ({
          url: `/login`,
          method: 'POST',
          data: {
            email,
            password,
          },
        }),
      }),
    }
  },
})

export const { useRegisterMutation, useLoginMutation } = apiSlice

export default apiSlice
