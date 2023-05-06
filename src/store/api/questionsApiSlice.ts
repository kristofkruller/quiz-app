import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

//[https://redux-toolkit.js.org/rtk-query/api/createApi]

export const questionsApiSlice = createApi({
  reducerPath: "questionsApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
  }),
  //tagTypes for caching and invalidation
  tagTypes: ["Question"],
  endpoints: builder => ({
    //GET
    getQuestions: builder.query({
      query: () => "questions"
    })
  })
})
export const { useGetQuestionsQuery } = questionsApiSlice;