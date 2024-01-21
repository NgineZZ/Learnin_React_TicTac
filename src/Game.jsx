import Board from "./Board";
import { useState } from "react";


export default function Game() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;  
  const currentSquares = history[currentMove];

  

  function handlePlay(nextSquares) {
    const nextHistory=[...history.slice(0, currentMove+ 1), nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(nextMove){
    setCurrentMove(nextMove);
  }

  const moves = history.map((sq, i)=>{
    let info;
    if(i>0){
      info = 'Go to move #' + i;
    } else{
      info = 'Go to game start';
    }
    return (
      <li key={i}><button onClick={()=>jumpTo(i)}>{info}</button></li>
    )
  })

  return (
    <>
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
    </>
  );
}