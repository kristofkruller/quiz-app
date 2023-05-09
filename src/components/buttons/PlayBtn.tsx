import { BtnProp } from "../../../app"

import { VscDebugStart } from "react-icons/vsc"
import { RiRestartLine } from "react-icons/ri"

const PlayBtn = ({ content, onClick }: BtnProp) => {
  const colorVariants = {
    border: content.toLowerCase() === "begin" 
    ? "border-gray-200 hover:border-purple-400 dark:border-gray-200 dark:hover:border-gray-200/10 opacity-30" 
    : "border-rose-700", 
    body: content.toLowerCase() === "begin" 
    ? "from-purple-400/70 dark:from-gray-300/50 via-purple-500/60 dark:via-gray-200/30 to-purple-700/50 dark:to-gray-400/10 shadow-purple-500/50 dark:shadow-white-800/80 [&>*]:hover:animate-ping opacity-1" 
    : "from-rose-400 dark:to-rose-300 via-rose-500 to-rose-700 shadow-rose-500/50 dark:focus:ring-rose-800 dark:shadow-rose-800/80 [&>*]:hover:animate-spin", 
    text:  content.toLowerCase() === "begin" 
    ? "text-slate-500" 
    : "text-purple-700",
}
  return (
    <button type="button" onClick={onClick} className={`relative shadow-lg dark:shadow-lg opacity-80 hover:opacity-90 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-neutral-50 transition duration-300 ease-out border-2 rounded-full shadow-md group ${colorVariants.border}`}>
      <span  className={`absolute inset-0 flex items-center justify-center w-full h-full text-neutral-50 duration-300 -translate-x-full group-hover:translate-x-0 ease bg-gradient-to-r ${colorVariants.body}`}>
          {content.toLowerCase() === "begin" ? <VscDebugStart  className="w-6 h-6 stroke-white" /> : <RiRestartLine  className="w-6 h-6" />}
      </span>
      <span  className={`absolute shadow-lg dark:shadow-lg flex items-center justify-center w-full h-full dark:text-neutral-50 transition-all duration-300 transform group-hover:translate-x-full ease text-center uppercase ${colorVariants.text}`}>{content}</span>
      <span  className="relative invisible">{content}</span>
    </button>
  )
}

export default PlayBtn