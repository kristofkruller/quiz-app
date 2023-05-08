import { useNavigate } from "react-router-dom"

import { VscDebugStart } from "react-icons/vsc"

const Welcome = () => {

  const navigate = useNavigate()

  return (
    <main className="[&>*]:my-3 md:[&>*]:my-7 [&>*]:text-center flex flex-col justify-center items-center">
      <h1 className="cursor-default mb-1 font-mono text-4xl text-gray-100 dark:text-purple-400 md:text-6xl text-center">Welcome to the Trivia 
        <br />
        <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent">
          Challenge!
        </span>
        <span
          className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor"
        ></span>
      </h1>
      <p className="w-3/4 md:w-full leading-relaxed text-lg font-bold text-zinc-600 dark:text-purple-300/70 cursor-default">You will be presented with 10 True or False questions</p>
      <p className="leading-relaxed text-lg font-bold text-zinc-500 dark:text-purple-300/70 cursor-default">Can you score 100%?</p>
      <button className="btn-wlc [&>*]:hover:animate-ping" onClick={() => navigate("/question/")}><VscDebugStart className=""/>begin</button>
    </main>
  )
}

export default Welcome