import React from "react"
import { Route } from "react-router"
import { Routes } from "react-router"
import { BrowserRouter } from "react-router"
import Home from './Pages/Home.jsx'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
