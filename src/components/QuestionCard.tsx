
import { QuestionResult } from "../../app"

import he from "he"

import { ImQuestion } from "react-icons/im"

interface CardProp {
  qData: QuestionResult | undefined,
  children: React.ReactNode
}

const QuestionCard = ({ qData, children }: CardProp) => {

  return (
  <> { qData && (
    <section className="wrapper">
      <div id="title">
        <h2 className="text-slate-900 dark:text-purple-900 font-medium title-font tracking-wider text-xl">{he.decode(qData?.category)}</h2>
        <p className="text-slate-500 dark:text-purple-500 uppercase animate-shade">difficulity: {he.decode(qData?.difficulty)}</p>
        <span className="inline-block h-1 w-10 rounded bg-slate-600 dark:bg-purple-500 mt-8"></span>
      </div>
      <ImQuestion className="icon-basic animate-shade" />
      <div id="footer">
        <p className="leading-relaxed text-lg font-bold text-slate-900 dark:text-purple-400">{he.decode(qData?.question)}</p>
        <span className="inline-block h-1 w-10 rounded bg-slate-600 dark:bg-purple-500 mt-8 mb-6"></span>
        { children }
      </div>
    </section>
  )} </>
  )
}

export default QuestionCard