interface Card {
  id: string;
  img: string;
  is_clicked: boolean;
}

interface Game {
  score: number;
  bestScore: number;
  cards: Card[];
  difficulty: number;
  isMenu: boolean;
  isLoose: boolean;
}

interface GameProps {
  gameObj: Game;
  setGameObj: React.Dispatch<React.SetStateAction<Game>>;
}

export type { Game, Card, GameProps };
