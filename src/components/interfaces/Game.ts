interface Card {
  id: string;
  src: string;
  is_clicked: boolean;
}

interface Game {
  points: number;
  cards: Card[];
  dificulty: string;
}

export type { Game, Card };
