
import { QuestionResult } from "../../app"

import he from "he"

interface CardProp {
  qData: QuestionResult | undefined
}

const QuestionCard = ({ qData }: CardProp) => {

  return (
  <> { qData && (
    <section id="wrapper" className="cursor-default flex flex-col items-center justify-around xl:w-1/2 lg:w-3/4 w-full mx-auto text-center text-slate-400 dark:text-gray-400 h-full [&>*]:my-5">
      <div id="title">
        <h2 className="text-purple-200 dark:text-gray-200 font-medium title-font tracking-wider text-xl">{he.decode(qData?.category)}</h2>
        <p className="text-purple-300 dark:text-gray-300 uppercase">difficulity: {he.decode(qData?.difficulty)}</p>
        <span className="inline-block h-1 w-10 rounded bg-slate-600 dark:bg-purple-500 mt-8 mb-6"></span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-10 h-10 fill-purple-600 dark:fill-purple-500">
        <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
      </svg>
      <div id="footer">
        <span className="inline-block h-1 w-10 rounded bg-slate-600 dark:bg-purple-500 mt-8 mb-6"></span>
        <p className="leading-relaxed text-lg">{he.decode(qData?.question)}</p>
        <span className="inline-block h-1 w-10 rounded bg-slate-600 dark:bg-purple-500 mt-8 mb-6"></span>
        <div id="cta">
          <button>Ture</button>
          <span className="inline-block h-1 w-10">or</span>
          <button>False</button>
        </div>
      </div>
    </section>
  )} </>
  )
}

export default QuestionCard