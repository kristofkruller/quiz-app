import { useMemo } from "react";

//COMPONENTS
import Loading from "../assets/Loading";
import QuestionCard from "../components/QuestionCard";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { useGetQuestionsQuery } from '../store/slices/questionsApiSlice'
import { setAnswer } from "../store/slices/answerSlice";
import ActionBtn from "../components/buttons/ActionBtn";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/rootReducer";
import { setCurrentIndex } from "../store/slices/indexSlice";

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
  const answ = useSelector((state: RootState)=> state.answers.answers)

  //STATES
  const currentIdx = useSelector((state: RootState) => state.currentIndex.currentIndex)
  // Use useMemo to memoize current question based on current index and questions array
  const currentQuestion = useMemo(() => {
    return questions && questions.length > 0 ? questions[currentIdx] : undefined;
  }, [currentIdx, questions])

  //HANDLER N HELPERS
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleAnswer = (click: React.MouseEvent) => {
    //first store the answ.
    dispatch(setAnswer({index: currentIdx, answer: (click.target as HTMLElement).innerText}))
    //then paginate to the next one or go results
    currentIdx < 9 ? dispatch(setCurrentIndex(currentIdx + 1)) : compareAndProvide()
  }

  const compareAndProvide = () => {
    const resultOfRun = []
    if (questions) {
      for (let idx = 0; answ.length > idx; idx++) {
        let result = questions[idx].correct_answer
        answ[idx] === result.toUpperCase() 
        ? resultOfRun.push(`Well done, your answer ${result} was correct`) 
        : resultOfRun.push(`Incorrect answer, the correct would be ${result}`)
        dispatch(setAnswer({index: idx, answer: resultOfRun[idx]}))
      }
    }
    navigate("/result/")
  }

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
        <p className="text-slate-500 dark:text-purple-500 uppercase animate-shade mb-8">Question {currentIdx + 1} of 10</p>
        <div id="cta" className="flex justify-around">
          <ActionBtn content="True" onClick={(event) => handleAnswer(event)} />
          <ActionBtn content="False" onClick={(event) => handleAnswer(event)} />
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