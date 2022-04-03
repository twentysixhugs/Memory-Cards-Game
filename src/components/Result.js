import '../styles/Result.css';

export default function Result({
  score,
  highScore,
  onPlayAgain,
  isGameOver,
  isWin,
}) {
  return (
    <div className="c-result">
      <div className="result-wrapper">
        <span className="c-result__text c-result__text--message">
          {isGameOver && "Oops, you've already clicked that one"}
          {isWin && 'You are really attentive! Congratulations!'}
        </span>
        <span className="c-result__text c-result__text--score">
          Score: {score}
        </span>
        <span className="c-result__text c-result__text--high-score">
          High score: {highScore}
        </span>
        <button className="c-result__button" onClick={onPlayAgain}>
          Play again
        </button>
      </div>
    </div>
  );
}
