import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../utils/axios-settings'

const apiSlice = createApi({
  reducerPath: 'appApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: [],
  endpoints: (builder) => {
    return {}
  },
})

export default apiSlice
