//ROUTER
import { Routes, Route } from "react-router-dom"

//PAGES
import Question from './routes/Question'
import Welcome from "./routes/Welcome"
import Result from "./routes/Result"

//LAYOUTS N ASSETS
import ThemeLayout from "./components/ThemeLayout"
import RouteError from "./assets/RouteError"
import RouteLayout from "./components/RouteLayout"
import WrongUrl from "./assets/WrongUrl"

function App() {
  return (
    <ThemeLayout>
      <Routes>
        <Route element={<RouteLayout />} errorElement={<RouteError />}>
          <Route index element={<Welcome />} />
          <Route path="question" element={<Question />} />
          <Route path="result" element={<Result />} />
          <Route path="*" element={<WrongUrl />} />
        </Route>
      </Routes>
    </ThemeLayout>
  )
}

export default App
