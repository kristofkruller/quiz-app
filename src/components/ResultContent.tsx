import { useState } from "react"

//DECODE
import he from "he"

//IF
import { ResultContentProps } from "../../app"

const ResultContent = ({question, answ}: ResultContentProps) => {
    //States, helpers, functionality
    const [over, isOver] = useState(false)
    const [pos, setPos] = useState({
        top: "",
        left: ""
    })
    const setPopUp = (event: any) => {
        isOver(true)
        console.log()
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

            <section className={`absolute`} 
                style={{ left: pos.left, top: pos.top, transform: `${window.innerWidth > 768 ? "translate(200%, calc(-50% - 40px))" : "translateY(-50%)"}` }}>

                <div className={`${over ? "opacity-1 inline-block" : "opacity-0 hidden"} talk-bubble tri-right border round btm-left-in`}>
                    <div className="talktext text-xs">
                        <p>{Boolean(answ) ? answ : "Please answer this question, or hit the play again button"}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ResultContent