import { useState, useMemo } from "react";

import { useParams, useNavigate } from "react-router-dom"

import { QuestionResult } from "../../app"
import { useGetQuestionsQuery } from '../store/api/questionsApiSlice'
import Loading from "./Loading";

const QuestionCard = () => {
  //Jsx content declaration
  let cardContent;

  //ROUTER functionality
  const { idx } = useParams<{idx?: string}>()
  const nav = useNavigate()

  //QUERY
  const {
    data: questions = [],
    isLoading,
    isSuccess,
    error,
  } = useGetQuestionsQuery();

  //STATES
  const [currentIdx, setCurrentIdx] = useState(0)
  // Use useMemo to memoize current question based on current index and questions array
  const currentQuestion = useMemo(() => {
    return questions && questions.length > 0 ? questions[currentIdx] : undefined;
  }, [currentIdx, questions]);
  //HELPERS
  const handleNextQuestion = () => {
    setCurrentIdx(prevIndex => prevIndex + 1);
  };

  //COMPONENT RENDER n LOGIC
  if (isLoading) cardContent = <Loading />
  if (error) {
    if ('status' in error) {
      // you can access all properties of `FetchBaseQueryError` here
      const errMsg = 'error' in error ? error.error : JSON.stringify(error.data)

      return cardContent = (
        <section>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </section>
      )
    } else {
      // you can access all properties of `SerializedError` here
      return cardContent = (
        <section>{error.message}</section>
      )
    }
  } 
  
  if (isSuccess && questions.length > 0 && questions) {

    // Update current index when questionIndex changes
    if (idx !== undefined) {
      //provide a default value of '0' if questionIndex is undefined
      const index = parseInt(idx ?? '0')
      // setCurrentIdx(prevIndex => index)
    }

    cardContent = (
      <>
        <h1>{currentQuestion?.category}</h1>
        <button onClick={handleNextQuestion}>plus</button>
      </>
    )
  } 


  // RES
  return (
    <>{cardContent}</>
  )
}

export default QuestionCard