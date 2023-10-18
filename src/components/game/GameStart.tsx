import CardPrint from "../CardPrint";
import Loose from "../Loose";
import Won from "../Won";
import { Card, GameProps } from "../interfaces/Game";

export default function GameStart({ gameObj, setGameObj }: GameProps) {
  const randomCards = () => {
    const newObj = { ...gameObj };
    for (let i = 0; i < newObj.difficulty; i++) {
      const j = Math.floor(Math.random() * newObj.cards.length);
      [newObj.cards[i], newObj.cards[j]] = [newObj.cards[j], newObj.cards[i]];
    }
    setGameObj({ ...newObj });
  };

  const loose = () => {
    const newObj = { ...gameObj };
    newObj.isLoose = true;
    newObj.cards = [];
    setGameObj({ ...newObj });
  };

  const handleClick = (el: Card) => {
    const newObj = { ...gameObj };

    if (!el.is_clicked) {
      const cardId = newObj.cards.findIndex((element) => el.id === element.id);
      newObj.cards[cardId].is_clicked = true;
      newObj.score += 1;

      if (newObj.score === newObj.difficulty) {
        newObj.cards = [];
        newObj.bestScore = 0;
        newObj.score = 0;
        newObj.isWon = true;
        console.log("won");
        setGameObj({ ...newObj });
      } else {
        randomCards();
        setGameObj({ ...newObj });
      }
    } else {
      loose();
      // reset
    }
  };

  return (
    <div className="container">
      {gameObj.isWon ? (
        <Won gameObj={gameObj} setGameObj={setGameObj} />
      ) : gameObj.isLoose ? (
        <Loose gameObj={gameObj} setGameObj={setGameObj} />
      ) : (
        <CardPrint gameObj={gameObj} handleClick={handleClick} />
      )}
    </div>
  );
}
