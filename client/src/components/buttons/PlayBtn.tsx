import { BtnProp } from "../../../app"

//ICONS
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
    <button type="button" onClick={onClick} className={`play-button opacity-90 hover:opacity-1 group ${colorVariants.border}`}>
      <span  className={`play-button-body group-hover:translate-x-0 ease ${colorVariants.body}`}>
          {content.toLowerCase() === "begin" 
          ? <VscDebugStart  className="w-6 h-6 stroke-white animate-ping" /> 
          : <RiRestartLine  className="w-6 h-6 animate-spin" />}
      </span>
      <span  className={`play-button-text flex dark:text-neutral-50 transition-all duration-300 transform group-hover:translate-x-full ease uppercase ${colorVariants.text}`}>
        {content}
      </span>
      <span  className="relative invisible">{content}</span>
    </button>
  )
}

export default PlayBtn