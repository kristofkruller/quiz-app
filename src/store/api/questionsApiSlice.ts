import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { QuestionResult, Questions } from "../../../app";

//[https://redux-toolkit.js.org/rtk-query/api/createApi]

export const questionsApiSlice = createApi({
  reducerPath: "questionsApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
  }),
  //tagTypes for caching and invalidation
  tagTypes: ["Question"],
  endpoints: builder => ({
    //GET(query)
    getQuestions: builder.query<number | any, void>({
      query: () => "/questions",
      transformResponse: (response: Questions) => {
        return response.results;
      }
    })
  })
})
export const { useGetQuestionsQuery } = questionsApiSlice;