export interface Character {
  id: string;
  name: string;
  side: string;
  force: Force;
  createdTimestamp: number;
  description: string;
}

export interface BattleCharacter {
  character: Character;
  healt: number;
}

export interface Characters {
  characters: Character[];
}

export interface Force {
  power: string;
  midichlorian: number;
}
