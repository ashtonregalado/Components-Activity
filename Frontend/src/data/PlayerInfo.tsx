type Stats = {
  PPG: number;
  RPG: number;
  APG: number;
};

export interface Player {
  id: number;
  name: string;
  number: number;
  age: number;
  position: string;
  team: string;
  image: string;
  stats: Stats;
}
