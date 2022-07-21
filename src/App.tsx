import { memo, useState } from "react"
import "./App.css"

type PropType = {
  color: string
}

const Swamp = ({ color }: PropType) => {
  console.log("swamp")

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        background: color,
        margin: "0 auto",
      }}
    ></div>
  )
}

const MemoedSwap = memo(Swamp)

function App() {
  const [count, setCount] = useState(0)
  const [colour, setColour] = useState("green")

  console.log(`${count} Times = `, count)

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Count</button>
      <h2>{count}</h2>

      <button
        onClick={() => setColour(colour === "green" ? "orange" : "green")}
      >
        Color Change
      </button>
      <MemoedSwap color={colour} />
    </div>
  )
}

export default App
