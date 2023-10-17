import { CardsPrint } from "./interfaces/Game";

export default function CardPrint({ gameObj, handleClick }: CardsPrint) {
  return (
    <>
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
    </>
  );
}
