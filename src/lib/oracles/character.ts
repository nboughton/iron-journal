import { IOracle } from 'src/components/models'

export const Character: { [index: string]: IOracle } = {
  Role: {
    name: 'Role',
    d: 100,
    table: [
      {
        match: [
          1,
          2
        ],
        text: 'Criminal'
      },
      {
        match: [
          3,
          4
        ],
        text: 'Healer'
      },
      {
        match: [
          5,
          6
        ],
        text: 'Bandit'
      },
      {
        match: [
          7,
          9
        ],
        text: 'Guide'
      },
      {
        match: [
          10,
          12
        ],
        text: 'Performer'
      },
      {
        match: [
          13,
          15
        ],
        text: 'Miner'
      },
      {
        match: [
          16,
          18
        ],
        text: 'Mercenary'
      },
      {
        match: [
          19,
          21
        ],
        text: 'Outcast'
      },
      {
        match: [
          22,
          24
        ],
        text: 'Vagrant'
      },
      {
        match: [
          25,
          27
        ],
        text: 'Forester'
      },
      {
        match: [
          28,
          30
        ],
        text: 'Traveler'
      },
      {
        match: [
          31,
          33
        ],
        text: 'Mystic'
      },
      {
        match: [
          34,
          36
        ],
        text: 'Priest'
      },
      {
        match: [
          37,
          39
        ],
        text: 'Sailor'
      },
      {
        match: [
          40,
          42
        ],
        text: 'Pilgrim'
      },
      {
        match: [
          43,
          45
        ],
        text: 'Thief'
      },
      {
        match: [
          46,
          48
        ],
        text: 'Adventurer'
      },
      {
        match: [
          49,
          51
        ],
        text: 'Forager'
      },
      {
        match: [
          52,
          54
        ],
        text: 'Leader'
      },
      {
        match: [
          55,
          58
        ],
        text: 'Guard'
      },
      {
        match: [
          59,
          62
        ],
        text: 'Artisan'
      },
      {
        match: [
          63,
          66
        ],
        text: 'Scout'
      },
      {
        match: [
          67,
          70
        ],
        text: 'Herder'
      },
      {
        match: [
          71,
          74
        ],
        text: 'Fisher'
      },
      {
        match: [
          75,
          79
        ],
        text: 'Warrior'
      },
      {
        match: [
          80,
          84
        ],
        text: 'Hunter'
      },
      {
        match: [
          85,
          89
        ],
        text: 'Raider'
      },
      {
        match: [
          90,
          94
        ],
        text: 'Trader'
      },
      {
        match: [
          95,
          99
        ],
        text: 'Farmer'
      },
      {
        match: [
          100
        ],
        text: 'Unusual role'
      }
    ]
  },
  Goal: {
    name: 'Goal',
    d: 100,
    table: [
      {
        match: [
          1,
          3
        ],
        text: 'Obtain an object'
      },
      {
        match: [
          4,
          6
        ],
        text: 'Make an agreement'
      },
      {
        match: [
          7,
          9
        ],
        text: 'Build a relationship'
      },
      {
        match: [
          10,
          12
        ],
        text: 'Undermine a relationship'
      },
      {
        match: [
          13,
          15
        ],
        text: 'Seek a truth'
      },
      {
        match: [
          16,
          18
        ],
        text: 'Pay a debt'
      },
      {
        match: [
          19,
          21
        ],
        text: 'Refute a falsehood'
      },
      {
        match: [
          22,
          24
        ],
        text: 'Harm a rival'
      },
      {
        match: [
          25,
          27
        ],
        text: 'Cure an ill'
      },
      {
        match: [
          28,
          30
        ],
        text: 'Find a person'
      },
      {
        match: [
          31,
          33
        ],
        text: 'Find a home'
      },
      {
        match: [
          34,
          36
        ],
        text: 'Seize power'
      },
      {
        match: [
          37,
          39
        ],
        text: 'Restore a relationship'
      },
      {
        match: [
          40,
          42
        ],
        text: 'Create an item'
      },
      {
        match: [
          43,
          45
        ],
        text: 'Travel to a place'
      },
      {
        match: [
          46,
          48
        ],
        text: 'Secure provisions'
      },
      {
        match: [
          49,
          51
        ],
        text: 'Rebel against power'
      },
      {
        match: [
          52,
          54
        ],
        text: 'Collect a debt'
      },
      {
        match: [
          55,
          57
        ],
        text: 'Protect a secret'
      },
      {
        match: [
          58,
          60
        ],
        text: 'Spread faith'
      },
      {
        match: [
          61,
          63
        ],
        text: 'Enrich themselves'
      },
      {
        match: [
          64,
          66
        ],
        text: 'Protect a person'
      },
      {
        match: [
          67,
          69
        ],
        text: 'Protect the status quo'
      },
      {
        match: [
          70,
          72
        ],
        text: 'Advance status'
      },
      {
        match: [
          73,
          75
        ],
        text: 'Defend a place'
      },
      {
        match: [
          76,
          78
        ],
        text: 'Avenge a wrong'
      },
      {
        match: [
          79,
          81
        ],
        text: 'Fulfill a duty'
      },
      {
        match: [
          82,
          84
        ],
        text: 'Gain knowledge'
      },
      {
        match: [
          85,
          87
        ],
        text: 'Prove worthiness'
      }
    ]
  },
  Descriptor: {
    name: 'Descriptor',
    d: 100,
    table: [
      {
        match: [
          1
        ],
        text: 'Stoic'
      },
      {
        match: [
          2
        ],
        text: 'Attractive'
      },
      {
        match: [
          3
        ],
        text: 'Passive'
      },
      {
        match: [
          4
        ],
        text: 'Aloof'
      },
      {
        match: [
          5
        ],
        text: 'Affectionate'
      },
      {
        match: [
          6
        ],
        text: 'Generous'
      },
      {
        match: [
          7
        ],
        text: 'Smug'
      },
      {
        match: [
          8
        ],
        text: 'Armed'
      },
      {
        match: [
          9
        ],
        text: 'Clever'
      },
      {
        match: [
          10
        ],
        text: 'Brave'
      },
      {
        match: [
          11
        ],
        text: 'Ugly'
      },
      {
        match: [
          12
        ],
        text: 'Sociable'
      },
      {
        match: [
          13
        ],
        text: 'Doomed'
      },
      {
        match: [
          14
        ],
        text: 'Connected'
      },
      {
        match: [
          15
        ],
        text: 'Bold'
      },
      {
        match: [
          16
        ],
        text: 'Jealous'
      },
      {
        match: [
          17
        ],
        text: 'Angry'
      },
      {
        match: [
          18
        ],
        text: 'Active'
      },
      {
        match: [
          19
        ],
        text: 'Suspicious'
      },
      {
        match: [
          20
        ],
        text: 'Hostile'
      },
      {
        match: [
          21
        ],
        text: 'Hardhearted'
      },
      {
        match: [
          22
        ],
        text: 'Successful'
      },
      {
        match: [
          23
        ],
        text: 'Talented'
      },
      {
        match: [
          24
        ],
        text: 'Experienced'
      },
      {
        match: [
          25
        ],
        text: 'Deceitful'
      },
      {
        match: [
          26
        ],
        text: 'Ambitious'
      },
      {
        match: [
          27
        ],
        text: 'Aggressive'
      },
      {
        match: [
          28
        ],
        text: 'Conceited'
      },
      {
        match: [
          29
        ],
        text: 'Proud'
      },
      {
        match: [
          30
        ],
        text: 'Stern'
      },
      {
        match: [
          31
        ],
        text: 'Dependent'
      },
      {
        match: [
          32
        ],
        text: 'Wary'
      },
      {
        match: [
          33
        ],
        text: 'Strong'
      },
      {
        match: [
          34
        ],
        text: 'Insightful'
      },
      {
        match: [
          35
        ],
        text: 'Dangerous'
      },
      {
        match: [
          36
        ],
        text: 'Quirky'
      },
      {
        match: [
          37
        ],
        text: 'Cheery'
      },
      {
        match: [
          38
        ],
        text: 'Disfigured'
      },
      {
        match: [
          39
        ],
        text: 'Intolerant'
      },
      {
        match: [
          40
        ],
        text: 'Skilled'
      },
      {
        match: [
          41
        ],
        text: 'Stingy'
      },
      {
        match: [
          42
        ],
        text: 'Timid'
      },
      {
        match: [
          43
        ],
        text: 'Insensitive'
      },
      {
        match: [
          44
        ],
        text: 'Wild'
      },
      {
        match: [
          45
        ],
        text: 'Bitter'
      },
      {
        match: [
          46
        ],
        text: 'Cunning'
      },
      {
        match: [
          47
        ],
        text: 'Remorseful'
      },
      {
        match: [
          48
        ],
        text: 'Kind'
      },
      {
        match: [
          49
        ],
        text: 'Charming'
      },
      {
        match: [
          50
        ],
        text: 'Oblivious'
      },
      {
        match: [
          51
        ],
        text: 'Critical'
      },
      {
        match: [
          52
        ],
        text: 'Cautious'
      },
      {
        match: [
          53
        ],
        text: 'Resourceful'
      },
      {
        match: [
          54
        ],
        text: 'Weary'
      },
      {
        match: [
          55
        ],
        text: 'Wounded'
      },
      {
        match: [
          56
        ],
        text: 'Anxious'
      },
      {
        match: [
          57
        ],
        text: 'Powerful'
      },
      {
        match: [
          58
        ],
        text: 'Athletic'
      },
      {
        match: [
          59
        ],
        text: 'Driven'
      },
      {
        match: [
          60
        ],
        text: 'Cruel'
      },
      {
        match: [
          61
        ],
        text: 'Quiet'
      },
      {
        match: [
          62
        ],
        text: 'Honest'
      },
      {
        match: [
          63
        ],
        text: 'Infamous'
      },
      {
        match: [
          64
        ],
        text: 'Dying'
      },
      {
        match: [
          65
        ],
        text: 'Reclusive'
      },
      {
        match: [
          66
        ],
        text: 'Artistic'
      },
      {
        match: [
          67
        ],
        text: 'Disabled'
      },
      {
        match: [
          68
        ],
        text: 'Confused'
      },
      {
        match: [
          69
        ],
        text: 'Manipulative'
      },
      {
        match: [
          70
        ],
        text: 'Relaxed'
      },
      {
        match: [
          71
        ],
        text: 'Stealthy'
      },
      {
        match: [
          72
        ],
        text: 'Confident'
      },
      {
        match: [
          73
        ],
        text: 'Weak'
      },
      {
        match: [
          74
        ],
        text: 'Friendly'
      },
      {
        match: [
          75
        ],
        text: 'Wise'
      },
      {
        match: [
          76
        ],
        text: 'Influential'
      },
      {
        match: [
          77
        ],
        text: 'Young'
      },
      {
        match: [
          78
        ],
        text: 'Adventurous'
      },
      {
        match: [
          79
        ],
        text: 'Oppressed'
      },
      {
        match: [
          80
        ],
        text: 'Vengeful'
      },
      {
        match: [
          81
        ],
        text: 'Cooperative'
      },
      {
        match: [
          82
        ],
        text: 'Armored'
      },
      {
        match: [
          83
        ],
        text: 'Apathetic'
      },
      {
        match: [
          84
        ],
        text: 'Determined'
      },
      {
        match: [
          85
        ],
        text: 'Loyal'
      },
      {
        match: [
          86
        ],
        text: 'Sick'
      },
      {
        match: [
          87
        ],
        text: 'Religious'
      },
      {
        match: [
          88
        ],
        text: 'Selfish'
      },
      {
        match: [
          89
        ],
        text: 'Old'
      },
      {
        match: [
          90
        ],
        text: 'Fervent'
      },
      {
        match: [
          91
        ],
        text: 'Violent'
      },
      {
        match: [
          92
        ],
        text: 'Agreeable'
      },
      {
        match: [
          93
        ],
        text: 'Hot-tempered'
      },
      {
        match: [
          94
        ],
        text: 'Stubborn'
      },
      {
        match: [
          95
        ],
        text: 'Incompetent'
      },
      {
        match: [
          96
        ],
        text: 'Greedy'
      },
      {
        match: [
          97
        ],
        text: 'Cowardly'
      },
      {
        match: [
          98
        ],
        text: 'Obsessed'
      },
      {
        match: [
          99
        ],
        text: 'Careless'
      },
      {
        match: [
          100
        ],
        text: 'Ironsworn'
      }
    ]
  },
  Disposition: {
    name: 'Disposition',
    d: 100,
    table: [
      {
        match: [
          1,
          6
        ],
        text: 'Helpful'
      },
      {
        match: [
          7,
          13
        ],
        text: 'Friendly'
      },
      {
        match: [
          14,
          20
        ],
        text: 'Cooperative'
      },
      {
        match: [
          21,
          28
        ],
        text: 'Curious'
      },
      {
        match: [
          29,
          36
        ],
        text: 'Indifferent'
      },
      {
        match: [
          37,
          47
        ],
        text: 'Suspicious'
      },
      {
        match: [
          48,
          57
        ],
        text: 'Wanting'
      },
      {
        match: [
          58,
          67
        ],
        text: 'Desperate'
      },
      {
        match: [
          68,
          76
        ],
        text: 'Demanding'
      },
      {
        match: [
          77,
          85
        ],
        text: 'Unfriendly'
      },
      {
        match: [
          86,
          93
        ],
        text: 'Threatening'
      },
      {
        match: [
          94,
          100
        ],
        text: 'Hostile'
      }
    ]
  },
  Activity: {
    name: 'Activity',
    d: 100,
    table: [
      {
        match: [
          1,
          2
        ],
        text: 'Guarding'
      },
      {
        match: [
          3,
          4
        ],
        text: 'Preserving'
      },
      {
        match: [
          5,
          6
        ],
        text: 'Constructing'
      },
      {
        match: [
          7,
          8
        ],
        text: 'Mending'
      },
      {
        match: [
          9,
          10
        ],
        text: 'Assisting'
      },
      {
        match: [
          11,
          12
        ],
        text: 'Securing'
      },
      {
        match: [
          13,
          14
        ],
        text: 'Learning'
      },
      {
        match: [
          15,
          16
        ],
        text: 'Sneaking'
      },
      {
        match: [
          17,
          18
        ],
        text: 'Fleeing'
      },
      {
        match: [
          19,
          20
        ],
        text: 'Sacrificing'
      },
      {
        match: [
          21,
          22
        ],
        text: 'Creating'
      },
      {
        match: [
          23,
          24
        ],
        text: 'Luring'
      },
      {
        match: [
          25,
          26
        ],
        text: 'Hunting'
      },
      {
        match: [
          27,
          28
        ],
        text: 'Seizing'
      },
      {
        match: [
          29,
          30
        ],
        text: 'Bargaining'
      },
      {
        match: [
          31,
          32
        ],
        text: 'Mimicking'
      },
      {
        match: [
          33,
          34
        ],
        text: 'Tricking'
      },
      {
        match: [
          35,
          36
        ],
        text: 'Tracking'
      },
      {
        match: [
          37,
          38
        ],
        text: 'Escorting'
      },
      {
        match: [
          39,
          40
        ],
        text: 'Hiding'
      },
      {
        match: [
          41,
          42
        ],
        text: 'Raiding'
      },
      {
        match: [
          43,
          44
        ],
        text: 'Socializing'
      },
      {
        match: [
          45,
          46
        ],
        text: 'Exploring'
      },
      {
        match: [
          47,
          48
        ],
        text: 'Journeying'
      },
      {
        match: [
          49,
          50
        ],
        text: 'Supporting'
      },
      {
        match: [
          51,
          52
        ],
        text: 'Avoiding'
      },
      {
        match: [
          53,
          54
        ],
        text: 'Disabling'
      },
      {
        match: [
          55,
          56
        ],
        text: 'Leading'
      },
      {
        match: [
          57,
          58
        ],
        text: 'Assaulting'
      },
      {
        match: [
          59,
          60
        ],
        text: 'Ensnaring'
      },
      {
        match: [
          61,
          62
        ],
        text: 'Defending'
      },
      {
        match: [
          63,
          64
        ],
        text: 'Recovering'
      },
      {
        match: [
          65,
          66
        ],
        text: 'Patrolling'
      },
      {
        match: [
          67,
          68
        ],
        text: 'Resting'
      },
      {
        match: [
          69,
          70
        ],
        text: 'Distracting'
      },
      {
        match: [
          71,
          72
        ],
        text: 'Leaving'
      },
      {
        match: [
          73,
          74
        ],
        text: 'Fighting'
      },
      {
        match: [
          75,
          76
        ],
        text: 'Ambushing'
      },
      {
        match: [
          77,
          78
        ],
        text: 'Controlling'
      },
      {
        match: [
          79,
          80
        ],
        text: 'Observing'
      },
      {
        match: [
          81,
          82
        ],
        text: 'Gathering'
      },
      {
        match: [
          83,
          84
        ],
        text: 'Suffering'
      },
      {
        match: [
          85,
          86
        ],
        text: 'Threatening'
      },
      {
        match: [
          87,
          88
        ],
        text: 'Searching'
      },
      {
        match: [
          89,
          90
        ],
        text: 'Destroying'
      },
      {
        match: [
          91,
          92
        ],
        text: 'Restoring'
      },
      {
        match: [
          93,
          94
        ],
        text: 'Consuming'
      },
      {
        match: [
          95,
          96
        ],
        text: 'Removing'
      },
      {
        match: [
          97,
          98
        ],
        text: 'Inspecting'
      },
      {
        match: [
          99,
          100
        ],
        text: 'Summoning'
      }
    ]
  }

}
