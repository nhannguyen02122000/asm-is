import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../utils/axios-settings'

const apiSlice = createApi({
  reducerPath: 'appApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['Movie'],
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

      getMovies: builder.query({
        query: ({ token }) => ({
          url: `/movies`,
          headers: { Authorization: `Bearer ${token}` },
        }),
        providesTags: ['Movie'],
      }),

      getMoviesByCode: builder.query({
        query: ({ id, token }) => ({
          url: `/movies/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        }),
      }),
    }
  },
})

export const { useRegisterMutation, useLoginMutation, useGetMoviesQuery, useGetMoviesByCodeQuery } = apiSlice

export default apiSlice
