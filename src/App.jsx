import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import MoviesPage from "./components/MoviesPage"
import SingleMovie from "./components/SingleMovie"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>

            <Route index element={<MoviesPage />} />
            <Route path="movies/:id" element={<SingleMovie />} />

          </Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
