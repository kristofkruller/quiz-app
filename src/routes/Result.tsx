import PlayBtn from "../components/buttons/PlayBtn";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { clearAllAnswers } from "../store/slices/answerSlice";
import { clearIndex } from "../store/slices/indexSlice";

import { useNavigate } from "react-router-dom";
import { useGetQuestionsQuery } from "../store/slices/questionsApiSlice";
import ResultContent from "../components/ResultContent";

import { CiCircleCheck } from "react-icons/ci"
import { IoIosCloseCircleOutline } from "react-icons/io"

const Result = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const answ = useSelector((state: RootState)=> state.answers.answers)
  const correctOnes = answ.filter(answer => answer.includes("Correct"))

  const { data: questions, refetch } = useGetQuestionsQuery()

  //RESTART 
  const handlePlayAgain = () => {
    const clearAll = [clearAllAnswers, clearIndex]
    // dispatch to fetch new questions, clear answ, nav back
    clearAll.forEach(action => dispatch(action()))
    refetch()
    navigate("/question/")
  };
  
  return (
    <section className="wrapper shadow-lg shadow-indigo-800/20 dark:shadow-indigo-500/50 p-5 rounded-lg w-full md:w-3/4">
      <h2 className="text-lg md:text-2xl uppercase font-bold dark:text-gray-300 text-gray-800">summary of your run</h2>
      <span className="dark:text-gray-300 text-gray-800 md:whitespace-nowrap font-medium">
        You answered <span className="bg-purple-500 text-gray-100 px-2">correctly</span> {correctOnes.length} / {answ.length}
        <p className="text-xs text-gray-600/30 dark:text-purple-200/60 uppercase font-light">mouse over the quiestion you intrested about, to see a review about your answer</p>
      </span>
      <div className="flex flex-col gap-2">
        {questions?.map((question, index) => ( 
          <ol key={index} className="flex gap-2 list-inside list space-y-1">
            {answ[index].includes("Well")
            ? <CiCircleCheck className="min-w-[2rem] min-h-[2rem] stroke-[0.05rem] stroke-purple-800/70 hover:stroke-purple-700/60" /> 
            : <IoIosCloseCircleOutline className="min-w-[2rem] min-h-[2rem] stroke-[0.5rem] stroke-gray-800/70 fill-gray-800/70 hoverstroke-gray-700/60 hover:fill-gray-700/60 dark:stroke-gray-200/70 dark:fill-gray-200/70" />}
            <ResultContent question={question.question} answ={answ[index]}/>
          </ol>
        ))}
      </div>
      <PlayBtn content="Play Again" onClick={() => handlePlayAgain()} />
    </section>
  );
};

export default Result;