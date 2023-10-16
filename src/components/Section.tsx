import { useState } from "react";
import Menu from "./game/Menu";
import GameStart from "./game/GameStart";
import { Game } from "./interfaces/Game";

export default function Section() {
  const [gameObj, setGameObj] = useState<Game>({
    score: 0,
    bestScore: 0,
    cards: [],
    difficulty: 0,
    isMenu: true,
    isLoose: false,
  });

  return (
    <section>
      {gameObj.isMenu ? (
        <Menu gameObj={gameObj} setGameObj={setGameObj} />
      ) : (
        <GameStart gameObj={gameObj} setGameObj={setGameObj} />
      )}
    </section>
  );
}
