import { useState, useEffect } from 'react';

import Difficulty from './components/Difficulty';
import Result from './components/Result';
import Rules from './components/Rules';
import Scoreboard from './components/Scoreboard';
import Card from './components/Card';

import shuffleArray from './modules/shuffle';

import './styles/App.css';

export default function App() {
  const [cards, setCards] = useState([
    { text: '1 card', id: 1, clicked: false },
    { text: '2 card', id: 2, clicked: false },
    { text: '3 card', id: 3, clicked: false },
    { text: '4 card', id: 4, clicked: false },
    { text: '5 card', id: 5, clicked: false },
    { text: '6 card', id: 6, clicked: false },
    { text: '7 card', id: 7, clicked: false },
    { text: '8 card', id: 8, clicked: false },
    { text: '9 card', id: 9, clicked: false },
    { text: '10 card', id: 10, clicked: false },
    { text: '11 card', id: 11, clicked: false },
    { text: '12 card', id: 12, clicked: false },
    { text: '13 card', id: 13, clicked: false },
    { text: '14 card', id: 14, clicked: false },
    { text: '15 card', id: 15, clicked: false },
    { text: '16 card', id: 16, clicked: false },
    { text: '17 card', id: 17, clicked: false },
    { text: '18 card', id: 18, clicked: false },
    { text: '19 card', id: 19, clicked: false },
    { text: '20 card', id: 20, clicked: false },
  ]);

  const [level, setLevel] = useState(1);

  useEffect(() => {
    shuffleCards();
  }, []);

  function shuffleCards() {
    setCards((cards) => shuffleArray([...cards]));
  }

  function getCardsInRange(from, to) {
    return cards.slice(from, to);
  }

  function handleClickOnCard(cardId, e) {
    setCards((cards) =>
      cards.map((card) => {
        if (card.id === cardId) {
          return {
            ...card,
            clicked: true,
          };
        }

        return card;
      }),
    );

    shuffleCards();
  }

  // randomly choose N cards for M level

  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      {level >= 1 && (
        <div className="cards-wrapper">
          {getCardsInRange(0, 5).map((card) => (
            <Card
              key={card.id}
              text={card.text}
              onClick={(e) => handleClickOnCard(card.id, e)}
            />
          ))}
        </div>
      )}
      {level >= 2 && (
        <div className="cards-wrapper">
          {getCardsInRange(5, 10).map((card) => (
            <Card
              key={card.id}
              text={card.text}
              onClick={(e) => handleClickOnCard(card.id, e)}
            />
          ))}
        </div>
      )}
      {level >= 3 && (
        <div className="cards-wrapper">
          {getCardsInRange(10, 15).map((card) => (
            <Card
              key={card.id}
              text={card.text}
              onClick={(e) => handleClickOnCard(card.id, e)}
            />
          ))}
        </div>
      )}
      <button onClick={() => setLevel(level + 1)}>Level + 1</button>
    </div>
  );
}
