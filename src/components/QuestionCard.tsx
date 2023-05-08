
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
    <section id="wrapper" className="cursor-default flex flex-col items-center justify-around xl:w-1/2 lg:w-3/4 w-full mx-auto text-center text-slate-400 dark:text-gray-400 h-full [&>*]:my-5">
      <div id="title">
        <h2 className="text-slate-400 dark:text-purple-400 font-medium title-font tracking-wider text-xl">{he.decode(qData?.category)}</h2>
        <p className="text-slate-500 dark:text-purple-500 uppercase">difficulity: {he.decode(qData?.difficulty)}</p>
        <span className="inline-block h-1 w-10 rounded bg-slate-600 dark:bg-purple-500 mt-8 mb-6"></span>
      </div>
      <ImQuestion className="icon-basic" />
      <div id="footer">
        <span className="inline-block h-1 w-10 rounded bg-slate-600 dark:bg-purple-500 mt-8 mb-6"></span>
        <p className="leading-relaxed text-lg font-bold text-zinc-900 dark:text-fuchsia-800">{he.decode(qData?.question)}</p>
        <span className="inline-block h-1 w-10 rounded bg-slate-600 dark:bg-purple-500 mt-8 mb-6"></span>
        { children }
      </div>
    </section>
  )} </>
  )
}

export default QuestionCard