import '../styles/Scoreboard.css';

export default function Scoreboard({ score, highScore }) {
  return (
    <aside className="c-scoreboard">
      <span className="c-scoreboard__score">Score: {score}</span>
      <span className="c-scoreboard__high-score">
        High score: {highScore}
      </span>
    </aside>
  );
}
