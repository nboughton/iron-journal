import { IOracle } from 'src/components/models';

export const Monstrosity: { [index: string]: IOracle } = {
  Size: {
    name: 'Size',
    d: 100,
    table: [
      {
        match: [1, 5],
        text: 'Tiny (rodent-sized)',
      },
      {
        match: [6, 30],
        text: 'Small (hound-sized)',
      },
      {
        match: [31, 65],
        text: 'Medium (person-sized)',
      },
      {
        match: [66, 94],
        text: 'Large (giant-sized)',
      },
      {
        match: [95, 99],
        text: 'Huge (whale-sized)',
      },
      {
        match: [100],
        text: 'Titanic (incomprehensible)',
      },
    ],
  },

  PrimaryForm: {
    name: 'Primary Form',
    d: 100,
    table: [
      {
        match: [1, 15],
        text: 'Beast / mammal',
      },
      {
        match: [16, 25],
        text: 'Humanoid',
      },
      {
        match: [26, 31],
        text: 'Bird',
      },
      {
        match: [32, 37],
        text: 'Spider',
      },
      {
        match: [38, 43],
        text: 'Snake',
      },
      {
        match: [44, 49],
        text: 'Worm / slug',
      },
      {
        match: [50, 55],
        text: 'Lizard',
      },
      {
        match: [56, 61],
        text: 'Insect',
      },
      {
        match: [62, 66],
        text: 'Amorphous',
      },
      {
        match: [67, 69],
        text: 'Crustacean',
      },
      {
        match: [70, 71],
        text: 'Fish',
      },
      {
        match: [72, 73],
        text: 'Octopoid',
      },
      {
        match: [74, 75],
        text: 'Amphibian',
      },
      {
        match: [76, 77],
        text: 'Plant',
      },
      {
        match: [78],
        text: 'Incorporeal',
      },
      {
        match: [79],
        text: 'Mineral',
      },
      {
        match: [80],
        text: 'Elemental',
      },
      {
        match: [81, 100],
        text: 'Hybrid (roll twice)',
      },
    ],
  },

  Characteristics: {
    name: 'Characteristics',
    d: 100,
    table: [
      {
        match: [1, 5],
        text: 'Extra limbs',
      },
      {
        match: [6, 10],
        text: 'Fangs / rows of sharp teeth',
      },
      {
        match: [11, 15],
        text: 'Claws / talons',
      },
      {
        match: [16, 20],
        text: 'Strange color / markings',
      },
      {
        match: [21, 25],
        text: 'Horns / tusks',
      },
      {
        match: [26, 30],
        text: 'Oversized mouth',
      },
      {
        match: [31, 35],
        text: 'Spikes / spines',
      },
      {
        match: [36, 40],
        text: 'Tail',
      },
      {
        match: [41, 45],
        text: 'Multi-segmented body',
      },
      {
        match: [46, 50],
        text: 'Wings',
      },
      {
        match: [51, 54],
        text: 'Stinger / barbs',
      },
      {
        match: [55, 58],
        text: 'Many-eyed',
      },
      {
        match: [59, 62],
        text: 'Distinctive sound',
      },
      {
        match: [63, 66],
        text: 'Tentacles / tendrils',
      },
      {
        match: [67, 69],
        text: 'Mandibles / pincers',
      },
      {
        match: [70, 72],
        text: 'Luminescent',
      },
      {
        match: [73, 75],
        text: 'Antennae / sensory organs',
      },
      {
        match: [76, 78],
        text: 'Proboscis / inner jaw',
      },
      {
        match: [79, 81],
        text: 'Exoskeleton / shell',
      },
      {
        match: [82, 84],
        text: 'Bony protuberances',
      },
      {
        match: [85, 87],
        text: 'Corrupted flesh',
      },
      {
        match: [88, 90],
        text: 'Semi-transparent',
      },
      {
        match: [91, 93],
        text: 'Scarred / injured',
      },
      {
        match: [94, 95],
        text: 'Egg sac / carried offspring',
      },
      {
        match: [96, 97],
        text: 'Rotting / skeletal',
      },
      {
        match: [98],
        text: 'Mummified / desiccated',
      },
      {
        match: [99],
        text: 'Multi-headed',
      },
      {
        match: [100],
        text: 'Etched with mystic runes',
      },
    ],
  },

  Abilities: {
    name: 'Abilities',
    d: 100,
    table: [
      {
        match: [1, 4],
        text: 'Keen senses',
      },
      {
        match: [5, 8],
        text: 'Intimidating vocalization',
      },
      {
        match: [9, 12],
        text: 'Climber',
      },
      {
        match: [13, 16],
        text: 'Intelligent',
      },
      {
        match: [17, 20],
        text: 'Swift',
      },
      {
        match: [21, 24],
        text: 'Powerful bite',
      },
      {
        match: [25, 28],
        text: 'Stealthy / ambusher',
      },
      {
        match: [29, 32],
        text: 'Horrid visage',
      },
      {
        match: [33, 36],
        text: 'Strong',
      },
      {
        match: [37, 40],
        text: 'Camouflaged',
      },
      {
        match: [41, 43],
        text: 'Flier / glider',
      },
      {
        match: [44, 46],
        text: 'Poisonous',
      },
      {
        match: [47, 49],
        text: 'Semiaquatic / swimmer',
      },
      {
        match: [50, 52],
        text: 'Grappler / entangler',
      },
      {
        match: [53, 55],
        text: 'Leaper',
      },
      {
        match: [56, 58],
        text: 'Crusher / constrictor',
      },
      {
        match: [59, 61],
        text: 'Armored',
      },
      {
        match: [62, 64],
        text: 'Burrower',
      },
      {
        match: [65, 67],
        text: 'Noxious smell',
      },
      {
        match: [68, 69],
        text: 'Trap-setter',
      },
      {
        match: [70, 71],
        text: 'Parasitic',
      },
      {
        match: [72, 73],
        text: 'Vibration sense',
      },
      {
        match: [74, 75],
        text: 'Breath weapon / toxic spew',
      },
      {
        match: [76, 77],
        text: 'Mimicry',
      },
      {
        match: [78, 79],
        text: 'Shapeshifting',
      },
      {
        match: [80, 81],
        text: 'Control lesser creatures',
      },
      {
        match: [82, 83],
        text: 'Echolocation',
      },
      {
        match: [84, 85],
        text: 'Electric shock',
      },
      {
        match: [86, 87],
        text: 'Acidic',
      },
      {
        match: [88, 89],
        text: 'Symbiotic',
      },
      {
        match: [90, 91],
        text: 'Shoot projectiles',
      },
      {
        match: [92],
        text: 'Paralyzing',
      },
      {
        match: [93],
        text: 'Immune to iron',
      },
      {
        match: [94],
        text: 'Feels no pain',
      },
      {
        match: [95],
        text: 'Enact rituals',
      },
      {
        match: [96],
        text: 'Create illusions',
      },
      {
        match: [97],
        text: 'Mind control / telepathy',
      },
      {
        match: [98],
        text: 'Move between realities',
      },
      {
        match: [99],
        text: 'Wield weapons',
      },
      {
        match: [100],
        text: 'Control elements',
      },
    ],
  },
};
