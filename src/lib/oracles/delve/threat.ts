import { IOracle } from 'src/components/models';

export const Threat: { [index: string]: IOracle } = {
  Category: {
    name: 'Category',
    d: 100,
    table: [
      {
        match: [1, 10],
        text: 'Burgeoning Conflict',
      },
      {
        match: [11, 20],
        text: 'Cursed Site',
      },
      {
        match: [21, 30],
        text: 'Environmental Calamity',
      },
      {
        match: [31, 40],
        text: 'Malignant Plague',
      },
      {
        match: [41, 50],
        text: 'Rampaging Creature',
      },
      {
        match: [51, 60],
        text: 'Ravaging Horde',
      },
      {
        match: [61, 70],
        text: 'Scheming Leader',
      },
      {
        match: [71, 80],
        text: 'Power-Hungry Mystic',
      },
      {
        match: [81, 90],
        text: 'Zealous Cult',
      },
      {
        match: [91, 100],
        text: 'Roll Twice',
      },
    ],
  },

  'Burgeoning Conflict': {
    name: 'Burgeoning Conflict',
    d: 100,
    table: [
      {
        match: [1, 10],
        text: 'Allow warmongers to gain influence',
      },
      {
        match: [11, 20],
        text: 'Break a treaty',
      },
      {
        match: [21, 30],
        text: 'Force a hasty decision',
      },
      {
        match: [31, 40],
        text: 'Deepen suspicions',
      },
      {
        match: [41, 50],
        text: 'Trigger a confrontation',
      },
      {
        match: [51, 60],
        text: 'Subvert a potential accord',
      },
      {
        match: [61, 70],
        text: 'Isolate the antagonists',
      },
      {
        match: [71, 80],
        text: 'Draw new battle lines',
      },
      {
        match: [81, 90],
        text: 'Reveal an unexpected aspect of the dispute',
      },
      {
        match: [91, 100],
        text: 'Introduce a new person or faction to complicate the situation',
      },
    ],
  },

  'Cursed Site': {
    name: 'Cursed Site',
    d: 100,
    table: [
      {
        match: [1, 10],
        text: 'Unleash a creature or being',
      },
      {
        match: [11, 20],
        text: 'Lure the unwary into its depths',
      },
      {
        match: [21, 30],
        text: 'Offer promises of power',
      },
      {
        match: [31, 40],
        text: 'Reveal a new aspect of its cursed history',
      },
      {
        match: [41, 50],
        text: 'Expand its malignancy to surrounding lands',
      },
      {
        match: [51, 60],
        text: 'Leave its mark on an inhabitant or visitor',
      },
      {
        match: [61, 70],
        text: 'Reveal hidden depths',
      },
      {
        match: [71, 80],
        text: 'Ensnare an important person or object',
      },
      {
        match: [81, 90],
        text: 'Corrupt the environment',
      },
      {
        match: [91, 100],
        text: 'Transform its nature',
      },
    ],
  },

  'Environmental Calamity': {
    name: 'Environmental Calamity',
    d: 100,
    table: [
      {
        match: [1, 10],
        text: 'Devastate a place',
      },
      {
        match: [11, 20],
        text: 'Block a path',
      },
      {
        match: [21, 30],
        text: 'Threaten a community with imminent destruction',
      },
      {
        match: [31, 40],
        text: 'Manifest unexpected effects',
      },
      {
        match: [41, 50],
        text: 'Expand in scope or intensity',
      },
      {
        match: [51, 60],
        text: 'Allow someone to take advantage',
      },
      {
        match: [61, 70],
        text: 'Deprive of resources',
      },
      {
        match: [71, 80],
        text: 'Isolate an important person or community',
      },
      {
        match: [81, 90],
        text: 'Force refugees into hostile lands',
      },
      {
        match: [91, 100],
        text: 'Disrupt natural ecosystems',
      },
    ],
  },

  'Malignant Plague': {
    name: 'Malignant Plague',
    d: 100,
    table: [
      {
        match: [1, 10],
        text: 'Manifest new symptoms or effects',
      },
      {
        match: [11, 20],
        text: 'Infect someone important',
      },
      {
        match: [21, 30],
        text: 'Expand to new territory or communities',
      },
      {
        match: [31, 40],
        text: 'Allow someone to take advantage',
      },
      {
        match: [41, 50],
        text: 'Allow someone to take the blame',
      },
      {
        match: [51, 60],
        text: 'Create panic or disorder',
      },
      {
        match: [61, 70],
        text: 'Force a horrible decision',
      },
      {
        match: [71, 80],
        text: 'Lure into complacency',
      },
      {
        match: [81, 90],
        text: 'Reveal the root of the sickness',
      },
      {
        match: [91, 100],
        text: 'Undermine a potential cure',
      },
    ],
  },

  'Rampaging Creature': {
    name: 'Rampaging Creature',
    d: 100,
    table: [
      {
        match: [1, 10],
        text: 'Reveal a new aspect of its nature or abilities',
      },
      {
        match: [11, 20],
        text: 'Expand its territory',
      },
      {
        match: [21, 30],
        text: 'Make a sudden and brutal attack',
      },
      {
        match: [31, 40],
        text: 'Control or influence lesser creatures',
      },
      {
        match: [41, 50],
        text: 'Create confusion or strife',
      },
      {
        match: [51, 60],
        text: 'Leave foreboding signs',
      },
      {
        match: [61, 70],
        text: 'Lure the unwary',
      },
      {
        match: [71, 80],
        text: 'Imperil an event',
      },
      {
        match: [81, 90],
        text: 'Assert control over a location',
      },
      {
        match: [91, 100],
        text: 'Threaten resources',
      },
    ],
  },

  'Ravaging Horde': {
    name: 'Ravaging Horde',
    d: 100,
    table: [
      {
        match: [1, 10],
        text: 'Overrun defenses',
      },
      {
        match: [11, 20],
        text: 'Gather resources',
      },
      {
        match: [21, 30],
        text: 'Attack a location',
      },
      {
        match: [31, 40],
        text: 'Expand forces',
      },
      {
        match: [41, 50],
        text: 'Appoint or reveal a leader',
      },
      {
        match: [51, 60],
        text: 'Send forth a champion',
      },
      {
        match: [61, 70],
        text: 'Create a diversion',
      },
      {
        match: [71, 80],
        text: 'Undermine an opposing force from within',
      },
      {
        match: [81, 90],
        text: 'Cut off supplies or reinforcements',
      },
      {
        match: [91, 100],
        text: 'Employ a new weapon',
      },
    ],
  },

  'Scheming Leader': {
    name: 'Scheming Leader',
    d: 100,
    table: [
      {
        match: [1, 10],
        text: 'Defeat an enemy',
      },
      {
        match: [11, 20],
        text: 'Form a new alliance',
      },
      {
        match: [21, 30],
        text: 'Usurp or undermine another leader',
      },
      {
        match: [31, 40],
        text: 'Force the loyalty of a community or important person',
      },
      {
        match: [41, 50],
        text: 'Enact a new law or tradition',
      },
      {
        match: [51, 60],
        text: 'Rescind an old law or tradition',
      },
      {
        match: [61, 70],
        text: 'Reveal a true intention',
      },
      {
        match: [71, 80],
        text: 'Unravel an existing alliance',
      },
      {
        match: [81, 90],
        text: 'Incite conflict',
      },
      {
        match: [91, 100],
        text: 'Use an unexpected capability or asset',
      },
    ],
  },

  'Power-Hungry Mystic': {
    name: 'Power Hungry Mystic',
    d: 100,
    table: [
      {
        match: [1, 10],
        text: 'Gain hidden knowledge',
      },
      {
        match: [11, 20],
        text: 'Assault an enemy with magic',
      },
      {
        match: [21, 30],
        text: 'Despoil a place through magic',
      },
      {
        match: [31, 40],
        text: 'Forge a bond with ancient forces',
      },
      {
        match: [41, 50],
        text: 'Create magical wards or protections',
      },
      {
        match: [51, 60],
        text: 'Obtain a powerful artifact',
      },
      {
        match: [61, 70],
        text: 'Tempt with power or secrets',
      },
      {
        match: [71, 80],
        text: 'Recruit a follower or ally',
      },
      {
        match: [81, 90],
        text: 'Sacrifice something in exchange for greater power',
      },
      {
        match: [91, 100],
        text: 'Use magic to trick or deceive',
      },
    ],
  },

  'Zealous Cult': {
    name: 'Zealous Cult',
    d: 100,
    table: [
      {
        match: [1, 10],
        text: 'Overtake a faction or community',
      },
      {
        match: [11, 20],
        text: 'Unlock secrets to greater power',
      },
      {
        match: [21, 30],
        text: 'Establish false credibility',
      },
      {
        match: [31, 40],
        text: 'Appoint or reveal a leader',
      },
      {
        match: [41, 50],
        text: 'Lure new members or establish alliances',
      },
      {
        match: [51, 60],
        text: 'Subvert opposition through devious schemes',
      },
      {
        match: [61, 70],
        text: 'Attack opposition directly',
      },
      {
        match: [71, 80],
        text: 'Spread the word of its doctrine',
      },
      {
        match: [81, 90],
        text: 'Reveal a dire prophecy',
      },
      {
        match: [91, 100],
        text: 'Reveal its true nature or goal',
      },
    ],
  },
};
