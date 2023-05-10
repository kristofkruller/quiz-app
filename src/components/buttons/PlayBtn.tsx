import { BtnProp } from "../../../app"

import { VscDebugStart } from "react-icons/vsc"
import { RiRestartLine } from "react-icons/ri"

const PlayBtn = ({ content, onClick }: BtnProp) => {
  const colorVariants = {
    border: content.toLowerCase() === "begin" 
    ? "border-gray-200 opacity-30" 
    : "border-purple-700 opacity-30 dark:shadow-sm", 
    body: content.toLowerCase() === "begin" 
    ? "from-purple-400/70 dark:from-gray-100/60 via-purple-500/60 dark:via-gray-200/70 to-purple-700/50 dark:to-gray-100/60 shadow-purple-500/50 dark:shadow-white-800/80 opacity-1" 
    : "from-purple-400 dark:to-purple-300 via-purple-500 to-purple-700 shadow-purple-500/50 dark:focus:ring-purple-800 dark:shadow-purple-800/80", 
    text:  content.toLowerCase() === "begin" 
    ? "text-gray-200" 
    : "text-purple-700",
}
  return (
    <button type="button" onClick={onClick} className={`relative shadow-lg shadow-gray-100/50 opacity-80 hover:opacity-90 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-neutral-50 transition duration-300 ease-out border-2 rounded-lg shadow-md group ${colorVariants.border}`}>
      <span  className={`absolute inset-0 flex items-center justify-center w-full h-full text-neutral-50 duration-300 -translate-x-full group-hover:translate-x-0 ease bg-gradient-to-r ${colorVariants.body}`}>
          {content.toLowerCase() === "begin" ? <VscDebugStart  className="w-6 h-6 stroke-white animate-ping" /> : <RiRestartLine  className="w-6 h-6 animate-spin" />}
      </span>
      <span  className={`absolute shadow-lg dark:shadow-lg shadow-gray-100/50 flex items-center justify-center w-full h-full dark:text-neutral-50 transition-all duration-300 transform group-hover:translate-x-full ease text-center uppercase ${colorVariants.text}`}>{content}</span>
      <span  className="relative invisible">{content}</span>
    </button>
  )
}

export default PlayBtn