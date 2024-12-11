import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import MoviesPage from "./pages/MoviesPage"
import SingleMovie from "./pages/SingleMovie"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>

            <Route index element={<MoviesPage />} />
            <Route path="movies/1" element={<SingleMovie />} />

          </Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
