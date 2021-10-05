/* eslint-disable no-unused-vars */
export interface ISelectOpt {
  label: string | number;
  value: string | number;
}

// Config
export interface IIndexItem {
  name: string;
  id: string;
}

export interface IConfig {
  id: number;
  current: string;
  index: IIndexItem[];
  edit: boolean;
}

// Stats and Tracks
export interface IStats {
  edge: number;
  heart: number;
  iron: number;
  shadow: number;
  wits: number;
}

export interface IMomentum {
  value: number;
  max: number;
  min: number;
  reset: number;
}

export interface ITrack {
  value: number;
  max: number;
  min: number;
}

export interface ITracks {
  health: ITrack;
  spirit: ITrack;
  supply: ITrack;
  momentum: IMomentum;
}

// Conditions and debilities
export interface IConditions {
  wounded: boolean;
  shaken: boolean;
  unprepared: boolean;
  encumbered: boolean;
}

export interface IBanes {
  maimed: boolean;
  corrupted: boolean;
}

export interface IBurdens {
  cursed: boolean;
  tormented: boolean;
}

export interface IDebilities {
  conditions: IConditions;
  banes: IBanes;
  burdens: IBurdens;
}

// Progress Tracks
export interface IDiff {
  label: string;
  mark: number;
  harm: number;
}

export interface IMenace {
  name: string;
  boxes: boolean[];
}
export interface IProgressTrack {
  name: string;
  difficulty: number;
  boxes: number[];
  showMenace: boolean;
  menace?: IMenace;
}

// Assets
export interface IAssetInput {
  label: string;
  text: string;
}

export interface IAssetItem {
  text: string;
  marked: boolean;
  input?: IAssetInput;
}

export interface IAsset {
  id?: string;
  title: string;
  subtitle?: string;
  input?: IAssetInput;
  type: string;
  items: IAssetItem[];
  track?: ITrack;
}

export interface ICharacter {
  name: string;
  xp: number;
  stats: IStats;
  tracks: ITracks;
  debilities: IDebilities;
  vows: IProgressTrack[];
  bonds: IProgressTrack;
  gear: string;
  assets: IAsset[];
}

export interface IJournalEntry {
  title: string;
  content: string;
  pinned?: boolean
}

export interface ILocation {
  name: string;
  region: string;
  description: string;
  trouble: string;

}

export interface INPC {
  name: string;
  description: string;
  track?: IProgressTrack;
}

// Truths
export interface ITruths {
  theOldWorld: string;
  iron: string;
  legacies: string;
  communities: string;
  leaders: string;
  defense: string;
  mysticism: string;
  religion: string;
  firstBorn: string;
  beasts: string;
  horrors: string;
}

// Delve Sites
export interface IDenizens {
  veryCommon: string;
  common1: string;
  common2: string;
  common3: string;
  uncommon1: string;
  uncommon2: string;
  uncommon3: string;
  uncommon4: string;
  rare1: string;
  rare2: string;
  rare3: string;
  unforeseen: string;
}
export interface ISite {
  name: string;
  objective: string;
  theme: string;
  domain: string;
  track: IProgressTrack;
  notes: string;
  denizens: IDenizens;
}

export interface ICampaign {
  id: string;
  name: string;
  character: ICharacter;
  progressTracks: IProgressTrack[];
  journal: IJournalEntry[];
  npcs: INPC[];
  locations: ILocation[];
  truths: ITruths;
  sites: ISite[];
}

// Moves
export interface IMove {
  name: string;
  source: string
  text: string,
  keywords: string;
  oracles?: string[];
}

// Oracles
export interface ITableItem {
  match: number[];
  text: string;
}

export interface IOracle {
  name: string;
  d: number;
  table: ITableItem[];
}

// Rolls
export interface IRollData {
  action: {
    die: number,
    score: number,
    color: string;
  },
  challenge: {
    die1: {
      roll: number;
      color: string;
    },
    die2: {
      roll: number;
      color: string;
    },
    match: boolean,
  },
  progress: boolean;
  result: string;
}
