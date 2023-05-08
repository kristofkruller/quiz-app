import { useState, useMemo } from "react";

import { useGetQuestionsQuery } from '../store/api/questionsApiSlice'
import Loading from "../assets/Loading";
import QuestionCard from "../components/QuestionCard";

const Question = () => {
  //Jsx content declaration
  let cardContent;

  //QUERY
  const {
    data: questions,
    isLoading,
    isSuccess,
    error,
  } = useGetQuestionsQuery()

  //STATES
  const [currentIdx, setCurrentIdx] = useState(0)
  // Use useMemo to memoize current question based on current index and questions array
  const currentQuestion = useMemo(() => {
    return questions && questions.length > 0 ? questions[currentIdx] : undefined;
  }, [currentIdx, questions])

  //HELPERS
  const handleNextQuestion = () => setCurrentIdx((prevIndex: number): number => {
    console.log(currentIdx)
    return prevIndex < 9 ? prevIndex + 1 : 9
  })

  //COMPONENT LOGIC
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
    cardContent = (
      <QuestionCard qData={currentQuestion}>
        <div id="cta">
          <button>True</button>
          <span className="inline-block h-1 w-10 text-zinc-900 dark:text-fuchsia-800">or</span>
          <button>False</button>
        </div>
      </QuestionCard>
    )
  } 

  //RENDER
  return (
    <>{cardContent}</>
  )
}

export default Question