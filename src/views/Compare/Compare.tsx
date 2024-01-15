import { useEffect, useState } from "react";
import ComparisonCard from "../../components/ComparisonCard";
import { getModels } from "../../api/getModels";
import { Button } from "@mui/joy";

const Compare = () => {
  const [cards, setCards] = useState([]);
  const [models, setModels] = useState([]);

  const addCard = () => {
    const newCards = cards.concat([1]);
    console.log(newCards, cards);
    setCards(newCards);
  };

  const removeCard = (i) => {
    cards.splice(i, 1);
  };

  useEffect(() => {
    getModels().then((response) => {
      setModels(response.data);
    });
  }, []);

  return (
    <>
      <div className="max-w-md flex justify-left p-2">
        <Button onClick={addCard}>+ Model</Button>
      </div>
      <div className="grid grid-cols-2 p-2 gap-2">
        {cards.map((card, i) => {
          return (
            <ComparisonCard
              key={`comparison-card-${i}`}
              id={i}
              models={models}
              onRemove={removeCard}
            />
          );
        })}
      </div>
    </>
  );
};

export default Compare;
