import { useNavigate } from "react-router-dom"

const Welcome = () => {

  const navigate = useNavigate()

  return (
    <main>
      <h1>Welcome to the Trivia Challenge</h1>
      <p>You will be presented with 10 True or False questions</p>
      <p>Can you score 100%?</p>
      <button onClick={() => navigate("/question/")}>begin</button>
    </main>
  )
}

export default Welcome