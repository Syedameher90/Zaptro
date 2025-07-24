import React from "react"
import icon from "../src/assets/react.svg"
import Products from "./Pages/Products"
function App() {

  return (
  <>
  <div className="flex justify-between bg-blue-950 text-center w-full h-18 p-3">
    <div className="">
      <img src={icon} alt="icon" className="h-12" />
    </div>
      <ul className="flex justify-center items-center gap-6">
        <li className="text-white cursor-pointer font-bold">Home</li>
        <li className="text-white cursor-pointer font-bold">About</li>
        <li className="text-white cursor-pointer font-bold">Contact</li>
        <li className="text-white cursor-pointer font-bold">Publisher</li>
      </ul>
      <div className="mx-2">
     <Products name="Login"/>
</div>
  </div>
  </>
  )
}

export default App
