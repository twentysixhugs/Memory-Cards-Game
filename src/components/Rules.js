import '../styles/Rules.css';

export default function Rules({ onButtonClick }) {
  return (
    <div className="c-rules">
      <div className="rules-wrapper">
        <h3 className="c-rules__heading">Game rules</h3>
        <p className="c-rules__text">
          You are given multiple images of Angry Birds and Angry Birds Star
          Wars characters. The images get shuffled every time one of them
          is clicked. You cannot click on any image more than once,
          otherwise your score resets to zero. The main goal is to get the
          highest score as possible.
        </p>
        <button onClick={onButtonClick} className="c-rules__button">
          OK
        </button>
      </div>
    </div>
  );
}
