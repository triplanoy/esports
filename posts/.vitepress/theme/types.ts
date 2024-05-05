export interface Match {
  team1: string;
  score1: number;
  team2: string;
  score2: number;
  league: string;
  slug: string;
  date: {
    time: number;
    string: string;
  };
}
