import { IOracle } from 'src/components/models';

export const SiteNature: { [index: string]: IOracle } = {
  Theme: {
    name: 'Theme',
    d: 100,
    table: [
      {
        match: [1, 11],
        text: 'Ancient',
      },
      {
        match: [12, 23],
        text: 'Corrupted',
      },
      {
        match: [24, 35],
        text: 'Fortified',
      },
      {
        match: [36, 48],
        text: 'Hallowed',
      },
      {
        match: [49, 61],
        text: 'Haunted',
      },
      {
        match: [62, 74],
        text: 'Infested',
      },
      {
        match: [75, 87],
        text: 'Ravaged',
      },
      {
        match: [88, 100],
        text: 'Wild',
      },
    ],
  },

  Domain: {
    name: 'Domain',
    d: 100,
    table: [
      {
        match: [1, 6],
        text: 'Barrow',
      },
      {
        match: [7, 18],
        text: 'Cavern',
      },
      {
        match: [19, 28],
        text: 'Frozen Cavern',
      },
      {
        match: [29, 32],
        text: 'Icereach',
      },
      {
        match: [33, 38],
        text: 'Mine',
      },
      {
        match: [39, 48],
        text: 'Pass',
      },
      {
        match: [49, 58],
        text: 'Ruin',
      },
      {
        match: [59, 68],
        text: 'Sea Cave',
      },
      {
        match: [69, 78],
        text: 'Shadowfen',
      },
      {
        match: [79, 83],
        text: 'Stronghold',
      },
      {
        match: [84, 95],
        text: 'Tanglewood',
      },
      {
        match: [96, 100],
        text: 'Underkeep',
      },
    ],
  },
};

export const ThemeFeatures: { [index: string]: IOracle } = {
  Ancient: {
    name: 'Theme:Ancient',
    d: 20,
    table: [
      {
        match: [1, 4],
        text: 'Evidence of lost knowledge',
      },
      {
        match: [5, 8],
        text: 'Inscrutable relics',
      },
      {
        match: [9, 12],
        text: 'Ancient artistry or craft',
      },
      {
        match: [13, 16],
        text: 'Preserved corpses or fossils',
      },
      {
        match: [17, 20],
        text: 'Visions of this place in another time',
      },
    ],
  },

  Corrupted: {
    name: 'Theme:Corrupted',
    d: 20,
    table: [
      {
        match: [1, 4],
        text: 'Mystic focus or conduit',
      },
      {
        match: [5, 8],
        text: 'Strange environmental disturbances',
      },
      {
        match: [9, 12],
        text: 'Mystic runes or markings',
      },
      {
        match: [13, 16],
        text: 'Blight or decay',
      },
      {
        match: [17, 20],
        text: 'Evidence of a foul ritual',
      },
    ],
  },

  Fortified: {
    name: 'Theme:Fortified',
    d: 20,
    table: [
      {
        match: [1, 4],
        text: 'Camp or quarters',
      },
      {
        match: [5, 8],
        text: 'Guarded location',
      },
      {
        match: [9, 12],
        text: 'Storage or repository',
      },
      {
        match: [13, 16],
        text: 'Work or training area',
      },
      {
        match: [17, 20],
        text: 'Command center or leadership',
      },
    ],
  },

  Hallowed: {
    name: 'Theme:Hallowed',
    d: 20,
    table: [
      {
        match: [1, 4],
        text: 'Temple or altar',
      },
      {
        match: [5, 8],
        text: 'Offerings or atonements',
      },
      {
        match: [9, 12],
        text: 'Religious relic or idol',
      },
      {
        match: [13, 16],
        text: 'Consecrated ground',
      },
      {
        match: [17, 20],
        text: 'Dwellings or gathering place',
      },
    ],
  },

  Haunted: {
    name: 'Theme:Haunted',
    d: 20,
    table: [
      {
        match: [1, 4],
        text: 'Tomb or burial site',
      },
      {
        match: [5, 8],
        text: 'Blood was spilled here',
      },
      {
        match: [9, 12],
        text: 'Unnatural mists or darkness',
      },
      {
        match: [13, 16],
        text: 'Messages from beyond the grave',
      },
      {
        match: [17, 20],
        text: 'Apparitions of a person or event',
      },
    ],
  },

  Infested: {
    name: 'Theme:Infested',
    d: 20,
    table: [
      {
        match: [1, 4],
        text: 'Inhabited nest',
      },
      {
        match: [5, 8],
        text: 'Abandoned nest',
      },
      {
        match: [9, 12],
        text: 'Ravaged terrain or architecture',
      },
      {
        match: [13, 16],
        text: 'Remains or carrion',
      },
      {
        match: [17, 20],
        text: 'Hoarded food',
      },
    ],
  },

  Ravaged: {
    name: 'Theme:Ravaged',
    d: 20,
    table: [
      {
        match: [1, 4],
        text: 'Path of destruction',
      },
      {
        match: [5, 8],
        text: 'Abandoned or ruined dwelling',
      },
      {
        match: [9, 12],
        text: 'Untouched or preserved area',
      },
      {
        match: [13, 16],
        text: 'Traces of what was lost',
      },
      {
        match: [17, 20],
        text: 'Ill-fated victims',
      },
    ],
  },

  Wild: {
    name: 'Theme:Wild',
    d: 20,
    table: [
      {
        match: [1, 4],
        text: 'Denizen’s lair',
      },
      {
        match: [5, 8],
        text: 'Territorial markings',
      },
      {
        match: [9, 12],
        text: 'Impressive flora or fauna',
      },
      {
        match: [13, 16],
        text: 'Hunting ground or watering hole',
      },
      {
        match: [17, 20],
        text: 'Remains or carrion',
      },
    ],
  },
};

export const DomainFeatures: { [index: string]: IOracle } = {
  Barrow: {
    name: 'Domain:Barrow',
    d: 0,
    table: [
      {
        match: [21, 43],
        text: 'Burial chambers',
      },
      {
        match: [44, 56],
        text: 'Maze of narrow passages',
      },
      {
        match: [57, 64],
        text: 'Shrine',
      },
      {
        match: [65, 68],
        text: 'Stately vault',
      },
      {
        match: [69, 72],
        text: 'Offerings to the dead',
      },
      {
        match: [73, 76],
        text: 'Statuary or tapestries',
      },
      {
        match: [77, 80],
        text: 'Remains of a grave robber',
      },
      {
        match: [81, 84],
        text: 'Mass grave',
      },
      {
        match: [85, 88],
        text: 'Exhumed corpses',
      },
      {
        match: [89, 98],
        text: 'Something unusual or unexpected',
      },
      {
        match: [99],
        text: 'You transition into a new theme',
      },
      {
        match: [100],
        text: 'You transition into a new domain',
      },
    ],
  },

  Cavern: {
    name: 'Domain:Cavern',
    d: 0,
    table: [
      {
        match: [21, 43],
        text: 'Twisting passages',
      },
      {
        match: [44, 56],
        text: 'Cramped caves',
      },
      {
        match: [57, 64],
        text: 'Vast chamber',
      },
      {
        match: [65, 68],
        text: 'Subterranean waterway',
      },
      {
        match: [69, 72],
        text: 'Cave pool',
      },
      {
        match: [73, 76],
        text: 'Natural bridge',
      },
      {
        match: [77, 80],
        text: 'Towering stone formations',
      },
      {
        match: [81, 84],
        text: 'Natural illumination',
      },
      {
        match: [85, 88],
        text: 'Dark pit',
      },
      {
        match: [89, 98],
        text: 'Something unusual or unexpected',
      },
      {
        match: [99],
        text: 'You transition into a new theme',
      },
      {
        match: [100],
        text: 'You transition into a new domain',
      },
    ],
  },

  'Frozen Cavern': {
    name: 'Domain:Frozen Cavern',
    d: 0,
    table: [
      {
        match: [21, 43],
        text: 'Maze of icy tunnels',
      },
      {
        match: [44, 56],
        text: 'Glistening cave',
      },
      {
        match: [57, 64],
        text: 'Vast chamber',
      },
      {
        match: [65, 68],
        text: 'Frigid waterway',
      },
      {
        match: [69, 72],
        text: 'Icy pools',
      },
      {
        match: [73, 76],
        text: 'Magnificent ice formations',
      },
      {
        match: [77, 80],
        text: 'Frozen waterfall',
      },
      {
        match: [81, 84],
        text: 'Deep crevasses',
      },
      {
        match: [85, 88],
        text: 'Discovery locked in the ice',
      },
      {
        match: [89, 98],
        text: 'Something unusual or unexpected',
      },
      {
        match: [99],
        text: 'You transition into a new theme',
      },
      {
        match: [100],
        text: 'You transition into a new domain',
      },
    ],
  },

  Icereach: {
    name: 'Domain:Icereach',
    d: 0,
    table: [
      {
        match: [21, 43],
        text: 'Plains of ice and snow',
      },
      {
        match: [44, 56],
        text: 'Seawater channel',
      },
      {
        match: [57, 64],
        text: 'Icy highlands',
      },
      {
        match: [65, 68],
        text: 'Crevasse',
      },
      {
        match: [69, 72],
        text: 'Ice floes',
      },
      {
        match: [73, 76],
        text: 'Ship trapped in ice',
      },
      {
        match: [77, 80],
        text: 'Animal herd or habitat',
      },
      {
        match: [81, 84],
        text: 'Frozen carcass',
      },
      {
        match: [85, 88],
        text: 'Camp or outpost',
      },
      {
        match: [89, 98],
        text: 'Something unusual or unexpected',
      },
      {
        match: [99],
        text: 'You transition into a new theme',
      },
      {
        match: [100],
        text: 'You transition into a new domain',
      },
    ],
  },

  Mine: {
    name: 'Domain:Mine',
    d: 0,
    table: [
      {
        match: [21, 43],
        text: 'Cramped tunnels',
      },
      {
        match: [44, 56],
        text: 'Mine works',
      },
      {
        match: [57, 64],
        text: 'Excavated chamber',
      },
      {
        match: [65, 68],
        text: 'Mineshaft',
      },
      {
        match: [69, 72],
        text: 'Collapsed tunnel',
      },
      {
        match: [73, 76],
        text: 'Cluttered storage',
      },
      {
        match: [77, 80],
        text: 'Housing or common areas',
      },
      {
        match: [81, 84],
        text: 'Flooded chamber',
      },
      {
        match: [85, 88],
        text: 'Unearthed secret',
      },
      {
        match: [89, 98],
        text: 'Something unusual or unexpected',
      },
      {
        match: [99],
        text: 'You transition into a new theme',
      },
      {
        match: [100],
        text: 'You transition into a new domain',
      },
    ],
  },

  Pass: {
    name: 'Domain:Pass',
    d: 0,
    table: [
      {
        match: [21, 43],
        text: 'Winding mountain path',
      },
      {
        match: [44, 56],
        text: 'Snowfield or glacial rocks',
      },
      {
        match: [57, 64],
        text: 'River gorge',
      },
      {
        match: [65, 68],
        text: 'Crashing waterfall',
      },
      {
        match: [69, 72],
        text: 'Highland lake',
      },
      {
        match: [73, 76],
        text: 'Forgotten cairn',
      },
      {
        match: [77, 80],
        text: 'Bridge',
      },
      {
        match: [81, 84],
        text: 'Overlook',
      },
      {
        match: [85, 88],
        text: 'Camp or outpost',
      },
      {
        match: [89, 98],
        text: 'Something unusual or unexpected',
      },
      {
        match: [99],
        text: 'You transition into a new theme',
      },
      {
        match: [100],
        text: 'You transition into a new domain',
      },
    ],
  },

  Ruin: {
    name: 'Domain:Ruin',
    d: 0,
    table: [
      {
        match: [21, 43],
        text: 'Crumbling corridors and chambers',
      },
      {
        match: [44, 56],
        text: 'Collapsed architecture',
      },
      {
        match: [57, 64],
        text: 'Rubble-choked hall',
      },
      {
        match: [65, 68],
        text: 'Courtyard',
      },
      {
        match: [69, 72],
        text: 'Archive or library',
      },
      {
        match: [73, 76],
        text: 'Broken statuary or fading murals',
      },
      {
        match: [77, 80],
        text: 'Preserved vault',
      },
      {
        match: [81, 84],
        text: 'Temple to forgotten gods',
      },
      {
        match: [85, 88],
        text: 'Mausoleum',
      },
      {
        match: [89, 98],
        text: 'Something unusual or unexpected',
      },
      {
        match: [99],
        text: 'You transition into a new theme',
      },
      {
        match: [100],
        text: 'You transition into a new domain',
      },
    ],
  },

  'Sea Cave': {
    name: 'Domain:Sea Cave',
    d: 0,
    table: [
      {
        match: [21, 43],
        text: 'Watery tunnels',
      },
      {
        match: [44, 56],
        text: 'Eroded chamber',
      },
      {
        match: [57, 64],
        text: 'Flooded chamber',
      },
      {
        match: [65, 68],
        text: 'Vast chamber',
      },
      {
        match: [69, 72],
        text: 'Dry passages',
      },
      {
        match: [73, 76],
        text: 'Freshwater inlet',
      },
      {
        match: [77, 80],
        text: 'Rocky island',
      },
      {
        match: [81, 84],
        text: 'Waterborne debris',
      },
      {
        match: [85, 88],
        text: 'Shipwreck or boat',
      },
      {
        match: [89, 98],
        text: 'Something unusual or unexpected',
      },
      {
        match: [99],
        text: 'You transition into a new theme',
      },
      {
        match: [100],
        text: 'You transition into a new domain',
      },
    ],
  },

  Shadowfen: {
    name: 'Domain:Shadowfen',
    d: 0,
    table: [
      {
        match: [21, 43],
        text: 'Narrow path through a fetid bog',
      },
      {
        match: [44, 56],
        text: 'Stagnant waterway',
      },
      {
        match: [57, 64],
        text: 'Flooded thicket',
      },
      {
        match: [65, 68],
        text: 'Island of dry land',
      },
      {
        match: [69, 72],
        text: 'Submerged discovery',
      },
      {
        match: [73, 76],
        text: 'Preserved corpses',
      },
      {
        match: [77, 80],
        text: 'Overgrown structure',
      },
      {
        match: [81, 84],
        text: 'Tall reeds',
      },
      {
        match: [85, 88],
        text: 'Camp or outpost',
      },
      {
        match: [89, 98],
        text: 'Something unusual or unexpected',
      },
      {
        match: [99],
        text: 'You transition into a new theme',
      },
      {
        match: [100],
        text: 'You transition into a new domain',
      },
    ],
  },

  Stronghold: {
    name: 'Domain:Stronghold',
    d: 0,
    table: [
      {
        match: [21, 43],
        text: 'Connecting passageways',
      },
      {
        match: [44, 56],
        text: 'Barracks or common quarters',
      },
      {
        match: [57, 64],
        text: 'Large hall',
      },
      {
        match: [65, 68],
        text: 'Workshop or library',
      },
      {
        match: [69, 72],
        text: 'Command center or leadership',
      },
      {
        match: [73, 76],
        text: 'Ladder or stairwell',
      },
      {
        match: [77, 80],
        text: 'Storage',
      },
      {
        match: [81, 84],
        text: 'Kitchen or larder',
      },
      {
        match: [85, 88],
        text: 'Courtyard',
      },
      {
        match: [89, 98],
        text: 'Something unusual or unexpected',
      },
      {
        match: [99],
        text: 'You transition into a new theme',
      },
      {
        match: [100],
        text: 'You transition into a new domain',
      },
    ],
  },

  Tanglewood: {
    name: 'Domain:Tanglewood',
    d: 0,
    table: [
      {
        match: [21, 43],
        text: 'Dense thicket',
      },
      {
        match: [44, 56],
        text: 'Overgrown path',
      },
      {
        match: [57, 64],
        text: 'Waterway',
      },
      {
        match: [65, 68],
        text: 'Clearing',
      },
      {
        match: [69, 72],
        text: 'Elder tree',
      },
      {
        match: [73, 76],
        text: 'Brambles',
      },
      {
        match: [77, 80],
        text: 'Overgrown structure',
      },
      {
        match: [81, 84],
        text: 'Rocky outcrop',
      },
      {
        match: [85, 88],
        text: 'Camp or outpost',
      },
      {
        match: [89, 98],
        text: 'Something unusual or unexpected',
      },
      {
        match: [99],
        text: 'You transition into a new theme',
      },
      {
        match: [100],
        text: 'You transition into a new domain',
      },
    ],
  },

  Underkeep: {
    name: 'Domain:Underkeep',
    d: 0,
    table: [
      {
        match: [21, 43],
        text: 'Carved passages',
      },
      {
        match: [44, 56],
        text: 'Hall or chamber',
      },
      {
        match: [57, 64],
        text: 'Stairs into the depths',
      },
      {
        match: [65, 68],
        text: 'Grand doorway or entrance',
      },
      {
        match: [69, 72],
        text: 'Tomb or catacombs',
      },
      {
        match: [73, 76],
        text: 'Rough-hewn cave',
      },
      {
        match: [77, 80],
        text: 'Foundry or workshop',
      },
      {
        match: [81, 84],
        text: 'Shrine or temple',
      },
      {
        match: [85, 88],
        text: 'Imposing architecture or artistry',
      },
      {
        match: [89, 98],
        text: 'Something unusual or unexpected',
      },
      {
        match: [99],
        text: 'You transition into a new theme',
      },
      {
        match: [100],
        text: 'You transition into a new domain',
      },
    ],
  },
};

export const ThemeDangers: { [index: string]: IOracle } = {
  Ancient: {
    name: 'Theme:Ancient',
    d: 30,
    table: [
      {
        match: [1, 5],
        text: 'Ancient trap',
      },
      {
        match: [6, 10],
        text: 'Hazardous architecture or terrain',
      },
      {
        match: [11, 12],
        text: 'Blocked or broken path',
      },
      {
        match: [13, 14],
        text: 'Denizen protects an ancient secret',
      },
      {
        match: [15, 16],
        text: 'Denizen reveres an ancient power',
      },
      {
        match: [17, 18],
        text: 'Living relics of a lost age',
      },
      {
        match: [19, 20],
        text: 'Ancient evil resurgent',
      },
      {
        match: [21, 22],
        text: 'Dire warnings of a long-buried danger',
      },
      {
        match: [23, 24],
        text: 'Ancient disease or contamination',
      },
      {
        match: [25, 26],
        text: 'Artifact of terrible meaning or power',
      },
      {
        match: [27, 28],
        text: 'Disturbing evidence of ancient wrongs',
      },
      {
        match: [29, 30],
        text: 'Others seek power or knowledge',
      },
    ],
  },

  Corrupted: {
    name: 'Theme:Corrupted',
    d: 30,
    table: [
      {
        match: [1, 5],
        text: 'Denizen spawned from dark magic',
      },
      {
        match: [6, 10],
        text: 'Denizen controls dark magic',
      },
      {
        match: [11, 12],
        text: 'Denizen corrupted by dark magic',
      },
      {
        match: [13, 14],
        text: 'Corruption marks you',
      },
      {
        match: [15, 16],
        text: 'Innocents held in thrall',
      },
      {
        match: [17, 18],
        text: 'Revelations of a terrible truth',
      },
      {
        match: [19, 20],
        text: 'Mystic trap or trigger',
      },
      {
        match: [21, 22],
        text: 'Mystic barrier or ward',
      },
      {
        match: [23, 24],
        text: 'Illusions lead you astray',
      },
      {
        match: [25, 26],
        text: 'Dark ritual in progress',
      },
      {
        match: [27, 28],
        text: 'Lingering effects of a dark ritual',
      },
      {
        match: [29, 30],
        text: 'Dread harbingers of a greater magic',
      },
    ],
  },

  Fortified: {
    name: 'Theme:Fortified',
    d: 30,
    table: [
      {
        match: [1, 5],
        text: 'Denizen patrols the area',
      },
      {
        match: [6, 10],
        text: 'Denizen on guard',
      },
      {
        match: [11, 12],
        text: 'Denizen ready to sound the alarm',
      },
      {
        match: [13, 14],
        text: 'Denizen sets an ambush',
      },
      {
        match: [15, 16],
        text: 'Denizen lures you into a trap',
      },
      {
        match: [17, 18],
        text: 'Denizens converge on this area',
      },
      {
        match: [19, 20],
        text: 'Pets or underlings',
      },
      {
        match: [21, 22],
        text: 'Unexpected alliance revealed',
      },
      {
        match: [23, 24],
        text: 'Nefarious plans revealed',
      },
      {
        match: [25, 26],
        text: 'Unexpected leader revealed',
      },
      {
        match: [27, 28],
        text: 'Trap',
      },
      {
        match: [29, 30],
        text: 'Alarm trigger',
      },
    ],
  },

  Hallowed: {
    name: 'Theme:Hallowed',
    d: 30,
    table: [
      {
        match: [1, 5],
        text: 'Denizen defends their sanctum',
      },
      {
        match: [6, 10],
        text: 'Denizen enacts the will of their god',
      },
      {
        match: [11, 12],
        text: 'Denizen seeks martyrdom',
      },
      {
        match: [13, 14],
        text: 'Secret of the faith is revealed',
      },
      {
        match: [15, 16],
        text: 'Greater purpose is revealed',
      },
      {
        match: [17, 18],
        text: 'Unexpected disciples are revealed',
      },
      {
        match: [19, 20],
        text: 'Divine manifestations',
      },
      {
        match: [21, 22],
        text: 'Aspect of the faith beguiles you',
      },
      {
        match: [23, 24],
        text: 'Unexpected leader is revealed',
      },
      {
        match: [25, 26],
        text: 'Embodiment of a god or myth',
      },
      {
        match: [27, 28],
        text: 'Protective ward or barrier',
      },
      {
        match: [29, 30],
        text: 'Prophecies reveal a dark fate',
      },
    ],
  },

  Haunted: {
    name: 'Theme:Haunted',
    d: 30,
    table: [
      {
        match: [1, 5],
        text: 'Denizen haunts this area',
      },
      {
        match: [6, 10],
        text: 'Unsettling sounds or foreboding signs',
      },
      {
        match: [11, 12],
        text: 'Denizen attacks without warning',
      },
      {
        match: [13, 14],
        text: 'Denizen makes a costly demand',
      },
      {
        match: [15, 16],
        text: 'Denizen seizes your body or mind',
      },
      {
        match: [17, 18],
        text: 'Denizen taunts or lures you',
      },
      {
        match: [19, 20],
        text: 'A disturbing truth is revealed',
      },
      {
        match: [21, 22],
        text: 'Frightening visions',
      },
      {
        match: [23, 24],
        text: 'The environment is used against you',
      },
      {
        match: [25, 26],
        text: 'Trickery leads you astray',
      },
      {
        match: [27, 28],
        text: 'True nature of this place is revealed',
      },
      {
        match: [29, 30],
        text: 'Sudden, shocking manifestation',
      },
    ],
  },

  Infested: {
    name: 'Theme:Infested',
    d: 30,
    table: [
      {
        match: [1, 5],
        text: 'Denizens swarm and attack',
      },
      {
        match: [6, 10],
        text: 'Toxic or sickening environment',
      },
      {
        match: [11, 12],
        text: 'Denizen stalks you',
      },
      {
        match: [13, 14],
        text: 'Denizen takes or destroys something',
      },
      {
        match: [15, 16],
        text: 'Denizen reveals surprising cleverness',
      },
      {
        match: [17, 18],
        text: 'Denizen guided by a greater threat',
      },
      {
        match: [19, 20],
        text: 'Denizen blocks the path',
      },
      {
        match: [21, 22],
        text: 'Denizen funnels you down a new path',
      },
      {
        match: [23, 24],
        text: 'Denizen undermines the path',
      },
      {
        match: [25, 26],
        text: 'Denizen lays in wait',
      },
      {
        match: [27, 28],
        text: 'Trap or snare',
      },
      {
        match: [29, 30],
        text: 'Victim’s horrible fate is revealed',
      },
    ],
  },

  Ravaged: {
    name: 'Theme:Ravaged',
    d: 30,
    table: [
      {
        match: [1, 5],
        text: 'Precarious architecture or terrain',
      },
      {
        match: [6, 10],
        text: 'Imminent collapse or destruction',
      },
      {
        match: [11, 12],
        text: 'Path undermined',
      },
      {
        match: [13, 14],
        text: 'Blocked or broken path',
      },
      {
        match: [15, 16],
        text: 'Vestiges of a destructive force',
      },
      {
        match: [17, 18],
        text: 'Unexpected environmental threat',
      },
      {
        match: [19, 20],
        text: 'Echoes of a troubling past',
      },
      {
        match: [21, 22],
        text: 'Signs of a horrible fate',
      },
      {
        match: [23, 24],
        text: 'Denizen seeks retribution',
      },
      {
        match: [25, 26],
        text: 'Denizen leverages the environment',
      },
      {
        match: [27, 28],
        text: 'Denizen restores what was lost',
      },
      {
        match: [29, 30],
        text: 'Ravages return anew',
      },
    ],
  },

  Wild: {
    name: 'Theme:Wild',
    d: 30,
    table: [
      {
        match: [1, 5],
        text: 'Denizen hunts',
      },
      {
        match: [6, 10],
        text: 'Denizen strikes without warning',
      },
      {
        match: [11, 12],
        text: 'Denizen leverages the environment',
      },
      {
        match: [13, 14],
        text: 'Denizen wields unexpected abilities',
      },
      {
        match: [15, 16],
        text: 'Denizen guided by a greater threat',
      },
      {
        match: [17, 18],
        text: 'Denizen protects something',
      },
      {
        match: [19, 20],
        text: 'Hazardous terrain',
      },
      {
        match: [21, 22],
        text: 'Weather or environmental threat',
      },
      {
        match: [23, 24],
        text: 'Benign aspect becomes a threat',
      },
      {
        match: [25, 26],
        text: 'Overzealous hunter',
      },
      {
        match: [27, 28],
        text: 'Disturbing evidence of a victim’s fate',
      },
      {
        match: [29, 30],
        text: 'Ill-fated victim in danger',
      },
    ],
  },
};

export const DomainDangers: { [index: string]: IOracle } = {
  Barrow: {
    name: 'Domain:Barrow',
    d: 0,
    table: [
      {
        match: [31, 33],
        text: 'Denizen guards this area',
      },
      {
        match: [34, 36],
        text: 'Trap',
      },
      {
        match: [37, 39],
        text: 'Death makes its presence known',
      },
      {
        match: [40, 42],
        text: 'Crumbling architecture',
      },
      {
        match: [43, 45],
        text: 'Grave goods with hidden dangers',
      },
    ],
  },

  Cavern: {
    name: 'Domain:Cavern',
    d: 0,
    table: [
      {
        match: [31, 33],
        text: 'Denizen lairs here',
      },
      {
        match: [34, 36],
        text: 'Cave-in',
      },
      {
        match: [37, 39],
        text: 'Flooding',
      },
      {
        match: [40, 42],
        text: 'Perilous climb or descent',
      },
      {
        match: [43, 45],
        text: 'Fissure or sinkhole',
      },
    ],
  },

  'Frozen Cavern': {
    name: 'Domain:Frozen Cavern',
    d: 0,
    table: [
      {
        match: [31, 33],
        text: 'Denizen lairs here',
      },
      {
        match: [34, 36],
        text: 'Fracturing ice',
      },
      {
        match: [37, 39],
        text: 'Crumbling chasm',
      },
      {
        match: [40, 42],
        text: 'Bitter chill',
      },
      {
        match: [43, 45],
        text: 'Disorienting reflections',
      },
    ],
  },

  Icereach: {
    name: 'Domain:Icereach',
    d: 0,
    table: [
      {
        match: [31, 33],
        text: 'Denizen hunts',
      },
      {
        match: [34, 36],
        text: 'Fragile ice above watery depths',
      },
      {
        match: [37, 39],
        text: 'Perilous climb or descent',
      },
      {
        match: [40, 42],
        text: 'Avalanche or icefall',
      },
      {
        match: [43, 45],
        text: 'Foul weather',
      },
    ],
  },

  Mine: {
    name: 'Domain:Mine',
    d: 0,
    table: [
      {
        match: [31, 33],
        text: 'Cave-in',
      },
      {
        match: [34, 36],
        text: 'Flooding',
      },
      {
        match: [37, 39],
        text: 'Unstable platforms or architecture',
      },
      {
        match: [40, 42],
        text: 'Hazardous gas pocket',
      },
      {
        match: [43, 45],
        text: 'Weakened terrain',
      },
    ],
  },

  Pass: {
    name: 'Domain:Pass',
    d: 0,
    table: [
      {
        match: [31, 33],
        text: 'Denizen lairs here',
      },
      {
        match: [34, 36],
        text: 'Denizen hunts',
      },
      {
        match: [37, 39],
        text: 'Perilous climb or descent',
      },
      {
        match: [40, 42],
        text: 'Avalanche or rockslide',
      },
      {
        match: [43, 45],
        text: 'Foul weather',
      },
    ],
  },

  Ruin: {
    name: 'Domain:Ruin',
    d: 0,
    table: [
      {
        match: [31, 33],
        text: 'Ancient mechanism or trap',
      },
      {
        match: [34, 36],
        text: 'Collapsing wall or ceiling',
      },
      {
        match: [37, 39],
        text: 'Blocked or broken passage',
      },
      {
        match: [40, 42],
        text: 'Unstable floor above a new danger',
      },
      {
        match: [43, 45],
        text: 'Ancient secrets best left buried',
      },
    ],
  },

  'Sea Cave': {
    name: 'Domain:Sea Cave',
    d: 0,
    table: [
      {
        match: [31, 33],
        text: 'Denizen strikes without warning',
      },
      {
        match: [34, 36],
        text: 'Denizen lurks below',
      },
      {
        match: [37, 39],
        text: 'Flooding',
      },
      {
        match: [40, 42],
        text: 'Rushing current',
      },
      {
        match: [43, 45],
        text: 'Claustrophobic squeeze',
      },
    ],
  },

  Shadowfen: {
    name: 'Domain:Shadowfen',
    d: 0,
    table: [
      {
        match: [31, 33],
        text: 'Denizen hunts',
      },
      {
        match: [34, 36],
        text: 'Deep water blocks the path',
      },
      {
        match: [37, 39],
        text: 'Toxic environment',
      },
      {
        match: [40, 42],
        text: 'Concealing or disorienting mist',
      },
      {
        match: [43, 45],
        text: 'Hidden quagmire',
      },
    ],
  },

  Stronghold: {
    name: 'Domain:Stronghold',
    d: 0,
    table: [
      {
        match: [31, 33],
        text: 'Blocked or guarded path',
      },
      {
        match: [34, 36],
        text: 'Caught in the open',
      },
      {
        match: [37, 39],
        text: 'Chokepoint',
      },
      {
        match: [40, 42],
        text: 'Trap',
      },
      {
        match: [43, 45],
        text: 'Alarm trigger',
      },
    ],
  },

  Tanglewood: {
    name: 'Domain:Tanglewood',
    d: 0,
    table: [
      {
        match: [31, 33],
        text: 'Denizen hunts',
      },
      {
        match: [34, 36],
        text: 'Denizen lairs here',
      },
      {
        match: [37, 39],
        text: 'Trap or snare',
      },
      {
        match: [40, 42],
        text: 'Path leads you astray',
      },
      {
        match: [43, 45],
        text: 'Entangling plant life',
      },
    ],
  },

  Underkeep: {
    name: 'Domain:Underkeep',
    d: 0,
    table: [
      {
        match: [31, 33],
        text: 'Ancient mechanism or trap',
      },
      {
        match: [34, 36],
        text: 'Crumbling architecture',
      },
      {
        match: [37, 39],
        text: 'Blocked or broken passage',
      },
      {
        match: [40, 42],
        text: 'Artifact with a hidden danger',
      },
      {
        match: [43, 45],
        text: 'Denizen lurks in darkness',
      },
    ],
  },
};
