/* eslint-disable @typescript-eslint/no-var-requires */
import { ICampaign, ICharacter, IJournalEntry } from 'src/components/models';
import { v4 as uuid } from 'uuid';
import { NewProgressTrack } from './tracks';
import { NewMap } from './world';

export function NewCharacter(): ICharacter {
  return {
    name: 'New Character',
    xp: 0,
    stats: {
      edge: 0,
      heart: 0,
      iron: 0,
      shadow: 0,
      wits: 0,
    },
    tracks: {
      health: { value: 5, max: 5, min: 0 },
      spirit: { value: 5, max: 5, min: 0 },
      supply: { value: 5, max: 5, min: 0 },
      momentum: { value: 2, max: 10, min: -6, reset: 2 },
    },
    debilities: {
      conditions: {
        wounded: false,
        shaken: false,
        unprepared: false,
        encumbered: false,
      },
      banes: {
        maimed: false,
        corrupted: false,
      },
      burdens: {
        cursed: false,
        tormented: false,
      },
    },
    vows: [NewProgressTrack()],
    bonds: NewProgressTrack(),
    gear: '',
    assets: [],
  };
}

export function NewJournal(): IJournalEntry {
  return {
    title: 'New journal entry',
    content: '',
  };
}

export function NewCampaign(): ICampaign {
  return {
    id: uuid(),
    name: 'New Campaign',
    character: NewCharacter(),
    truths: {
      theOldWorld: '',
      iron: '',
      legacies: '',
      communities: '',
      leaders: '',
      defense: '',
      mysticism: '',
      religion: '',
      firstBorn: '',
      beasts: '',
      horrors: '',
    },
    progressTracks: [NewProgressTrack()],
    journal: [NewJournal()],
    maps: [NewMap(require('../assets/default-map.jpg') as string, 'The Ironlands')],
  };
}
