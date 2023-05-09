import { RiRestartLine } from "react-icons/ri"
import { FaCheck } from "react-icons/fa"
import { GrClose } from "react-icons/gr"

interface BtnProp {
    content: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

const ActionBtn = ({ content, onClick }: BtnProp) => {
    const colorVariants = {
        
        border: content.toLowerCase() === "true" 
        ? "border-sky-500" 
        : content.toLowerCase() === "false" 
        ? "border-rose-700" 
        : "border-purple-500",
        body: content.toLowerCase() === "true" 
        ? "from-sky-400 dark:to-sky-300 via-sky-500 to-sky-700 shadow-sky-500/50 dark:shadow-sky-800/80" 
        : content.toLowerCase() === "false" 
        ? "from-rose-400 dark:to-rose-300 via-rose-500 to-rose-700 shadow-rose-500/50 dark:focus:ring-rose-800 dark:shadow-rose-800/80" 
        : "from-purple-400 dark:to-purple-300 via-purple-500 to-purple-700 shadow-purple-500/50 dark:focus:ring-purple-800 dark:shadow-purple-800/80",
        text:  content.toLowerCase() === "true" 
        ? "text-sky-500" 
        : content.toLowerCase() === "false" 
        ? "text-rose-700" 
        : "text-purple-500",
    }

    return (
        <button onClick={onClick} type="button" id={content} className={`relative shadow-lg dark:shadow-lg opacity-80 hover:opacity-90 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-neutral-50 transition duration-300 ease-out border-2 rounded-full shadow-md group ${colorVariants.border}`}>
            <span id={content} className={`absolute inset-0 flex items-center justify-center w-full h-full text-neutral-50 duration-300 -translate-x-full group-hover:translate-x-0 ease bg-gradient-to-r ${colorVariants.body}`}>
                {content.toLowerCase() === "true" ? <FaCheck id={content} className="w-6 h-6" /> : content.toLowerCase() === "false" ? <GrClose id={content} className="w-6 h-6 stroke-white stroke-10 [&>*]:stroke-white [&>*]:stroke-10" /> : <RiRestartLine id={content} className="w-6 h-6 hover:opacity-1 animate-spin" />}
            </span>
            <span id={content} className={`absolute shadow-lg dark:shadow-lg flex items-center justify-center w-full h-full dark:text-neutral-50 transition-all duration-300 transform group-hover:translate-x-full ease text-center uppercase ${colorVariants.text}`}>{content}</span>
            <span id={content} className="relative invisible">{content}</span>
        </button>
  )
}

export default ActionBtn