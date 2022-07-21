/**
 * ! Use React.memo when props are primitive(string, boolean, number, etc) and use useMemo when props are object, array, function becasue for each render those create new instance or referrance and lost previous reference. useMemo memorized and provide exact same referance until the depency is changed. Don't use useMemo for a function that return primitive value.Best usecase can be filter data, costly calculation etc
 */

import React, { memo, useCallback, useMemo, useState } from "react"
import "./App.css"

type PropType = {
  params: {
    color: string
  }
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

const Swamp = ({ params, onClick }: PropType) => {
  console.log("swamp")

  return (
    <div
      role="button"
      onClick={onClick}
      style={{
        width: "100px",
        height: "100px",
        background: params?.color,
        margin: "0 auto",
      }}
    ></div>
  )
}

const MemoedSwap = memo(Swamp)
// const MemoedSwap = memo( Swamp, (prevProps, nextProps) => prevProps.params.color === nextProps.params.color)

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("green")

  const memoedColor = useMemo(() => ({ color }), [color])
  const memoedOnClick = useCallback(() => {}, [])

  console.log(`${count} Times = `, count)

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Count</button>
      <h2>{count}</h2>

      <button onClick={() => setColor(color === "green" ? "orange" : "green")}>
        Color Change
      </button>
      <MemoedSwap params={memoedColor} onClick={memoedOnClick} />
    </div>
  )
}

export default App
