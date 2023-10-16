import { Card, Game, GameProps } from "../interfaces/Game";

export default function GameStart({ gameObj, setGameObj }: GameProps) {
  const handleClick = (el: Card) => {
    const newObj = { ...gameObj };
    console.log("handleclick: ", newObj);

    if (!el.is_clicked) {
      const cardId = newObj.cards.findIndex((element) => el.id === element.id);
      newObj.cards[cardId].is_clicked = true;
      newObj.score += 1;
      setGameObj({ ...newObj });

      //new render
      // const cards = [...newObj.cards];
      // console.log("cards:", cards);
    } else {
      if (newObj.bestScore < newObj.score) {
        newObj.bestScore = newObj.score;
        setGameObj(newObj);
      }
      // reset
    }
  };

  return (
    <div className="container">
      <h2>Best score: {gameObj.bestScore}</h2>

      <div className="game">
        {gameObj.cards.map((el) => {
          return (
            <div onClick={() => handleClick(el)} className="card" key={el.id}>
              <img src={el.img} alt="" />
            </div>
          );
        })}
      </div>
      <h2>
        {gameObj.score}/{gameObj.difficulty}
      </h2>
    </div>
  );
}
