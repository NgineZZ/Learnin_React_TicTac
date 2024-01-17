import './App.css'

// eslint-disable-next-line react/prop-types
export default function Suaqre({ value, onSquareClick }) {

  return(
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  )
}