import { useParams } from "react-router-dom"

import { QuestionResult } from "../../app"
import { useGetQuestionsQuery } from '../store/api/questionsApiSlice'

const QuestionCard = () => {

  //ROUTER
  const { id }  = useParams();

  // QUERY
  const {
    data: questions = [],
    isLoading,
    isSuccess,
    error,
  } = useGetQuestionsQuery();
  let cardContent

  if (isLoading) {
    cardContent = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  } else if (isSuccess && questions.length > 0 && questions) {
    questions && console.log(questions)
    const question: QuestionResult = questions[id]
    cardContent = (
      // <div>{questions && questions.map((e: QuestionResult) => (<div>{e.category}</div>))}</div>
      <div>{questions && question.category}</div>

    )
  } else if (error) {
    if ('status' in error) {
      // you can access all properties of `FetchBaseQueryError` here
      const errMsg = 'error' in error ? error.error : JSON.stringify(error.data)

      return cardContent = (
        <div>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      )
    } else {
      // you can access all properties of `SerializedError` here
      return cardContent = (
        <div>{error.message}</div>
      )
    }
  }

  return (
    <main>{cardContent}</main>
  )
}

export default QuestionCard