import React, { useState } from 'react';
import Cards from './Cards';
import AddCardForm from './AddCardForm';

const Store = () => {
  const [cardsData, setCardsData] = useState([
    {
      imgSrc: '/images/s1.png',
      title: 'Sac Biodégradable 1',
      description: "Ceci est un sac biodégradable qui aide à réduire l'impact environnemental.",
    },
    {
      imgSrc: '/images/s2.png',
      title: 'Sac Biodégradable 2',
      description: 'Sac biodégradable écologique parfait pour une utilisation quotidienne.',
    },
  ]);

  const addCard = (newCard) => {
    setCardsData((prevCards) => [...prevCards, newCard]);
  };

  return (
    <div>
      <AddCardForm addCard={addCard} />
      <Cards cardsData={cardsData} />

    </div>
  );
};

export default Store;
