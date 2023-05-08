import { Routes, Route } from "react-router-dom"

import Question from './routes/Question'
import Welcome from "./routes/Welcome"
import Result from "./routes/Result"

import ThemeLayout from "./components/ThemeLayout"

function App() {
  return (
    <ThemeLayout>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/question/" element={<Question />} />
        <Route path="/result/" element={<Result />} />
      </Routes>
    </ThemeLayout>
  )
}

export default App
