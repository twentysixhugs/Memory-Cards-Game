export default function Result({ score, highScore, onPlayAgain }) {
  return (
    <div className="c-result">
      <span className="c-result__text c-result--message">
        {"Oops, you've already clicked that one"}
      </span>
      <span className="c-result__text c-result--score">
        Score: {score}
      </span>
      <span className="c-result__text c-result--score">
        High score: {highScore}
      </span>
      <button onClick={onPlayAgain}>Play again</button>
    </div>
  );
}
