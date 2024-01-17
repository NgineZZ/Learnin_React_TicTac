
import Suaqre from "./Square";
import { useState } from "react";

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  // helper function;
  function calculateWiner(square) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if(square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  }

  const winner = calculateWiner(squares);
  let status;

  if(winner){
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext? "X" : "O");
  }

  function handleSqureClick(i){
    if(squares[i]) {
      return;
    }
    
    const nextSquares = squares.slice();
    if(xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O'
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return(
    <>
    <p>{status}</p>
    <div className="board-row">
      <Suaqre value={squares[0]} onSquareClick= {()=>handleSqureClick(0)}/>
      <Suaqre value={squares[1]} onSquareClick={()=>handleSqureClick(1)}/>
      <Suaqre value={squares[2]} onSquareClick={()=>handleSqureClick(2)}/>
    </div>
    <div className="board-row">
      <Suaqre value={squares[3]} onSquareClick={()=>handleSqureClick(3)}/>
      <Suaqre value={squares[4]} onSquareClick={()=>handleSqureClick(4)}/>
      <Suaqre value={squares[5]} onSquareClick={()=>handleSqureClick(5)}/>
    </div>
    <div className="board-row">
      <Suaqre value={squares[6]} onSquareClick={()=>handleSqureClick(6)}/>
      <Suaqre value={squares[7]} onSquareClick={()=>handleSqureClick(7)}/>
      <Suaqre value={squares[8]} onSquareClick={()=>handleSqureClick(8)}/>
    </div>
    </>
  )

}