/* eslint-disable @typescript-eslint/no-var-requires */
export const icon = {
  d10: (): string => {
    return require('../assets/icons/d10.svg') as string;
  },
  person: (): string => {
    return require('../assets/icons/person.svg') as string;
  },
  dungeon: (): string => {
    return require('../assets/icons/dungeon.svg') as string;
  },
  village: (): string => {
    return require('../assets/icons/village.svg') as string;
  },
  location: (type: string): string => {
    const test =
      /(Hideout|Waterfall|Cliff|Ruin|Cave|Grove|Mine|Swamp|Village|Waste|Fen|Moor|Mystical Site|Ravine|Thicket|Path|Road|River|Ford|Outpost|Tree|Valley|Wall|Pond|Bay|Fjord|Battlefield|Fields|Foothills|Hovel|Marsh|Lake|Spring|Steading|River|Lair|Rapids|Forest|Fort|Pass|Coast|Bridge|Trail|Hill|Camp|Glade|Mountain|Cairn|Grave|Plain|Woods|Ridge|Caravan|Anomaly|Fleet|Sargassum|Flotsam|Wreck|Harbor|Ship|Rocks|Estuary|Cove|Ice|Island|Open Water)/;

    const m = test.exec(type);
    let out = require('../assets/icons/village.svg') as string;
    m?.forEach((match) => {
      if (['Hideout'].includes(match)) out = require('../assets/icons/secret-door.svg') as string;
      if (['Waterfall', 'Rapids'].includes(match)) out = require('../assets/icons/waterfall.svg') as string;
      if (['Cliff'].includes(match)) out = require('../assets/icons/falling-rocks.svg') as string;
      if (['Ruin'].includes(match)) out = require('../assets/icons/ancient-ruins.svg') as string;
      if (['Cave', 'Mine', 'Lair'].includes(match)) out = require('../assets/icons/cave-entrance.svg') as string;
      if (['Grove', 'Forest', 'Woods', 'Glade'].includes(match))
        out = require('../assets/icons/circle-forest.svg') as string;
      if (['Swamp', 'Fen', 'Moor', 'Marsh'].includes(match)) out = require('../assets/icons/swamp.svg') as string;
      if (['Mystical Site', 'Anomaly'].includes(match)) out = require('../assets/icons/magic-gate.svg') as string;
      if (['Ravine'].includes(match)) out = require('../assets/icons/cliff-crossing.svg') as string;
      if (['Thicket'].includes(match)) out = require('../assets/icons/heavy-thorny-triskelion.svg') as string;
      if (['Path', 'Road', 'Trail', 'Pass'].includes(match)) out = require('../assets/icons/stone-path.svg') as string;
      if (['River', 'Ford', 'Spring', 'Estuary', 'Cove'].includes(match))
        out = require('../assets/icons/river.svg') as string;
      if (['Tree'].includes(match)) out = require('../assets/icons/pine-tree.svg') as string;
      if (['Valley'].includes(match)) out = require('../assets/icons/valley.svg') as string;
      if (['Wall'].includes(match)) out = require('../assets/icons/stone-wall.svg') as string;
      if (['Lake', 'Pond'].includes(match)) out = require('../assets/icons/spill.svg') as string;
      if (['Foothills', 'Hill'].includes(match)) out = require('../assets/icons/hills.svg') as string;
      if (['Fort'].includes(match)) out = require('../assets/icons/hill-fort.svg') as string;
      if (['Hovel'].includes(match)) out = require('../assets/icons/hut.svg') as string;
      if (['Camp'].includes(match)) out = require('../assets/icons/campfire.svg') as string;
      if (['Bay', 'Fjord', 'Coast'].includes(match)) out = require('../assets/icons/big-wave.svg') as string;
      if (['Cairn'].includes(match)) out = require('../assets/icons/dolmen.svg') as string;
      if (['Fields', 'Plain', 'Waste'].includes(match)) out = require('../assets/icons/field.svg') as string;
      if (['Bridge'].includes(match)) out = require('../assets/icons/stone-bridge.svg') as string;
      if (['Caravan'].includes(match)) out = require('../assets/icons/cartwheel.svg') as string;
      if (['Mountain', 'Ridge'].includes(match)) out = require('../assets/icons/mountains.svg') as string;
      if (['Grave', 'Battlefield'].includes(match)) out = require('../assets/icons/tombstone.svg') as string;
      if (['Steading', 'Outpost'].includes(match)) out = require('../assets/icons/village.svg') as string;
      if (['Rocks'].includes(match)) out = require('../assets/icons/stone-pile.svg') as string;
      if (['Fleets', 'Ship', 'Harbor'].includes(match)) out = require('../assets/icons/drakkar.svg') as string;
      if (['Ice'].includes(match)) out = require('../assets/icons/icebergs.svg') as string;
      if (['Sargassum'].includes(match)) out = require('../assets/icons/algae.svg') as string;
      if (['Wreck', 'Flotsam'].includes(match)) out = require('../assets/icons/ship-wreck.svg') as string;
      if (['Island'].includes(match)) out = require('../assets/icons/island.svg') as string;
      if (['Open Water'].includes(match)) out = require('../assets/icons/at-sea.svg') as string;
    });

    return out;
  },
};
