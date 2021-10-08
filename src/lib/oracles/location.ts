import { IOracle } from 'src/components/models'

export const Location: { [index: string]: IOracle } = {
  Region: {
    name: 'Region',
    d: 100,
    table: [
      {
        match: [
          1,
          12
        ],
        text: 'Barrier Islands'
      },
      {
        match: [
          13,
          24
        ],
        text: 'Ragged Coast'
      },
      {
        match: [
          25,
          34
        ],
        text: 'Deep Wilds'
      },
      {
        match: [
          35,
          46
        ],
        text: 'Flooded Lands'
      },
      {
        match: [
          47,
          60
        ],
        text: 'Havens'
      },
      {
        match: [
          61,
          72
        ],
        text: 'Hinterlands'
      },
      {
        match: [
          73,
          84
        ],
        text: 'Tempest Hills'
      },
      {
        match: [
          85,
          94
        ],
        text: 'Veiled Mountains'
      },
      {
        match: [
          95,
          99
        ],
        text: 'Shattered Wastes'
      },
      {
        match: [
          100
        ],
        text: 'Elsewhere'
      }
    ]
  },
  Location: {
    name: 'Location',
    d: 100,
    table: [
      {
        match: [
          1
        ],
        text: 'Hideout'
      },
      {
        match: [
          2
        ],
        text: 'Ruin'
      },
      {
        match: [
          3
        ],
        text: 'Mine'
      },
      {
        match: [
          4
        ],
        text: 'Waste'
      },
      {
        match: [
          5
        ],
        text: 'Mystical Site'
      },
      {
        match: [
          6
        ],
        text: 'Path'
      },
      {
        match: [
          7
        ],
        text: 'Outpost'
      },
      {
        match: [
          8
        ],
        text: 'Wall'
      },
      {
        match: [
          9
        ],
        text: 'Battlefield'
      },
      {
        match: [
          10
        ],
        text: 'Hovel'
      },
      {
        match: [
          11
        ],
        text: 'Spring'
      },
      {
        match: [
          12
        ],
        text: 'Lair'
      },
      {
        match: [
          13
        ],
        text: 'Fort'
      },
      {
        match: [
          14
        ],
        text: 'Bridge'
      },
      {
        match: [
          15
        ],
        text: 'Camp'
      },
      {
        match: [
          16
        ],
        text: 'Cairn/Grave'
      },
      {
        match: [
          17,
          18
        ],
        text: 'Caravan'
      },
      {
        match: [
          19,
          20
        ],
        text: 'Waterfall'
      },
      {
        match: [
          21,
          22
        ],
        text: 'Cave'
      },
      {
        match: [
          23,
          24
        ],
        text: 'Swamp'
      },
      {
        match: [
          25,
          26
        ],
        text: 'Fen'
      },
      {
        match: [
          27,
          28
        ],
        text: 'Ravine'
      },
      {
        match: [
          29,
          30
        ],
        text: 'Road'
      },
      {
        match: [
          31,
          32
        ],
        text: 'Tree'
      },
      {
        match: [
          33,
          34
        ],
        text: 'Pond'
      },
      {
        match: [
          35,
          36
        ],
        text: 'Fields'
      },
      {
        match: [
          37,
          38
        ],
        text: 'Marsh'
      },
      {
        match: [
          39,
          40
        ],
        text: 'Steading'
      },
      {
        match: [
          41,
          42
        ],
        text: 'Rapids'
      },
      {
        match: [
          43,
          44
        ],
        text: 'Pass'
      },
      {
        match: [
          45,
          46
        ],
        text: 'Trail'
      },
      {
        match: [
          47,
          48
        ],
        text: 'Glade'
      },
      {
        match: [
          49,
          50
        ],
        text: 'Plain'
      },
      {
        match: [
          51,
          52
        ],
        text: 'Ridge'
      },
      {
        match: [
          53,
          54
        ],
        text: 'Cliff'
      },
      {
        match: [
          55,
          56
        ],
        text: 'Grove'
      },
      {
        match: [
          57,
          58
        ],
        text: 'Village'
      },
      {
        match: [
          59,
          60
        ],
        text: 'Moor'
      },
      {
        match: [
          61,
          62
        ],
        text: 'Thicket'
      },
      {
        match: [
          63,
          64
        ],
        text: 'River Ford'
      },
      {
        match: [
          65,
          66
        ],
        text: 'Valley'
      },
      {
        match: [
          67,
          68
        ],
        text: 'Bay/Fjord'
      },
      {
        match: [
          69,
          70
        ],
        text: 'Foothills'
      },
      {
        match: [
          71,
          72
        ],
        text: 'Lake'
      },
      {
        match: [
          73,
          75
        ],
        text: 'River'
      },
      {
        match: [
          76,
          79
        ],
        text: 'Forest'
      },
      {
        match: [
          80,
          83
        ],
        text: 'Coast'
      },
      {
        match: [
          84,
          88
        ],
        text: 'Hill'
      },
      {
        match: [
          89,
          93
        ],
        text: 'Mountain'
      },
      {
        match: [
          94,
          99
        ],
        text: 'Woods'
      },
      {
        match: [
          100
        ],
        text: 'Anomaly'
      }
    ]
  },
  CoastalWatersLocation: {
    name: 'Coastal Waters Location',
    d: 100,
    table: [
      {
        match: [
          1
        ],
        text: 'Fleet'
      },
      {
        match: [
          2
        ],
        text: 'Sargassum'
      },
      {
        match: [
          3
        ],
        text: 'Flotsam'
      },
      {
        match: [
          4
        ],
        text: 'Mystical Site'
      },
      {
        match: [
          5
        ],
        text: 'Lair'
      },
      {
        match: [
          6,
          10
        ],
        text: 'Wreck'
      },
      {
        match: [
          11,
          15
        ],
        text: 'Harbor'
      },
      {
        match: [
          16,
          23
        ],
        text: 'Ship'
      },
      {
        match: [
          24,
          30
        ],
        text: 'Rocks'
      },
      {
        match: [
          31,
          38
        ],
        text: 'Fjord'
      },
      {
        match: [
          39,
          46
        ],
        text: 'Estuary'
      },
      {
        match: [
          47,
          54
        ],
        text: 'Cove'
      },
      {
        match: [
          55,
          62
        ],
        text: 'Bay'
      },
      {
        match: [
          63,
          70
        ],
        text: 'Ice'
      },
      {
        match: [
          71,
          85
        ],
        text: 'Island'
      },
      {
        match: [
          86,
          99
        ],
        text: 'Open Water'
      },
      {
        match: [
          100
        ],
        text: 'Anomaly'
      }
    ]
  },
  Descriptor: {
    name: 'Descriptor',
    d: 100,
    table: [
      {
        match: [
          1,
          2
        ],
        text: 'High'
      },
      {
        match: [
          3,
          4
        ],
        text: 'Remote'
      },
      {
        match: [
          5,
          6
        ],
        text: 'Exposed'
      },
      {
        match: [
          7,
          8
        ],
        text: 'Small'
      },
      {
        match: [
          9,
          10
        ],
        text: 'Broken'
      },
      {
        match: [
          11,
          12
        ],
        text: 'Diverse'
      },
      {
        match: [
          13,
          14
        ],
        text: 'Rough'
      },
      {
        match: [
          15,
          16
        ],
        text: 'Dark'
      },
      {
        match: [
          17,
          18
        ],
        text: 'Shadowy'
      },
      {
        match: [
          19,
          20
        ],
        text: 'Contested'
      },
      {
        match: [
          21,
          22
        ],
        text: 'Grim'
      },
      {
        match: [
          23,
          24
        ],
        text: 'Wild'
      },
      {
        match: [
          25,
          26
        ],
        text: 'Fertile'
      },
      {
        match: [
          27,
          28
        ],
        text: 'Blocked'
      },
      {
        match: [
          29,
          30
        ],
        text: 'Ancient'
      },
      {
        match: [
          31,
          32
        ],
        text: 'Perilous'
      },
      {
        match: [
          33,
          34
        ],
        text: 'Hidden'
      },
      {
        match: [
          35,
          36
        ],
        text: 'Occupied'
      },
      {
        match: [
          37,
          38
        ],
        text: 'Rich'
      },
      {
        match: [
          39,
          40
        ],
        text: 'Big'
      },
      {
        match: [
          41,
          42
        ],
        text: 'Savage'
      },
      {
        match: [
          43,
          44
        ],
        text: 'Defended'
      },
      {
        match: [
          45,
          46
        ],
        text: 'Withered'
      },
      {
        match: [
          47,
          48
        ],
        text: 'Mystical'
      },
      {
        match: [
          49,
          50
        ],
        text: 'Inaccessible'
      },
      {
        match: [
          51,
          52
        ],
        text: 'Protected'
      },
      {
        match: [
          53,
          54
        ],
        text: 'Abandoned'
      },
      {
        match: [
          55,
          56
        ],
        text: 'Wide'
      },
      {
        match: [
          57,
          58
        ],
        text: 'Foul'
      },
      {
        match: [
          59,
          60
        ],
        text: 'Dead'
      },
      {
        match: [
          61,
          62
        ],
        text: 'Ruined'
      },
      {
        match: [
          63,
          64
        ],
        text: 'Barren'
      },
      {
        match: [
          65,
          66
        ],
        text: 'Cold'
      },
      {
        match: [
          67,
          68
        ],
        text: 'Blighted'
      },
      {
        match: [
          69,
          70
        ],
        text: 'Low'
      },
      {
        match: [
          71,
          72
        ],
        text: 'Beautiful'
      },
      {
        match: [
          73,
          74
        ],
        text: 'Abundant'
      },
      {
        match: [
          75,
          76
        ],
        text: 'Lush'
      },
      {
        match: [
          77,
          78
        ],
        text: 'Flooded'
      },
      {
        match: [
          79,
          80
        ],
        text: 'Empty'
      },
      {
        match: [
          81,
          82
        ],
        text: 'Strange'
      },
      {
        match: [
          83,
          84
        ],
        text: 'Corrupted'
      },
      {
        match: [
          85,
          86
        ],
        text: 'Peaceful'
      },
      {
        match: [
          87,
          88
        ],
        text: 'Forgotten'
      },
      {
        match: [
          89,
          90
        ],
        text: 'Expansive'
      },
      {
        match: [
          91,
          92
        ],
        text: 'Settled'
      },
      {
        match: [
          93,
          94
        ],
        text: 'Dense'
      },
      {
        match: [
          95,
          96
        ],
        text: 'Civilized'
      },
      {
        match: [
          97,
          98
        ],
        text: 'Desolate'
      },
      {
        match: [
          99,
          100
        ],
        text: 'Isolated'
      }
    ]
  },
  SettlementName: {
    name: 'Settlement Name',
    d: 100,
    table: [
      {
        match: [
          1,
          15
        ],
        text: 'A feature of the landscape. Envision what it is. What makes it unusual or distinctive?'
      },
      {
        match: [
          16,
          30
        ],
        text: 'A manmade edifice. What is it? Why is it important to this settlement’s history?'
      },
      {
        match: [
          31,
          45
        ],
        text: 'A creature. Why have the people of this settlement chosen this creature as their totem? How is it represented in art or rituals?'
      },
      {
        match: [
          46,
          60
        ],
        text: 'A historical event. What happened here? What place or practice commemorates this event?'
      },
      {
        match: [
          61,
          75
        ],
        text: 'A word in an Old World language. What culture is represented by this word? What does it translate to?'
      },
      {
        match: [
          76,
          90
        ],
        text: 'A season or environmental aspect. What influence does the weather have on this settlement?'
      },
      {
        match: [
          91,
          100
        ],
        text: 'Something Else...'
      }
    ]
  },
  QuickSettlementNamePrefix: {
    name: 'Quick Settlement Name Prefix',
    d: 100,
    table: [
      {
        match: [
          1,
          4
        ],
        text: 'Bleak'
      },
      {
        match: [
          5,
          8
        ],
        text: 'Green'
      },
      {
        match: [
          9,
          12
        ],
        text: 'Wolf'
      },
      {
        match: [
          13,
          16
        ],
        text: 'Raven'
      },
      {
        match: [
          17,
          20
        ],
        text: 'Gray'
      },
      {
        match: [
          21,
          24
        ],
        text: 'Red'
      },
      {
        match: [
          25,
          28
        ],
        text: 'Axe'
      },
      {
        match: [
          29,
          32
        ],
        text: 'Great'
      },
      {
        match: [
          33,
          36
        ],
        text: 'Wood'
      },
      {
        match: [
          37,
          40
        ],
        text: 'Low'
      },
      {
        match: [
          41,
          44
        ],
        text: 'White'
      },
      {
        match: [
          45,
          48
        ],
        text: 'Storm'
      },
      {
        match: [
          49,
          52
        ],
        text: 'Black'
      },
      {
        match: [
          53,
          56
        ],
        text: 'Mourn'
      },
      {
        match: [
          57,
          60
        ],
        text: 'New'
      },
      {
        match: [
          61,
          64
        ],
        text: 'Stone'
      },
      {
        match: [
          65,
          68
        ],
        text: 'Grim'
      },
      {
        match: [
          69,
          72
        ],
        text: 'Lost'
      },
      {
        match: [
          73,
          76
        ],
        text: 'High'
      },
      {
        match: [
          77,
          80
        ],
        text: 'Rock'
      },
      {
        match: [
          81,
          84
        ],
        text: 'Shield'
      },
      {
        match: [
          85,
          88
        ],
        text: 'Sword'
      },
      {
        match: [
          89,
          92
        ],
        text: 'Frost'
      },
      {
        match: [
          93,
          96
        ],
        text: 'Thorn'
      },
      {
        match: [
          97,
          100
        ],
        text: 'Long'
      }
    ]
  },
  QuickSettlementNameSuffix: {
    name: 'Quick Settlement Name Suffix',
    d: 100,
    table: [
      {
        match: [
          1,
          4
        ],
        text: 'moor'
      },
      {
        match: [
          5,
          8
        ],
        text: 'ford'
      },
      {
        match: [
          9,
          12
        ],
        text: 'crag'
      },
      {
        match: [
          13,
          16
        ],
        text: 'watch'
      },
      {
        match: [
          17,
          20
        ],
        text: 'hope'
      },
      {
        match: [
          21,
          24
        ],
        text: 'wood'
      },
      {
        match: [
          25,
          28
        ],
        text: 'ridge'
      },
      {
        match: [
          29,
          32
        ],
        text: 'stone'
      },
      {
        match: [
          33,
          36
        ],
        text: 'haven'
      },
      {
        match: [
          37,
          40
        ],
        text: 'fall(s)'
      },
      {
        match: [
          41,
          44
        ],
        text: 'river'
      },
      {
        match: [
          45,
          48
        ],
        text: 'field'
      },
      {
        match: [
          49,
          52
        ],
        text: 'hill'
      },
      {
        match: [
          53,
          56
        ],
        text: 'bridge'
      },
      {
        match: [
          57,
          60
        ],
        text: 'mark'
      },
      {
        match: [
          61,
          64
        ],
        text: 'cairn'
      },
      {
        match: [
          65,
          68
        ],
        text: 'land'
      },
      {
        match: [
          69,
          72
        ],
        text: 'hall'
      },
      {
        match: [
          73,
          76
        ],
        text: 'mount'
      },
      {
        match: [
          77,
          80
        ],
        text: 'rock'
      },
      {
        match: [
          81,
          84
        ],
        text: 'brook'
      },
      {
        match: [
          85,
          88
        ],
        text: 'barrow'
      },
      {
        match: [
          89,
          92
        ],
        text: 'stead'
      },
      {
        match: [
          93,
          96
        ],
        text: 'home'
      },
      {
        match: [
          97,
          100
        ],
        text: 'wick'
      }
    ]
  }

}
