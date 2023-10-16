import { useState } from "react";
import Menu from "./interfaces/game/Menu";
import GameStart from "./interfaces/game/GameState";

export default function Section() {
  const [isMenu, setIsMenu] = useState<boolean>(true);

  return (
    <section>
      {isMenu ? <Menu isMenu={isMenu} setIsMenu={setIsMenu} /> : <GameStart />}

      {/* game */}
    </section>
  );
}
