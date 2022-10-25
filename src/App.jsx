import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import AboutPage from "./pages/AboutPage"
import ComingSoonPage from "./pages/ComingSoonPage"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/projects" element={<ComingSoonPage />}></Route>
      </Routes>
    </>
  )
}

export default App
