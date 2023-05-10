import { useNavigate } from "react-router-dom"
import ActionBtn from "../components/buttons/ActionBtn"

const WrongUrl = () => {

    const navigate = useNavigate()

    return (
        <section className='wrapper text-slate-400 dark:text-neutral-50 uppercase w-full'>
            <span className="mb-20 text-xl">This url slug is invalid</span>
            <ActionBtn content="back" onClick={() => navigate("/")} />
        </section>
    )
}

export default WrongUrl