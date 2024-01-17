
import Suaqre from "./Square";
import { useState } from "react";

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

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