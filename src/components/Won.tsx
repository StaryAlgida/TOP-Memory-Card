import { GameProps } from "./interfaces/Game";
import { v1 as uuidv1 } from "uuid";
import img1 from "../assets/cards_img/1.png";
import img2 from "../assets/cards_img/2.png";
import img3 from "../assets/cards_img/3.png";
import img4 from "../assets/cards_img/4.png";
import img5 from "../assets/cards_img/5.webp";
import img6 from "../assets/cards_img/6.png";
import img7 from "../assets/cards_img/7.png";
import img8 from "../assets/cards_img/8.webp";
import img9 from "../assets/cards_img/9.webp";
import img10 from "../assets/cards_img/10.png";
import img11 from "../assets/cards_img/11.webp";
import img12 from "../assets/cards_img/12.webp";
import img13 from "../assets/cards_img/13.webp";
import img14 from "../assets/cards_img/14.webp";
import img15 from "../assets/cards_img/15.png";

export default function Won({ gameObj, setGameObj }: GameProps) {
  const generateCards = (quantity: number) => {
    const list = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12,
      img13,
      img14,
      img15,
    ];

    const newObj = { ...gameObj };
    for (let i = 0; i < quantity; i++) {
      const randomIndex = Math.floor(Math.random() * list.length);
      newObj.cards.push({
        id: uuidv1(),
        img: list[randomIndex],
        is_clicked: false,
      });
      list.splice(randomIndex, 1);
    }

    setGameObj({ ...newObj });
  };

  const reset = () => {
    const newObj = { ...gameObj };
    newObj.isWon = false;
    generateCards(newObj.difficulty);
    setGameObj({ ...newObj });
  };

  const returnMenu = () => {
    const newObj = { ...gameObj };
    newObj.isWon = false;
    newObj.isMenu = true;
    setGameObj({ ...newObj });
  };

  return (
    <div className="menu">
      <h1>You Won</h1>
      <div className="dificulty">
        <button className="dificulty-button" onClick={reset}>
          Reset
        </button>
        <button className="dificulty-button" onClick={returnMenu}>
          Menu
        </button>
      </div>
    </div>
  );
}
