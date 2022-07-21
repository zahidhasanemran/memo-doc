import { useState } from "react"
import "./App.css"

const Swamp = () => {
  console.log("swamp")

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        background: "green",
        margin: "0 auto",
      }}
    ></div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  console.log(`${count} Times = `, count)

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Click</button>
      <h2>{count}</h2>
      <Swamp />
    </div>
  )
}

export default App
