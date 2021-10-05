import { IOracle } from 'src/components/models'

export const SiteNature: { [index: string]: IOracle } = {
  Theme: {
    name: 'Theme',
    d: 100,
    table: [
      {
        match: [
          1,
          11
        ],
        text: 'Ancient'
      },
      {
        match: [
          12,
          23
        ],
        text: 'Corrupted'
      },
      {
        match: [
          24,
          35
        ],
        text: 'Fortified'
      },
      {
        match: [
          36,
          48
        ],
        text: 'Hallowed'
      },
      {
        match: [
          49,
          61
        ],
        text: 'Haunted'
      },
      {
        match: [
          62,
          74
        ],
        text: 'Infested'
      },
      {
        match: [
          75,
          87
        ],
        text: 'Ravaged'
      },
      {
        match: [
          88,
          100
        ],
        text: 'Wild'
      }
    ]
  },

  Domain: {
    name: 'Domain',
    d: 100,
    table: [
      {
        match: [
          1,
          6
        ],
        text: 'Barrow'
      },
      {
        match: [
          7,
          18
        ],
        text: 'Cavern'
      },
      {
        match: [
          19,
          28
        ],
        text: 'Frozen Cavern'
      },
      {
        match: [
          29,
          32
        ],
        text: 'Icereach'
      },
      {
        match: [
          33,
          38
        ],
        text: 'Mine'
      },
      {
        match: [
          39,
          48
        ],
        text: 'Pass'
      },
      {
        match: [
          49,
          58
        ],
        text: 'Ruin'
      },
      {
        match: [
          59,
          68
        ],
        text: 'Sea Cave'
      },
      {
        match: [
          69,
          78
        ],
        text: 'Shadowfen'
      },
      {
        match: [
          79,
          83
        ],
        text: 'Stronghold'
      },
      {
        match: [
          84,
          95
        ],
        text: 'Tanglewood'
      },
      {
        match: [
          96,
          100
        ],
        text: 'Underkeep'
      }
    ]
  }

}

export const ThemeFeatures: { [index: string]: IOracle } = {
  Ancient: {
    name: 'Theme:Ancient',
    d: 20,
    table: [
      {
        match: [
          1,
          4
        ],
        text: 'Evidence of lost knowledge'
      },
      {
        match: [
          5,
          8
        ],
        text: 'Inscrutable relics'
      },
      {
        match: [
          9,
          12
        ],
        text: 'Ancient artistry or craft'
      },
      {
        match: [
          13,
          16
        ],
        text: 'Preserved corpses or fossils'
      },
      {
        match: [
          17,
          20
        ],
        text: 'Visions of this place in another time'
      }
    ]
  },

  Corrupted: {
    name: 'Theme:Corrupted',
    d: 20,
    table: [
      {
        match: [
          1,
          4
        ],
        text: 'Mystic focus or conduit'
      },
      {
        match: [
          5,
          8
        ],
        text: 'Strange environmental disturbances'
      },
      {
        match: [
          9,
          12
        ],
        text: 'Mystic runes or markings'
      },
      {
        match: [
          13,
          16
        ],
        text: 'Blight or decay'
      },
      {
        match: [
          17,
          20
        ],
        text: 'Evidence of a foul ritual'
      }
    ]
  },

  Fortified: {
    name: 'Theme:Fortified',
    d: 20,
    table: [
      {
        match: [
          1,
          4
        ],
        text: 'Camp or quarters'
      },
      {
        match: [
          5,
          8
        ],
        text: 'Guarded location'
      },
      {
        match: [
          9,
          12
        ],
        text: 'Storage or repository'
      },
      {
        match: [
          13,
          16
        ],
        text: 'Work or training area'
      },
      {
        match: [
          17,
          20
        ],
        text: 'Command center or leadership'
      }
    ]
  },

  Hallowed: {
    name: 'Theme:Hallowed',
    d: 20,
    table: [
      {
        match: [
          1,
          4
        ],
        text: 'Temple or altar'
      },
      {
        match: [
          5,
          8
        ],
        text: 'Offerings or atonements'
      },
      {
        match: [
          9,
          12
        ],
        text: 'Religious relic or idol'
      },
      {
        match: [
          13,
          16
        ],
        text: 'Consecrated ground'
      },
      {
        match: [
          17,
          20
        ],
        text: 'Dwellings or gathering place'
      }
    ]
  },

  Haunted: {
    name: 'Theme:Haunted',
    d: 20,
    table: [
      {
        match: [
          1,
          4
        ],
        text: 'Tomb or burial site'
      },
      {
        match: [
          5,
          8
        ],
        text: 'Blood was spilled here'
      },
      {
        match: [
          9,
          12
        ],
        text: 'Unnatural mists or darkness'
      },
      {
        match: [
          13,
          16
        ],
        text: 'Messages from beyond the grave'
      },
      {
        match: [
          17,
          20
        ],
        text: 'Apparitions of a person or event'
      }
    ]
  },

  Infested: {
    name: 'Theme:Infested',
    d: 20,
    table: [
      {
        match: [
          1,
          4
        ],
        text: 'Inhabited nest'
      },
      {
        match: [
          5,
          8
        ],
        text: 'Abandoned nest'
      },
      {
        match: [
          9,
          12
        ],
        text: 'Ravaged terrain or architecture'
      },
      {
        match: [
          13,
          16
        ],
        text: 'Remains or carrion'
      },
      {
        match: [
          17,
          20
        ],
        text: 'Hoarded food'
      }
    ]
  },

  Ravaged: {
    name: 'Theme:Ravaged',
    d: 20,
    table: [
      {
        match: [
          1,
          4
        ],
        text: 'Path of destruction'
      },
      {
        match: [
          5,
          8
        ],
        text: 'Abandoned or ruined dwelling'
      },
      {
        match: [
          9,
          12
        ],
        text: 'Untouched or preserved area'
      },
      {
        match: [
          13,
          16
        ],
        text: 'Traces of what was lost'
      },
      {
        match: [
          17,
          20
        ],
        text: 'Ill-fated victims'
      }
    ]
  },

  Wild: {
    name: 'Theme:Wild',
    d: 20,
    table: [
      {
        match: [
          1,
          4
        ],
        text: 'Denizen’s lair'
      },
      {
        match: [
          5,
          8
        ],
        text: 'Territorial markings'
      },
      {
        match: [
          9,
          12
        ],
        text: 'Impressive flora or fauna'
      },
      {
        match: [
          13,
          16
        ],
        text: 'Hunting ground or watering hole'
      },
      {
        match: [
          17,
          20
        ],
        text: 'Remains or carrion'
      }
    ]
  }

}

export const DomainFeatures: { [index: string]: IOracle } = {
  Barrow: {
    name: 'Domain:Barrow',
    d: 80,
    table: [
      {
        match: [
          1,
          23
        ],
        text: 'Burial chambers'
      },
      {
        match: [
          24,
          36
        ],
        text: 'Maze of narrow passages'
      },
      {
        match: [
          37,
          44
        ],
        text: 'Shrine'
      },
      {
        match: [
          45,
          48
        ],
        text: 'Stately vault'
      },
      {
        match: [
          49,
          52
        ],
        text: 'Offerings to the dead'
      },
      {
        match: [
          53,
          56
        ],
        text: 'Statuary or tapestries'
      },
      {
        match: [
          57,
          60
        ],
        text: 'Remains of a grave robber'
      },
      {
        match: [
          61,
          64
        ],
        text: 'Mass grave'
      },
      {
        match: [
          65,
          68
        ],
        text: 'Exhumed corpses'
      },
      {
        match: [
          69,
          78
        ],
        text: 'Something unusual or unexpected'
      },
      {
        match: [
          79
        ],
        text: 'You transition into a new theme'
      },
      {
        match: [
          80
        ],
        text: 'You transition into a new domain'
      }
    ]
  },

  Cavern: {
    name: 'Domain:Cavern',
    d: 80,
    table: [
      {
        match: [
          1,
          23
        ],
        text: 'Twisting passages'
      },
      {
        match: [
          24,
          36
        ],
        text: 'Cramped caves'
      },
      {
        match: [
          37,
          44
        ],
        text: 'Vast chamber'
      },
      {
        match: [
          45,
          48
        ],
        text: 'Subterranean waterway'
      },
      {
        match: [
          49,
          52
        ],
        text: 'Cave pool'
      },
      {
        match: [
          53,
          56
        ],
        text: 'Natural bridge'
      },
      {
        match: [
          57,
          60
        ],
        text: 'Towering stone formations'
      },
      {
        match: [
          61,
          64
        ],
        text: 'Natural illumination'
      },
      {
        match: [
          65,
          68
        ],
        text: 'Dark pit'
      },
      {
        match: [
          69,
          78
        ],
        text: 'Something unusual or unexpected'
      },
      {
        match: [
          79
        ],
        text: 'You transition into a new theme'
      },
      {
        match: [
          80
        ],
        text: 'You transition into a new domain'
      }
    ]
  },

  'Frozen Cavern': {
    name: 'Domain:Frozen Cavern',
    d: 80,
    table: [
      {
        match: [
          1,
          23
        ],
        text: 'Maze of icy tunnels'
      },
      {
        match: [
          24,
          36
        ],
        text: 'Glistening cave'
      },
      {
        match: [
          37,
          44
        ],
        text: 'Vast chamber'
      },
      {
        match: [
          45,
          48
        ],
        text: 'Frigid waterway'
      },
      {
        match: [
          49,
          52
        ],
        text: 'Icy pools'
      },
      {
        match: [
          53,
          56
        ],
        text: 'Magnificent ice formations'
      },
      {
        match: [
          57,
          60
        ],
        text: 'Frozen waterfall'
      },
      {
        match: [
          61,
          64
        ],
        text: 'Deep crevasses'
      },
      {
        match: [
          65,
          68
        ],
        text: 'Discovery locked in the ice'
      },
      {
        match: [
          69,
          78
        ],
        text: 'Something unusual or unexpected'
      },
      {
        match: [
          79
        ],
        text: 'You transition into a new theme'
      },
      {
        match: [
          80
        ],
        text: 'You transition into a new domain'
      }
    ]
  },

  Icereach: {
    name: 'Domain:Icereach',
    d: 80,
    table: [
      {
        match: [
          1,
          23
        ],
        text: 'Plains of ice and snow'
      },
      {
        match: [
          24,
          36
        ],
        text: 'Seawater channel'
      },
      {
        match: [
          37,
          44
        ],
        text: 'Icy highlands'
      },
      {
        match: [
          45,
          48
        ],
        text: 'Crevasse'
      },
      {
        match: [
          49,
          52
        ],
        text: 'Ice floes'
      },
      {
        match: [
          53,
          56
        ],
        text: 'Ship trapped in ice'
      },
      {
        match: [
          57,
          60
        ],
        text: 'Animal herd or habitat'
      },
      {
        match: [
          61,
          64
        ],
        text: 'Frozen carcass'
      },
      {
        match: [
          65,
          68
        ],
        text: 'Camp or outpost'
      },
      {
        match: [
          69,
          78
        ],
        text: 'Something unusual or unexpected'
      },
      {
        match: [
          79
        ],
        text: 'You transition into a new theme'
      },
      {
        match: [
          80
        ],
        text: 'You transition into a new domain'
      }
    ]
  },

  Mine: {
    name: 'Domain:Mine',
    d: 80,
    table: [
      {
        match: [
          1,
          23
        ],
        text: 'Cramped tunnels'
      },
      {
        match: [
          24,
          36
        ],
        text: 'Mine works'
      },
      {
        match: [
          37,
          44
        ],
        text: 'Excavated chamber'
      },
      {
        match: [
          45,
          48
        ],
        text: 'Mineshaft'
      },
      {
        match: [
          49,
          52
        ],
        text: 'Collapsed tunnel'
      },
      {
        match: [
          53,
          56
        ],
        text: 'Cluttered storage'
      },
      {
        match: [
          57,
          60
        ],
        text: 'Housing or common areas'
      },
      {
        match: [
          61,
          64
        ],
        text: 'Flooded chamber'
      },
      {
        match: [
          65,
          68
        ],
        text: 'Unearthed secret'
      },
      {
        match: [
          69,
          78
        ],
        text: 'Something unusual or unexpected'
      },
      {
        match: [
          79
        ],
        text: 'You transition into a new theme'
      },
      {
        match: [
          80
        ],
        text: 'You transition into a new domain'
      }
    ]
  },

  Pass: {
    name: 'Domain:Pass',
    d: 80,
    table: [
      {
        match: [
          1,
          23
        ],
        text: 'Winding mountain path'
      },
      {
        match: [
          24,
          36
        ],
        text: 'Snowfield or glacial rocks'
      },
      {
        match: [
          37,
          44
        ],
        text: 'River gorge'
      },
      {
        match: [
          45,
          48
        ],
        text: 'Crashing waterfall'
      },
      {
        match: [
          49,
          52
        ],
        text: 'Highland lake'
      },
      {
        match: [
          53,
          56
        ],
        text: 'Forgotten cairn'
      },
      {
        match: [
          57,
          60
        ],
        text: 'Bridge'
      },
      {
        match: [
          61,
          64
        ],
        text: 'Overlook'
      },
      {
        match: [
          65,
          68
        ],
        text: 'Camp or outpost'
      },
      {
        match: [
          69,
          78
        ],
        text: 'Something unusual or unexpected'
      },
      {
        match: [
          79
        ],
        text: 'You transition into a new theme'
      },
      {
        match: [
          80
        ],
        text: 'You transition into a new domain'
      }
    ]
  },

  Ruin: {
    name: 'Domain:Ruin',
    d: 80,
    table: [
      {
        match: [
          1,
          23
        ],
        text: 'Crumbling corridors and chambers'
      },
      {
        match: [
          24,
          36
        ],
        text: 'Collapsed architecture'
      },
      {
        match: [
          37,
          44
        ],
        text: 'Rubble-choked hall'
      },
      {
        match: [
          45,
          48
        ],
        text: 'Courtyard'
      },
      {
        match: [
          49,
          52
        ],
        text: 'Archive or library'
      },
      {
        match: [
          53,
          56
        ],
        text: 'Broken statuary or fading murals'
      },
      {
        match: [
          57,
          60
        ],
        text: 'Preserved vault'
      },
      {
        match: [
          61,
          64
        ],
        text: 'Temple to forgotten gods'
      },
      {
        match: [
          65,
          68
        ],
        text: 'Mausoleum'
      },
      {
        match: [
          69,
          78
        ],
        text: 'Something unusual or unexpected'
      },
      {
        match: [
          79
        ],
        text: 'You transition into a new theme'
      },
      {
        match: [
          80
        ],
        text: 'You transition into a new domain'
      }
    ]
  },

  'Sea Cave': {
    name: 'Domain:Sea Cave',
    d: 80,
    table: [
      {
        match: [
          1,
          23
        ],
        text: 'Watery tunnels'
      },
      {
        match: [
          24,
          36
        ],
        text: 'Eroded chamber'
      },
      {
        match: [
          37,
          44
        ],
        text: 'Flooded chamber'
      },
      {
        match: [
          45,
          48
        ],
        text: 'Vast chamber'
      },
      {
        match: [
          49,
          52
        ],
        text: 'Dry passages'
      },
      {
        match: [
          53,
          56
        ],
        text: 'Freshwater inlet'
      },
      {
        match: [
          57,
          60
        ],
        text: 'Rocky island'
      },
      {
        match: [
          61,
          64
        ],
        text: 'Waterborne debris'
      },
      {
        match: [
          65,
          68
        ],
        text: 'Shipwreck or boat'
      },
      {
        match: [
          69,
          78
        ],
        text: 'Something unusual or unexpected'
      },
      {
        match: [
          79
        ],
        text: 'You transition into a new theme'
      },
      {
        match: [
          80
        ],
        text: 'You transition into a new domain'
      }
    ]
  },

  Shadowfen: {
    name: 'Domain:Shadowfen',
    d: 80,
    table: [
      {
        match: [
          1,
          23
        ],
        text: 'Narrow path through a fetid bog'
      },
      {
        match: [
          24,
          36
        ],
        text: 'Stagnant waterway'
      },
      {
        match: [
          37,
          44
        ],
        text: 'Flooded thicket'
      },
      {
        match: [
          45,
          48
        ],
        text: 'Island of dry land'
      },
      {
        match: [
          49,
          52
        ],
        text: 'Submerged discovery'
      },
      {
        match: [
          53,
          56
        ],
        text: 'Preserved corpses'
      },
      {
        match: [
          57,
          60
        ],
        text: 'Overgrown structure'
      },
      {
        match: [
          61,
          64
        ],
        text: 'Tall reeds'
      },
      {
        match: [
          65,
          68
        ],
        text: 'Camp or outpost'
      },
      {
        match: [
          69,
          78
        ],
        text: 'Something unusual or unexpected'
      },
      {
        match: [
          79
        ],
        text: 'You transition into a new theme'
      },
      {
        match: [
          80
        ],
        text: 'You transition into a new domain'
      }
    ]
  },

  Stronghold: {
    name: 'Domain:Stronghold',
    d: 80,
    table: [
      {
        match: [
          1,
          23
        ],
        text: 'Connecting passageways'
      },
      {
        match: [
          24,
          36
        ],
        text: 'Barracks or common quarters'
      },
      {
        match: [
          37,
          44
        ],
        text: 'Large hall'
      },
      {
        match: [
          45,
          48
        ],
        text: 'Workshop or library'
      },
      {
        match: [
          49,
          52
        ],
        text: 'Command center or leadership'
      },
      {
        match: [
          53,
          56
        ],
        text: 'Ladder or stairwell'
      },
      {
        match: [
          57,
          60
        ],
        text: 'Storage'
      },
      {
        match: [
          61,
          64
        ],
        text: 'Kitchen or larder'
      },
      {
        match: [
          65,
          68
        ],
        text: 'Courtyard'
      },
      {
        match: [
          69,
          78
        ],
        text: 'Something unusual or unexpected'
      },
      {
        match: [
          79
        ],
        text: 'You transition into a new theme'
      },
      {
        match: [
          80
        ],
        text: 'You transition into a new domain'
      }
    ]
  },

  Tanglewood: {
    name: 'Domain:Tanglewood',
    d: 80,
    table: [
      {
        match: [
          1,
          23
        ],
        text: 'Dense thicket'
      },
      {
        match: [
          24,
          36
        ],
        text: 'Overgrown path'
      },
      {
        match: [
          37,
          44
        ],
        text: 'Waterway'
      },
      {
        match: [
          45,
          48
        ],
        text: 'Clearing'
      },
      {
        match: [
          49,
          52
        ],
        text: 'Elder tree'
      },
      {
        match: [
          53,
          56
        ],
        text: 'Brambles'
      },
      {
        match: [
          57,
          60
        ],
        text: 'Overgrown structure'
      },
      {
        match: [
          61,
          64
        ],
        text: 'Rocky outcrop'
      },
      {
        match: [
          65,
          68
        ],
        text: 'Camp or outpost'
      },
      {
        match: [
          69,
          78
        ],
        text: 'Something unusual or unexpected'
      },
      {
        match: [
          79
        ],
        text: 'You transition into a new theme'
      },
      {
        match: [
          80
        ],
        text: 'You transition into a new domain'
      }
    ]
  },

  Underkeep: {
    name: 'Domain:Underkeep',
    d: 80,
    table: [
      {
        match: [
          1,
          23
        ],
        text: 'Carved passages'
      },
      {
        match: [
          24,
          36
        ],
        text: 'Hall or chamber'
      },
      {
        match: [
          37,
          44
        ],
        text: 'Stairs into the depths'
      },
      {
        match: [
          45,
          48
        ],
        text: 'Grand doorway or entrance'
      },
      {
        match: [
          49,
          52
        ],
        text: 'Tomb or catacombs'
      },
      {
        match: [
          53,
          56
        ],
        text: 'Rough-hewn cave'
      },
      {
        match: [
          57,
          60
        ],
        text: 'Foundry or workshop'
      },
      {
        match: [
          61,
          64
        ],
        text: 'Shrine or temple'
      },
      {
        match: [
          65,
          68
        ],
        text: 'Imposing architecture or artistry'
      },
      {
        match: [
          69,
          78
        ],
        text: 'Something unusual or unexpected'
      },
      {
        match: [
          79
        ],
        text: 'You transition into a new theme'
      },
      {
        match: [
          80
        ],
        text: 'You transition into a new domain'
      }
    ]
  }
}

export const ThemeDangers: { [index: string]: IOracle } = {
  Ancient: {
    name: 'Theme:Ancient',
    d: 30,
    table: [
      {
        match: [
          1,
          5
        ],
        text: 'Ancient trap'
      },
      {
        match: [
          6,
          10
        ],
        text: 'Hazardous architecture or terrain'
      },
      {
        match: [
          11,
          12
        ],
        text: 'Blocked or broken path'
      },
      {
        match: [
          13,
          14
        ],
        text: 'Denizen protects an ancient secret'
      },
      {
        match: [
          15,
          16
        ],
        text: 'Denizen reveres an ancient power'
      },
      {
        match: [
          17,
          18
        ],
        text: 'Living relics of a lost age'
      },
      {
        match: [
          19,
          20
        ],
        text: 'Ancient evil resurgent'
      },
      {
        match: [
          21,
          22
        ],
        text: 'Dire warnings of a long-buried danger'
      },
      {
        match: [
          23,
          24
        ],
        text: 'Ancient disease or contamination'
      },
      {
        match: [
          25,
          26
        ],
        text: 'Artifact of terrible meaning or power'
      },
      {
        match: [
          27,
          28
        ],
        text: 'Disturbing evidence of ancient wrongs'
      },
      {
        match: [
          29,
          30
        ],
        text: 'Others seek power or knowledge'
      }
    ]
  },

  Corrupted: {
    name: 'Theme:Corrupted',
    d: 30,
    table: [
      {
        match: [
          1,
          5
        ],
        text: 'Denizen spawned from dark magic'
      },
      {
        match: [
          6,
          10
        ],
        text: 'Denizen controls dark magic'
      },
      {
        match: [
          11,
          12
        ],
        text: 'Denizen corrupted by dark magic'
      },
      {
        match: [
          13,
          14
        ],
        text: 'Corruption marks you'
      },
      {
        match: [
          15,
          16
        ],
        text: 'Innocents held in thrall'
      },
      {
        match: [
          17,
          18
        ],
        text: 'Revelations of a terrible truth'
      },
      {
        match: [
          19,
          20
        ],
        text: 'Mystic trap or trigger'
      },
      {
        match: [
          21,
          22
        ],
        text: 'Mystic barrier or ward'
      },
      {
        match: [
          23,
          24
        ],
        text: 'Illusions lead you astray'
      },
      {
        match: [
          25,
          26
        ],
        text: 'Dark ritual in progress'
      },
      {
        match: [
          27,
          28
        ],
        text: 'Lingering effects of a dark ritual'
      },
      {
        match: [
          29,
          30
        ],
        text: 'Dread harbingers of a greater magic'
      }
    ]
  },

  Fortified: {
    name: 'Theme:Fortified',
    d: 30,
    table: [
      {
        match: [
          1,
          5
        ],
        text: 'Denizen patrols the area'
      },
      {
        match: [
          6,
          10
        ],
        text: 'Denizen on guard'
      },
      {
        match: [
          11,
          12
        ],
        text: 'Denizen ready to sound the alarm'
      },
      {
        match: [
          13,
          14
        ],
        text: 'Denizen sets an ambush'
      },
      {
        match: [
          15,
          16
        ],
        text: 'Denizen lures you into a trap'
      },
      {
        match: [
          17,
          18
        ],
        text: 'Denizens converge on this area'
      },
      {
        match: [
          19,
          20
        ],
        text: 'Pets or underlings'
      },
      {
        match: [
          21,
          22
        ],
        text: 'Unexpected alliance revealed'
      },
      {
        match: [
          23,
          24
        ],
        text: 'Nefarious plans revealed'
      },
      {
        match: [
          25,
          26
        ],
        text: 'Unexpected leader revealed'
      },
      {
        match: [
          27,
          28
        ],
        text: 'Trap'
      },
      {
        match: [
          29,
          30
        ],
        text: 'Alarm trigger'
      }
    ]
  },

  Hallowed: {
    name: 'Theme:Hallowed',
    d: 30,
    table: [
      {
        match: [
          1,
          5
        ],
        text: 'Denizen defends their sanctum'
      },
      {
        match: [
          6,
          10
        ],
        text: 'Denizen enacts the will of their god'
      },
      {
        match: [
          11,
          12
        ],
        text: 'Denizen seeks martyrdom'
      },
      {
        match: [
          13,
          14
        ],
        text: 'Secret of the faith is revealed'
      },
      {
        match: [
          15,
          16
        ],
        text: 'Greater purpose is revealed'
      },
      {
        match: [
          17,
          18
        ],
        text: 'Unexpected disciples are revealed'
      },
      {
        match: [
          19,
          20
        ],
        text: 'Divine manifestations'
      },
      {
        match: [
          21,
          22
        ],
        text: 'Aspect of the faith beguiles you'
      },
      {
        match: [
          23,
          24
        ],
        text: 'Unexpected leader is revealed'
      },
      {
        match: [
          25,
          26
        ],
        text: 'Embodiment of a god or myth'
      },
      {
        match: [
          27,
          28
        ],
        text: 'Protective ward or barrier'
      },
      {
        match: [
          29,
          30
        ],
        text: 'Prophecies reveal a dark fate'
      }
    ]
  },

  Haunted: {
    name: 'Theme:Haunted',
    d: 30,
    table: [
      {
        match: [
          1,
          5
        ],
        text: 'Denizen haunts this area'
      },
      {
        match: [
          6,
          10
        ],
        text: 'Unsettling sounds or foreboding signs'
      },
      {
        match: [
          11,
          12
        ],
        text: 'Denizen attacks without warning'
      },
      {
        match: [
          13,
          14
        ],
        text: 'Denizen makes a costly demand'
      },
      {
        match: [
          15,
          16
        ],
        text: 'Denizen seizes your body or mind'
      },
      {
        match: [
          17,
          18
        ],
        text: 'Denizen taunts or lures you'
      },
      {
        match: [
          19,
          20
        ],
        text: 'A disturbing truth is revealed'
      },
      {
        match: [
          21,
          22
        ],
        text: 'Frightening visions'
      },
      {
        match: [
          23,
          24
        ],
        text: 'The environment is used against you'
      },
      {
        match: [
          25,
          26
        ],
        text: 'Trickery leads you astray'
      },
      {
        match: [
          27,
          28
        ],
        text: 'True nature of this place is revealed'
      },
      {
        match: [
          29,
          30
        ],
        text: 'Sudden, shocking manifestation'
      }
    ]
  },

  Infested: {
    name: 'Theme:Infested',
    d: 30,
    table: [
      {
        match: [
          1,
          5
        ],
        text: 'Denizens swarm and attack'
      },
      {
        match: [
          6,
          10
        ],
        text: 'Toxic or sickening environment'
      },
      {
        match: [
          11,
          12
        ],
        text: 'Denizen stalks you'
      },
      {
        match: [
          13,
          14
        ],
        text: 'Denizen takes or destroys something'
      },
      {
        match: [
          15,
          16
        ],
        text: 'Denizen reveals surprising cleverness'
      },
      {
        match: [
          17,
          18
        ],
        text: 'Denizen guided by a greater threat'
      },
      {
        match: [
          19,
          20
        ],
        text: 'Denizen blocks the path'
      },
      {
        match: [
          21,
          22
        ],
        text: 'Denizen funnels you down a new path'
      },
      {
        match: [
          23,
          24
        ],
        text: 'Denizen undermines the path'
      },
      {
        match: [
          25,
          26
        ],
        text: 'Denizen lays in wait'
      },
      {
        match: [
          27,
          28
        ],
        text: 'Trap or snare'
      },
      {
        match: [
          29,
          30
        ],
        text: 'Victim’s horrible fate is revealed'
      }
    ]
  },

  Ravaged: {
    name: 'Theme:Ravaged',
    d: 30,
    table: [
      {
        match: [
          1,
          5
        ],
        text: 'Precarious architecture or terrain'
      },
      {
        match: [
          6,
          10
        ],
        text: 'Imminent collapse or destruction'
      },
      {
        match: [
          11,
          12
        ],
        text: 'Path undermined'
      },
      {
        match: [
          13,
          14
        ],
        text: 'Blocked or broken path'
      },
      {
        match: [
          15,
          16
        ],
        text: 'Vestiges of a destructive force'
      },
      {
        match: [
          17,
          18
        ],
        text: 'Unexpected environmental threat'
      },
      {
        match: [
          19,
          20
        ],
        text: 'Echoes of a troubling past'
      },
      {
        match: [
          21,
          22
        ],
        text: 'Signs of a horrible fate'
      },
      {
        match: [
          23,
          24
        ],
        text: 'Denizen seeks retribution'
      },
      {
        match: [
          25,
          26
        ],
        text: 'Denizen leverages the environment'
      },
      {
        match: [
          27,
          28
        ],
        text: 'Denizen restores what was lost'
      },
      {
        match: [
          29,
          30
        ],
        text: 'Ravages return anew'
      }
    ]
  },

  Wild: {
    name: 'Theme:Wild',
    d: 30,
    table: [
      {
        match: [
          1,
          5
        ],
        text: 'Denizen hunts'
      },
      {
        match: [
          6,
          10
        ],
        text: 'Denizen strikes without warning'
      },
      {
        match: [
          11,
          12
        ],
        text: 'Denizen leverages the environment'
      },
      {
        match: [
          13,
          14
        ],
        text: 'Denizen wields unexpected abilities'
      },
      {
        match: [
          15,
          16
        ],
        text: 'Denizen guided by a greater threat'
      },
      {
        match: [
          17,
          18
        ],
        text: 'Denizen protects something'
      },
      {
        match: [
          19,
          20
        ],
        text: 'Hazardous terrain'
      },
      {
        match: [
          21,
          22
        ],
        text: 'Weather or environmental threat'
      },
      {
        match: [
          23,
          24
        ],
        text: 'Benign aspect becomes a threat'
      },
      {
        match: [
          25,
          26
        ],
        text: 'Overzealous hunter'
      },
      {
        match: [
          27,
          28
        ],
        text: 'Disturbing evidence of a victim’s fate'
      },
      {
        match: [
          29,
          30
        ],
        text: 'Ill-fated victim in danger'
      }
    ]
  }

}

export const DomainDangers: { [index: string]: IOracle } = {
  Barrow: {
    name: 'Domain:Barrow',
    d: 15,
    table: [
      {
        match: [
          1,
          3
        ],
        text: 'Denizen guards this area'
      },
      {
        match: [
          4,
          6
        ],
        text: 'Trap'
      },
      {
        match: [
          7,
          9
        ],
        text: 'Death makes its presence known'
      },
      {
        match: [
          10,
          12
        ],
        text: 'Crumbling architecture'
      },
      {
        match: [
          13,
          15
        ],
        text: 'Grave goods with hidden dangers'
      }
    ]
  },

  Cavern: {
    name: 'Domain:Cavern',
    d: 15,
    table: [
      {
        match: [
          1,
          3
        ],
        text: 'Denizen lairs here'
      },
      {
        match: [
          4,
          6
        ],
        text: 'Cave-in'
      },
      {
        match: [
          7,
          9
        ],
        text: 'Flooding'
      },
      {
        match: [
          10,
          12
        ],
        text: 'Perilous climb or descent'
      },
      {
        match: [
          13,
          15
        ],
        text: 'Fissure or sinkhole'
      }
    ]
  },

  'Frozen Cavern': {
    name: 'Domain:Frozen Cavern',
    d: 15,
    table: [
      {
        match: [
          1,
          3
        ],
        text: 'Denizen lairs here'
      },
      {
        match: [
          4,
          6
        ],
        text: 'Fracturing ice'
      },
      {
        match: [
          7,
          9
        ],
        text: 'Crumbling chasm'
      },
      {
        match: [
          10,
          12
        ],
        text: 'Bitter chill'
      },
      {
        match: [
          13,
          15
        ],
        text: 'Disorienting reflections'
      }
    ]
  },

  Icereach: {
    name: 'Domain:Icereach',
    d: 15,
    table: [
      {
        match: [
          1,
          3
        ],
        text: 'Denizen hunts'
      },
      {
        match: [
          4,
          6
        ],
        text: 'Fragile ice above watery depths'
      },
      {
        match: [
          7,
          9
        ],
        text: 'Perilous climb or descent'
      },
      {
        match: [
          10,
          12
        ],
        text: 'Avalanche or icefall'
      },
      {
        match: [
          13,
          15
        ],
        text: 'Foul weather'
      }
    ]
  },

  Mine: {
    name: 'Domain:Mine',
    d: 15,
    table: [
      {
        match: [
          1,
          3
        ],
        text: 'Cave-in'
      },
      {
        match: [
          4,
          6
        ],
        text: 'Flooding'
      },
      {
        match: [
          7,
          9
        ],
        text: 'Unstable platforms or architecture'
      },
      {
        match: [
          10,
          12
        ],
        text: 'Hazardous gas pocket'
      },
      {
        match: [
          13,
          15
        ],
        text: 'Weakened terrain'
      }
    ]
  },

  Pass: {
    name: 'Domain:Pass',
    d: 15,
    table: [
      {
        match: [
          1,
          3
        ],
        text: 'Denizen lairs here'
      },
      {
        match: [
          4,
          6
        ],
        text: 'Denizen hunts'
      },
      {
        match: [
          7,
          9
        ],
        text: 'Perilous climb or descent'
      },
      {
        match: [
          10,
          12
        ],
        text: 'Avalanche or rockslide'
      },
      {
        match: [
          13,
          15
        ],
        text: 'Foul weather'
      }
    ]
  },

  Ruin: {
    name: 'Domain:Ruin',
    d: 15,
    table: [
      {
        match: [
          1,
          3
        ],
        text: 'Ancient mechanism or trap'
      },
      {
        match: [
          4,
          6
        ],
        text: 'Collapsing wall or ceiling'
      },
      {
        match: [
          7,
          9
        ],
        text: 'Blocked or broken passage'
      },
      {
        match: [
          10,
          12
        ],
        text: 'Unstable floor above a new danger'
      },
      {
        match: [
          13,
          15
        ],
        text: 'Ancient secrets best left buried'
      }
    ]
  },

  'Sea Cave': {
    name: 'Domain:Sea Cave',
    d: 15,
    table: [
      {
        match: [
          1,
          3
        ],
        text: 'Denizen strikes without warning'
      },
      {
        match: [
          4,
          6
        ],
        text: 'Denizen lurks below'
      },
      {
        match: [
          7,
          9
        ],
        text: 'Flooding'
      },
      {
        match: [
          10,
          12
        ],
        text: 'Rushing current'
      },
      {
        match: [
          13,
          15
        ],
        text: 'Claustrophobic squeeze'
      }
    ]
  },

  Shadowfen: {
    name: 'Domain:Shadowfen',
    d: 15,
    table: [
      {
        match: [
          1,
          3
        ],
        text: 'Denizen hunts'
      },
      {
        match: [
          4,
          6
        ],
        text: 'Deep water blocks the path'
      },
      {
        match: [
          7,
          9
        ],
        text: 'Toxic environment'
      },
      {
        match: [
          10,
          12
        ],
        text: 'Concealing or disorienting mist'
      },
      {
        match: [
          13,
          15
        ],
        text: 'Hidden quagmire'
      }
    ]
  },

  Stronghold: {
    name: 'Domain:Stronghold',
    d: 15,
    table: [
      {
        match: [
          1,
          3
        ],
        text: 'Blocked or guarded path'
      },
      {
        match: [
          4,
          6
        ],
        text: 'Caught in the open'
      },
      {
        match: [
          7,
          9
        ],
        text: 'Chokepoint'
      },
      {
        match: [
          10,
          12
        ],
        text: 'Trap'
      },
      {
        match: [
          13,
          15
        ],
        text: 'Alarm trigger'
      }
    ]
  },

  Tanglewood: {
    name: 'Domain:Tanglewood',
    d: 15,
    table: [
      {
        match: [
          1,
          3
        ],
        text: 'Denizen hunts'
      },
      {
        match: [
          4,
          6
        ],
        text: 'Denizen lairs here'
      },
      {
        match: [
          7,
          9
        ],
        text: 'Trap or snare'
      },
      {
        match: [
          10,
          12
        ],
        text: 'Path leads you astray'
      },
      {
        match: [
          13,
          15
        ],
        text: 'Entangling plant life'
      }
    ]
  },

  Underkeep: {
    name: 'Domain:Underkeep',
    d: 15,
    table: [
      {
        match: [
          1,
          3
        ],
        text: 'Ancient mechanism or trap'
      },
      {
        match: [
          4,
          6
        ],
        text: 'Crumbling architecture'
      },
      {
        match: [
          7,
          9
        ],
        text: 'Blocked or broken passage'
      },
      {
        match: [
          10,
          12
        ],
        text: 'Artifact with a hidden danger'
      },
      {
        match: [
          13,
          15
        ],
        text: 'Denizen lurks in darkness'
      }
    ]
  }
}
