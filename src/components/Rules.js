export default function Rules({ onButtonClick }) {
  return (
    <div className="c-rules">
      <h3 className="c-rules__heading">Game rules</h3>
      <button onClick={onButtonClick} className="c-rules__button">
        OK
      </button>
    </div>
  );
}
