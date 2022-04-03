import '../styles/Scoreboard.css';

export default function Scoreboard({ score, highScore }) {
  return (
    <header className="c-scoreboard">
      <div className="score-wrapper">
        <span className="c-scoreboard__score">Score: {score}</span>
        <span className="c-scoreboard__score c-scoreboard__score--high">
          High score: {highScore}
        </span>
      </div>
    </header>
  );
}
