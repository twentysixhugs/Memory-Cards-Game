export default function Card(props) {
  return (
    <div className="c-card" onClick={props.onClick}>
      <img className="c-card__img" alt="Card image"></img>
      <p className="c-card__text">{props.text}</p>
    </div>
  );
}
