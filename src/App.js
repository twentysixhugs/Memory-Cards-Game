import { useState, useEffect } from 'react';

import Result from './components/Result';
import Rules from './components/Rules';
import Scoreboard from './components/Scoreboard';
import CardsWrapper from './components/CardsWrapper';

import shuffleArray from './modules/shuffle';
import getInitialCards from './modules/getInitialCards';

import './styles/App.css';

export default function App() {
  const [cards, setCards] = useState([...getInitialCards()]);

  const [difficulty, setDifficulty] = useState(1);

  const [isGameOver, setIsGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);

  useEffect(() => {
    if (!isGameOver && !isWin) {
      resetCards();
      setCardsForDifficulty(1);
    }
  }, [isGameOver, isWin]);

  const [isShowingRules, setIsShowingRules] = useState(false);

  useEffect(() => {
    if (difficulty !== 1) {
      setCardsForDifficulty(difficulty);
    }
  }, [difficulty]);

  const [score, setScore] = useState(0);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }

    if (shouldWin()) {
      setIsWin(true);
      return;
    }

    if (shouldIncreaseDifficulty()) {
      increaseDifficulty();
    }
  }, [score]);

  useEffect(() => {
    setIsShowingRules(true);
  }, []);

  const [highScore, setHighScore] = useState(0);

  function shouldIncreaseDifficulty() {
    const cardsWithDifficulty = cards.filter((card) => card.difficulty);

    const areAllCurrentCardsClicked =
      cardsWithDifficulty.every((card) => card.isClicked) &&
      cardsWithDifficulty.length > 0;

    return areAllCurrentCardsClicked;
  }

  function shouldWin() {
    const areAllCardsClicked =
      cards.every((card) => card.isClicked) && cards.length > 1;

    return areAllCardsClicked;
  }

  function setCardsForDifficulty(difficulty) {
    /* Shuffle the initial cards,
    get the ones without difficulty,
    get first N of them */

    const initialCards = getInitialCards();

    const chosenCards = shuffleArray(
      initialCards.filter((card) => !card.difficulty),
    ).splice(0, difficulty * 5);

    /* Get the indexes in the original cards array 
    which will be replaced with the new cards */
    const indexesInOriginalCards = [];

    chosenCards.forEach((chosenCard) => {
      const chosenCardIndex = initialCards.findIndex(
        (originalCard) => originalCard.id === chosenCard.id,
      );
      indexesInOriginalCards.push(chosenCardIndex);
    });

    setCards((cards) =>
      cards.map((card, index) => {
        if (indexesInOriginalCards.includes(index)) {
          return { ...card, difficulty };
        }

        return card;
      }),
    );
  }

  function handleClickOnCard(cardId) {
    if (isGameOver) return;
    /* Shuffle on click only if the card
    is not yet clicked */
    let isAlreadyClicked = cards.find(
      (card) => card.id === cardId,
    ).isClicked;

    if (isAlreadyClicked) {
      console.log('game over');
      setIsGameOver(true);
    } else {
      setScore(score + 1);
    }

    setCards((cards) => shuffleArray([...cards]));

    /* Mark card as clicked */
    setCards((cards) =>
      cards.map((card) => {
        if (card.id === cardId) {
          return {
            ...card,
            isClicked: true,
          };
        }

        return card;
      }),
    );
  }

  function increaseDifficulty() {
    setCards(() => [...getInitialCards()]); // reset cards
    setCards((cards) => shuffleArray([...cards])); // shuffle them
    setDifficulty((difficulty) => difficulty + 1); // increase difficulty
  }

  function resetCards() {
    setCards(() => [...getInitialCards()]);
  }

  function handlePlayAgain() {
    setScore(0);
    setIsGameOver(false);
    setIsWin(false);
  }

  return (
    <div className="App">
      <main className="main">
        <h1>Memory Card Game</h1>
        <h2>Current difficulty: {difficulty}</h2>
        <CardsWrapper cards={cards} onCardClick={handleClickOnCard} />
      </main>
      <Scoreboard score={score} highScore={highScore} />
      {(isGameOver || isWin) && (
        <Result
          score={score}
          highScore={highScore}
          onPlayAgain={handlePlayAgain}
          isGameOver={isGameOver}
          isWin={isWin}
        />
      )}
      {isShowingRules && (
        <Rules onButtonClick={() => setIsShowingRules(false)} />
      )}
    </div>
  );
}
