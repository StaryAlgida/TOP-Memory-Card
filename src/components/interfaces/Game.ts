interface Card {
  id: string;
  src: string;
  is_clicked: boolean;
}

interface Game {
  points: number;
  cards: Card[];
}

export type { Game, Card };
