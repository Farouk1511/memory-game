import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardList = (props) => {
  
  const [cards, setCards] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setCards(data);
//       });
//   });

  const handleClick = (id) => {

  }

  return (
    <div className="card-list">
      {props.cards.map((card) => (
        <Card
          name={card.name}
          key={card.id}
          id={card.id}
          imgName={`https://robohash.org/${card.id}?set=set4&size=180x180`}
          
        />
      ))}
    </div>
  );
};

export default CardList;
