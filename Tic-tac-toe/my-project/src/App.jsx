import { useState, useEffect } from "react"
import Cell from "./components/Cell"


const App = () => {

  const [cells, setCells] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

  ])
  console.log(cells);

  const [go, setGo] = useState('Circle')
  const [winningMsg, setWinningMsg] = useState(null)

  const message = "it is now " + go + " turn"

  useEffect(() => {
    checkScore()
  }, [cells])

  const checkScore = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],

    ]

    winningCombinations.forEach(array => {
      let circleWins = array.every(cell => cells[cell] === 'Circle')
      if (circleWins) {
        setWinningMsg('Circle wins')
        return
      }
    })
    winningCombinations.forEach(array => {
      let crossWins = array.every(cell => cells[cell] === 'Cross')
      if (crossWins) {
        setWinningMsg('Cross wins')
        return
      }
    })

  }

  return (
    <div className="app m-0 p-0 flex justify-center items-center h-[100vh] flex-col">

      <div className="w-[310px] h-[300px] flex flex-wrap border-[1px] ">
        {cells.map((cell, index) => <Cell
        winningMsg={winningMsg}
         key={index} go={go} setGo={setGo} cells={cells} setCells={setCells} id={index} cell={cell} />)}
      </div>

      <p>{winningMsg || message}</p>

    </div>
  )
}

export default App