import { useState } from "react"

import he from "he"

interface contentProps {
    question: string,
    answ: string
}

const ResultContent = ({question, answ}: contentProps) => {
    const [over, isOver] = useState(false)
    const [pos, setPos] = useState({
        top: "",
        left: ""
    })
    const setPopUp = (event: any) => {
        isOver(true)

        if(event && window.innerWidth > 768) {
            const rect = event.target.getBoundingClientRect()
            setPos({
                top: rect.y,
                left: rect.x
            })
        }
    }
    const hidePopUp = () => {
        isOver(false)
        setPos({
            top: "",
            left: ""
        })
    }

    return (
        <>          
            <span className="font-medium cursor-pointer break-words text-sm md:text-md dark:text-purple-200 text-justify align-top" 
            onMouseEnter={(event) => setPopUp(event)} onMouseLeave={() => hidePopUp()} 
            onTouchStart={(event) => setPopUp(event)} onTouchEnd={() => hidePopUp()}>
                {he.decode(question)}
            </span>
            <section className={`absolute`} style={{ left: pos.left, top: pos.top, transform: `${window.innerWidth > 768 ? "translate(200%, calc(-50% - 40px))" : "translateY(-50%)"}` }}>
                <div className={`${over ? "opacity-1 inline-block" : "opacity-0 hidden"} talk-bubble tri-right border round btm-left-in`}>
                    <div className="talktext text-xs">
                        <p>{answ}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ResultContent