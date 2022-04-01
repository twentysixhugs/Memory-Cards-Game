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
    { text: '1 card', id: 1 },
    { text: '2 card', id: 2 },
    { text: '3 card', id: 3 },
    { text: '4 card', id: 4 },
    { text: '5 card', id: 5 },
    { text: '6 card', id: 6 },
    { text: '7 card', id: 7 },
    { text: '8 card', id: 8 },
  ]);

  useEffect(() => {
    shuffleCards();
  }, []);

  function shuffleCards() {
    setCards(shuffleArray([...cards]));
  }

  function getFirstNElements(n) {
    const shuffledCards = shuffleArray([...cards]);
    shuffledCards.slice(0, n);
  }

  // randomly choose N cards for M level

  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      <div className="cards-wrapper">
        {cards.map((card) => (
          <Card key={card.id} text={card.text} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
}
