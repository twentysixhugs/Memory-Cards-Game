export default function Card({ onClick, isClicked, text }) {
  return (
    <div className="c-card" onClick={onClick}>
      <img className="c-card__img" alt="Card image"></img>
      <p className="c-card__text">{text}</p>
      {isClicked ? 'YES' : 'NO'}
    </div>
  );
}
