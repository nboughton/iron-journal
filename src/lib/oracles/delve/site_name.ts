import { IOracle } from 'src/components/models'

export const SiteName: { [index: string]: IOracle } = {
  Format: {
    name: 'Format',
    d: 100,
    table: [
      {
        match: [
          1,
          25
        ],
        text: '[Description] [Place]'
      },
      {
        match: [
          26,
          50
        ],
        text: '[Place] of [Detail]'
      },
      {
        match: [
          51,
          70
        ],
        text: '[Place] of [Description] [Detail]'
      },
      {
        match: [
          71,
          80
        ],
        text: "[Place] of [Namesake's] [Detail]"
      },
      {
        match: [
          81,
          85
        ],
        text: "[Namesake's] [Place]"
      },
      {
        match: [
          86,
          95
        ],
        text: '[Description] [Place] of [Namesake]'
      },
      {
        match: [
          96,
          100
        ],
        text: '[Place] of [Namesake]'
      }
    ]
  },

  Description: {
    name: 'Description',
    d: 100,
    table: [
      {
        match: [
          1,
          2
        ],
        text: 'Deep'
      },
      {
        match: [
          3,
          4
        ],
        text: 'Tainted'
      },
      {
        match: [
          5,
          6
        ],
        text: 'Grey'
      },
      {
        match: [
          7,
          8
        ],
        text: 'Forgotten'
      },
      {
        match: [
          9,
          10
        ],
        text: 'Flooded'
      },
      {
        match: [
          11,
          12
        ],
        text: 'Forbidden'
      },
      {
        match: [
          13,
          14
        ],
        text: 'Barren'
      },
      {
        match: [
          15,
          16
        ],
        text: 'Lost'
      },
      {
        match: [
          17,
          18
        ],
        text: 'Cursed'
      },
      {
        match: [
          19,
          20
        ],
        text: 'Fell'
      },
      {
        match: [
          21,
          22
        ],
        text: 'Sunken'
      },
      {
        match: [
          23,
          24
        ],
        text: 'Nightmare'
      },
      {
        match: [
          25,
          26
        ],
        text: 'Infernal'
      },
      {
        match: [
          27,
          28
        ],
        text: 'Dark'
      },
      {
        match: [
          29,
          30
        ],
        text: 'Bloodstained'
      },
      {
        match: [
          31,
          32
        ],
        text: 'Haunted'
      },
      {
        match: [
          33,
          34
        ],
        text: 'White'
      },
      {
        match: [
          35,
          36
        ],
        text: 'Shrouded'
      },
      {
        match: [
          37,
          38
        ],
        text: 'Wasted'
      },
      {
        match: [
          39,
          40
        ],
        text: 'Grim'
      },
      {
        match: [
          41,
          42
        ],
        text: 'Endless'
      },
      {
        match: [
          43,
          44
        ],
        text: 'Crumbling'
      },
      {
        match: [
          45,
          46
        ],
        text: 'Undying'
      },
      {
        match: [
          47,
          48
        ],
        text: 'Bloodied'
      },
      {
        match: [
          49,
          50
        ],
        text: 'Forsaken'
      },
      {
        match: [
          51,
          52
        ],
        text: 'Silent'
      },
      {
        match: [
          53,
          54
        ],
        text: 'Blighted'
      },
      {
        match: [
          55,
          56
        ],
        text: 'Iron'
      },
      {
        match: [
          57,
          58
        ],
        text: 'Frozen'
      },
      {
        match: [
          59,
          60
        ],
        text: 'Abyssal'
      },
      {
        match: [
          61,
          62
        ],
        text: 'Crimson'
      },
      {
        match: [
          63,
          64
        ],
        text: 'Silver'
      },
      {
        match: [
          65,
          66
        ],
        text: 'Desecrated'
      },
      {
        match: [
          67,
          68
        ],
        text: 'Ashen'
      },
      {
        match: [
          69,
          70
        ],
        text: 'Elder'
      },
      {
        match: [
          71,
          72
        ],
        text: 'Scorched'
      },
      {
        match: [
          73,
          74
        ],
        text: 'Unknown'
      },
      {
        match: [
          75,
          76
        ],
        text: 'Scarred'
      },
      {
        match: [
          77,
          78
        ],
        text: 'Broken'
      },
      {
        match: [
          79,
          80
        ],
        text: 'Chaotic'
      },
      {
        match: [
          81,
          82
        ],
        text: 'Black'
      },
      {
        match: [
          83,
          84
        ],
        text: 'Hidden'
      },
      {
        match: [
          85,
          86
        ],
        text: 'Sundered'
      },
      {
        match: [
          87,
          88
        ],
        text: 'Shattered'
      },
      {
        match: [
          89,
          90
        ],
        text: 'Dreaded'
      },
      {
        match: [
          91,
          92
        ],
        text: 'Secret'
      },
      {
        match: [
          93,
          94
        ],
        text: 'High'
      },
      {
        match: [
          95,
          96
        ],
        text: 'Sacred'
      },
      {
        match: [
          97,
          98
        ],
        text: 'Fallen'
      },
      {
        match: [
          99,
          100
        ],
        text: 'Ruined'
      }
    ]
  },

  Detail: {
    name: 'Detail',
    d: 100,
    table: [
      {
        match: [
          1,
          2
        ],
        text: 'Blight'
      },
      {
        match: [
          3,
          4
        ],
        text: 'Strife'
      },
      {
        match: [
          5,
          6
        ],
        text: 'Nightfall'
      },
      {
        match: [
          7,
          8
        ],
        text: 'Fury'
      },
      {
        match: [
          9,
          10
        ],
        text: 'Terror'
      },
      {
        match: [
          11,
          12
        ],
        text: 'Truth'
      },
      {
        match: [
          13,
          14
        ],
        text: 'Spring'
      },
      {
        match: [
          15,
          16
        ],
        text: 'Sanctuary'
      },
      {
        match: [
          17,
          18
        ],
        text: 'Bone'
      },
      {
        match: [
          19,
          20
        ],
        text: 'Specters'
      },
      {
        match: [
          21,
          22
        ],
        text: 'Daybreak'
      },
      {
        match: [
          23,
          24
        ],
        text: 'Doom'
      },
      {
        match: [
          25,
          26
        ],
        text: 'Treachery'
      },
      {
        match: [
          27,
          28
        ],
        text: 'Blood'
      },
      {
        match: [
          29,
          30
        ],
        text: 'War'
      },
      {
        match: [
          31,
          32
        ],
        text: 'Torment'
      },
      {
        match: [
          33,
          34
        ],
        text: 'Iron'
      },
      {
        match: [
          35,
          36
        ],
        text: 'Silence'
      },
      {
        match: [
          37,
          38
        ],
        text: 'Mist'
      },
      {
        match: [
          39,
          40
        ],
        text: 'Isolation'
      },
      {
        match: [
          41,
          42
        ],
        text: 'Runes'
      },
      {
        match: [
          43,
          44
        ],
        text: 'Rot'
      },
      {
        match: [
          45,
          46
        ],
        text: 'Corruption'
      },
      {
        match: [
          47,
          48
        ],
        text: 'Prophecy'
      },
      {
        match: [
          49,
          50
        ],
        text: 'Fate'
      },
      {
        match: [
          51,
          52
        ],
        text: 'Twilight'
      },
      {
        match: [
          53,
          54
        ],
        text: 'Power'
      },
      {
        match: [
          55,
          56
        ],
        text: 'Darkness'
      },
      {
        match: [
          57,
          58
        ],
        text: 'Gloom'
      },
      {
        match: [
          59,
          60
        ],
        text: 'Storms'
      },
      {
        match: [
          61,
          62
        ],
        text: 'Hope'
      },
      {
        match: [
          63,
          64
        ],
        text: 'Lament'
      },
      {
        match: [
          65,
          66
        ],
        text: 'Frost'
      },
      {
        match: [
          67,
          68
        ],
        text: 'Souls'
      },
      {
        match: [
          69,
          70
        ],
        text: 'Winter'
      },
      {
        match: [
          71,
          72
        ],
        text: 'Sadness'
      },
      {
        match: [
          73,
          74
        ],
        text: 'Desolation'
      },
      {
        match: [
          75,
          76
        ],
        text: 'Bane'
      },
      {
        match: [
          77,
          78
        ],
        text: 'Lies'
      },
      {
        match: [
          79,
          80
        ],
        text: 'Ash'
      },
      {
        match: [
          81,
          82
        ],
        text: 'Banishment'
      },
      {
        match: [
          83,
          84
        ],
        text: 'Shadow'
      },
      {
        match: [
          85,
          86
        ],
        text: 'Madness'
      },
      {
        match: [
          87,
          88
        ],
        text: 'Stone'
      },
      {
        match: [
          89,
          90
        ],
        text: 'Secrets'
      },
      {
        match: [
          91,
          92
        ],
        text: 'Despair'
      },
      {
        match: [
          93,
          94
        ],
        text: 'Blades'
      },
      {
        match: [
          95,
          96
        ],
        text: 'Dread'
      },
      {
        match: [
          97,
          98
        ],
        text: 'Light'
      },
      {
        match: [
          99,
          100
        ],
        text: 'Wrath'
      }
    ]
  },

  Namesake: {
    name: 'Namesake',
    d: 100,
    table: [
      {
        match: [
          1,
          2
        ],
        text: 'Breckon'
      },
      {
        match: [
          3,
          4
        ],
        text: 'Issara'
      },
      {
        match: [
          5,
          6
        ],
        text: 'Milenna'
      },
      {
        match: [
          7,
          8
        ],
        text: 'Thorval'
      },
      {
        match: [
          9,
          10
        ],
        text: 'Khulan'
      },
      {
        match: [
          11,
          12
        ],
        text: 'Aurvang'
      },
      {
        match: [
          13,
          14
        ],
        text: 'Kalida'
      },
      {
        match: [
          15,
          16
        ],
        text: 'Keeara'
      },
      {
        match: [
          17,
          18
        ],
        text: 'Andor'
      },
      {
        match: [
          19,
          20
        ],
        text: 'Zakaria'
      },
      {
        match: [
          21,
          22
        ],
        text: 'Willa'
      },
      {
        match: [
          23,
          24
        ],
        text: 'Etana'
      },
      {
        match: [
          25,
          26
        ],
        text: 'Valgard'
      },
      {
        match: [
          27,
          28
        ],
        text: 'Kenrick'
      },
      {
        match: [
          29,
          30
        ],
        text: 'Wyland'
      },
      {
        match: [
          31,
          32
        ],
        text: 'Sidura'
      },
      {
        match: [
          33,
          34
        ],
        text: 'Svala'
      },
      {
        match: [
          35,
          36
        ],
        text: 'Kajir'
      },
      {
        match: [
          37,
          38
        ],
        text: 'Saiven'
      },
      {
        match: [
          39,
          40
        ],
        text: 'Callwen'
      },
      {
        match: [
          41,
          42
        ],
        text: 'Zhan'
      },
      {
        match: [
          43,
          44
        ],
        text: 'Solana'
      },
      {
        match: [
          45,
          46
        ],
        text: 'Ildar'
      },
      {
        match: [
          47,
          48
        ],
        text: 'Keelan'
      },
      {
        match: [
          49,
          50
        ],
        text: 'Thrain'
      },
      {
        match: [
          51,
          52
        ],
        text: 'Kynan'
      },
      {
        match: [
          53,
          54
        ],
        text: 'Jadina'
      },
      {
        match: [
          55,
          56
        ],
        text: 'Radek'
      },
      {
        match: [
          57,
          58
        ],
        text: 'Wulan'
      },
      {
        match: [
          59,
          60
        ],
        text: 'Garion'
      },
      {
        match: [
          61,
          62
        ],
        text: 'Eysa'
      },
      {
        match: [
          63,
          64
        ],
        text: 'Kolor'
      },
      {
        match: [
          65,
          66
        ],
        text: 'Katarra'
      },
      {
        match: [
          67,
          68
        ],
        text: 'Dain'
      },
      {
        match: [
          69,
          70
        ],
        text: 'Farina'
      },
      {
        match: [
          71,
          72
        ],
        text: 'Yala'
      },
      {
        match: [
          73,
          74
        ],
        text: 'Kodroth'
      },
      {
        match: [
          75,
          76
        ],
        text: 'Morien'
      },
      {
        match: [
          77,
          78
        ],
        text: 'Akida'
      },
      {
        match: [
          79,
          80
        ],
        text: 'Haldorr'
      },
      {
        match: [
          81,
          82
        ],
        text: 'Nyrad'
      },
      {
        match: [
          83,
          84
        ],
        text: 'Edda'
      },
      {
        match: [
          85,
          86
        ],
        text: 'Jorund'
      },
      {
        match: [
          87,
          88
        ],
        text: 'Morraine'
      },
      {
        match: [
          89,
          90
        ],
        text: 'Lindar'
      },
      {
        match: [
          91,
          92
        ],
        text: 'Sithra'
      },
      {
        match: [
          93,
          94
        ],
        text: 'Torgan'
      },
      {
        match: [
          95,
          96
        ],
        text: 'Arnorr'
      },
      {
        match: [
          97,
          98
        ],
        text: 'Thyri'
      },
      {
        match: [
          99,
          100
        ],
        text: 'Erisia'
      }
    ]
  },

  Place: {
    name: 'Place',
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
