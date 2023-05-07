import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { QuestionResult, Questions } from "../../../app";

export const questionsApiSlice = createApi({
  reducerPath: "questionsApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://opentdb.com/"
  }),
  //tagTypes for caching and invalidation
  tagTypes: ["Question"],
  endpoints: builder => ({
    //GET(query)
    getQuestions: builder.query<QuestionResult[], void>({
      query: () => "/api.php?amount=10&difficulty=hard&type=boolean",
      transformResponse: (response: Questions) => response.results
    })
  })
})
export const { useGetQuestionsQuery } = questionsApiSlice;