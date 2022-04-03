export default function Card({ onClick, text, img }) {
  return (
    <div className="c-card" onClick={onClick}>
      <img className="c-card__img" src={img} alt="Card image"></img>
      <p className="c-card__text">{text}</p>
    </div>
  );
}
