import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import data from "./data.json";
import Nav from "./components/Nav";

function App() {
  const [scores, setScores] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [cards, setCards] = useState(data);

  const handleClick = (id) => {
    setScores(scores + 1);
    data.forEach((card) => {
      if (card.id === id && card.clicked) {
        if (scores > highscore) {
          setHighscore(scores);
        }
        setScores(0);
        reset();
      } else if (card.id === id && card.clicked === false) {
        card.clicked = true;
        setScores(scores + 1);
      }
    });
  };

  useEffect(() => {
    setCards(shuffle(data));
  }, [scores]);

  const reset = () => {
    data.forEach((card) => (card.clicked = false));
  };

  // Function that takes an array as a parameter and shuffles it
  const shuffle = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  return (
    <div>
      <Nav
        title="Memory Game"
        subHead="Get points by clicking on an image but don't click on any more than once!"
        score={scores}
        highscore={highscore}
      />

      <div className="card-list">
        {cards.map((card) => (
          <Card
            name={card.name}
            key={card.id}
            id={card.id}
            imgName={`https://robohash.org/${card.id}?set=set4&size=180x180`}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
