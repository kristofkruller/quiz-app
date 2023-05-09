import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { clearAllAnswers } from "../store/slices/answerSlice";
import { useNavigate } from "react-router-dom";

import ActionBtn from "../components/buttons/ActionBtn";
import { clearIndex } from "../store/slices/indexSlice";
import PlayBtn from "../components/buttons/PlayBtn";

const Result = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const answers = useSelector((state: RootState)=> state.answers)

  const handlePlayAgain = () => {
    const clearAll = [clearAllAnswers, clearIndex]
    // dispatch to fetch new questions, clear answ, nav back
    clearAll.forEach(action => dispatch(action()))
    navigate("/question/")
  };

  return (
    <section className="wrapper">
      <h2>Result</h2>
      <p>Score: {}/{}</p>
      <div>{}</div>
      <PlayBtn content="Play Again" onClick={() => handlePlayAgain()} />
    </section>
  );
};

export default Result;