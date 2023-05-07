import { Routes, Route } from "react-router-dom"

import Question from './routes/Question'
import Welcome from "./routes/Welcome"
import Result from "./routes/Result"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/question/" element={<Question />} />
      <Route path="/result/" element={<Result />} />
    </Routes>
  )
}

export default App
