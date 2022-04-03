import Card from './Card';

export default function CardsWrapper({ cards, onCardClick }) {
  return (
    <div className="cards-wrapper">
      {cards
        .filter((card) => card.difficulty)
        .map((card) => (
          <Card
            key={card.id}
            text={card.text}
            img={card.img}
            onClick={(e) => onCardClick(card.id, e)}
          />
        ))}
    </div>
  );
}
