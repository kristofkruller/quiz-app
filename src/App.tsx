import { Routes, Route } from "react-router-dom"

import './App.css'
import QuestionCard from './components/QuestionCard'

function App() {
  return (
    <Routes>
      <Route path="/question/:id" element={<QuestionCard />} />
    </Routes>
  )
}

export default App
