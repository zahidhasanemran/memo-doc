/**
 *
 * ? React.memo(render if the props changed) should use when props are primitive, UseCallback and useMemo works with referencial things like object, array, function. Use useMemo(Returns a memoized value) when a calculation is expensive like fiter extensive data, search, sort etc. use useCallabck(Returns a memoized callback) to save function reference.
 *
 * ?useCallback gives you referential equality between renders for functions. And useMemo gives you referential equality between renders for values. useCallback and useMemo both expect a function and an array of dependencies. The difference is that useCallback returns its function when the dependencies change while useMemo calls its function and returns the result.
 *
 * ?useCallback returns its function uncalled so you can call it later, while useMemo calls its function and returns the result. useCallback returns its function uncalled so you can call it later, while useMemo calls its function and returns the result.
 *
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
