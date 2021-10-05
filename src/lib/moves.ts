import { IMove } from 'src/components/models'

export const Moves: { [index: string]: IMove[] } = {
  'Adventure Moves': [
    {
      name: 'Face Danger',
      source: 'Ironsworn Rulebook, page 60',
      keywords: 'adventure risky threat',
      text: 'When <b>you attempt something risky or react to an imminent threat</b>, envision your action and roll. If you act...<br /><ul><li>With speed, agility, or precision: Roll +edge.</li><li>With charm, loyalty, or courage: Roll +heart.</li><li>With aggressive action, forceful defense, strength, or endurance: Roll +iron.</li><li>With deception, stealth, or trickery: Roll +shadow.</li><li>With expertise, insight, or observation: Roll +wits.</li></ul>On a <b>strong hit</b>, you are successful. Take +1 momentum.<br /><br />On a <b>weak hit</b>, you succeed, but face a troublesome cost. Choose one.<ul><li>You are delayed, lose advantage, or face a new danger: Suffer -1 momentum.</li>  <li> You are tired or hurt: <i>Endure Harm</i> (1 harm).</li>  <li> You are dispirited or afraid: <i>Endure Stress</i> (1 stress).</li>  <li> You sacrifice resources: Suffer -1 supply.</li></ul>On a <b>miss</b>, you fail, or your progress is undermined by a dramatic and costly turn of events. <i>Pay the Price</i>.'
    },
    {
      name: 'Secure An Advantage',
      source: 'Ironsworn Rulebook, page 61',
      keywords: 'adventure prepare assess',
      text: 'When <b>you assess a situation, make preparations, or attempt to gain leverage</b>, envision your action and roll. If you act...<br /> <ul> <li> With speed, agility, or precision: Roll +edge.</li>  <li> With charm, loyalty, or courage: Roll +heart.</li>  <li> With aggressive action, forceful defense, strength, or endurance: Roll +iron.</li>  <li> With deception, stealth, or trickery: Roll +shadow.</li>  <li> With expertise, insight, or observation: Roll +wits.</li></ul>On a <b>strong hit</b>, you gain advantage. Choose one.<br /> <ul> <li> Take control: Make another move now (not a <i>progress move</i>), and add +1.</li>  <li> Prepare to act: Take +2 momentum.</li></ul>On a <b>weak hit</b>, your advantage is short-lived. Take +1 momentum.<br /><br />On a <b>miss</b>, you fail or your assumptions betray you. <i>Pay the Price</i>.'
    },
    {
      name: 'Gather Information',
      source: 'Ironsworn Rulebook, page 62',
      keywords: 'adventure search investigate question',
      text: 'When <b>you search an area, ask questions, conduct an investigation, or follow a track</b>, roll +wits. If you act within a community or ask questions of a person with whom you share a bond, add +1.<br /><br />On a <b>strong hit</b>, you discover something helpful and specific. The path you must follow or action you must take to make progress is made clear. Envision what you learn (<i>Ask the Oracle</i> if unsure), and take +2 momentum.<br /><br />On a <b>weak hit</b>, the information complicates your quest or introduces a new danger. Envision what you discover (<i>Ask the Oracle</i> if unsure), and take +1 momentum.<br /><br />On a <b>miss</b>, your investigation unearths a dire threat or reveals an unwelcome truth that undermines your quest. <i>Pay the Price</i>.'
    },
    {
      name: 'Heal',
      source: 'Ironsworn Rulebook, page 63',
      keywords: 'adventure wound mend injury',
      text: 'When <b>you treat an injury or ailment</b>, roll +wits. If you are mending your own wounds, roll +wits or +iron, whichever is lower.<br /><br />On a <b>strong hit</b>, your care is helpful. If you (or the ally under your care) have the wounded condition, you may clear it. Then, take or give up to +2 health.<br /><br />On a <b>weak hit</b>, as above, but you must suffer -1 supply or -1 momentum (your choice).<br /><br />On a <b>miss</b>, your aid is ineffective. <i>Pay the Price</i>.'
    },
    {
      name: 'Resupply',
      source: 'Ironsworn Rulebook, page 63',
      keywords: 'adventure hunt forage scavenge',
      text: 'When <b>you hunt, forage, or scavenge</b>, roll +wits.<br /><br />On a <b>strong hit</b>, you bolster your resources. Take +2 supply.<br /><br />On a <b>weak hit</b>, take up to +2 supply, but suffer -1 momentum for each.<br /><br />On a <b>miss</b>, you find nothing helpful. <i>Pay the Price</i>.'
    },
    {
      name: 'Make Camp',
      source: 'Ironsworn Rulebook, page 64',
      keywords: 'adventure rest recover',
      text: 'When <b>you rest and recover for several hours in the wild, roll +supply</b>.<br /><br />On a <b>strong hit</b>, you and your allies may each choose two.<br/><br/> On a <b>weak hit</b>, choose one.<br /> <ul> <li> Recuperate: Take +1 health for you and any companions.</li>  <li> Partake: Suffer -1 supply and take +1 health for you and any companions.</li>  <li> Relax: Take +1 spirit.</li>  <li> Focus: Take +1 momentum.</li>  <li> Prepare: When you break camp, add +1 if you Undertake a Journey.</li></ul>On a <b>miss</b>, you take no comfort. <i>Pay the Price</i>.'
    },
    {
      name: 'Undertake a Journey',
      source: 'Ironsworn Rulebook, page 65',
      keywords: 'adventure travel',
      text: 'When <b>you travel across hazardous or unfamiliar lands</b>, set the rank of your journey.<br />  <ul><li> Troublesome journey: 3 progress per waypoint.</li>  <li> Dangerous journey: 2 progress per waypoint.</li>  <li> Formidable journey: 1 progress per waypoint.</li>  <li> Extreme journey: 2 ticks per waypoint.</li>  <li> Epic journey: 1 tick per waypoint.</li></ul>Then, for each segment of your journey, roll +wits. If you are setting off from a community with which you share a bond, add +1 to your initial roll.<br /><br />On a <b>strong hit</b>, you reach a waypoint. If the waypoint is unknown to you, envision it (<i>Ask the Oracle</i> if unsure). Then, choose one.<br /> <ul> <li> You make good use of your resources: Mark progress.</li>  <li> You move at speed: Mark progress and take +1 momentum, but suffer -1 supply.</li></ul>On a <b>weak hit</b>, you reach a waypoint and mark progress, but suffer -1 supply.<br /><br />On a <b>miss</b>, you are waylaid by a perilous event. <i>Pay the Price</i>.'
    },
    {
      name: 'Reach Your Destination',
      source: 'Ironsworn Rulebook, page 68',
      keywords: 'adventure journey',
      text: 'When <b>your journey comes to an end</b>, roll the challenge dice and compare to your progress. Momentum is ignored on this roll.<br /><br />On a <b>strong hit</b>, the situation at your destination favors you. Choose one.<br />  <ul><li> Make another move now (not a <i>progress move</i>), and add +1.</li>  <li> Take +1 momentum.</li></ul>On a <b>weak hit</b>, you arrive but face an unforeseen hazard or complication. Envision what you find (<i>Ask the Oracle</i> if unsure).<br /><br />On a <b>miss</b>, you have gone hopelessly astray, your objective is lost to you, or you were misled about your destination. If your journey continues, clear all but one filled progress, and raise the journey’s rank by one (if not already epic).'
    }
  ],

  'Relationship Moves': [
    {
      name: 'Compel',
      source: 'Ironsworn Rulebook, page 69',
      keywords: 'relationship persuade',
      text: 'When <b>you attempt to persuade someone to do something</b>, envision your approach and roll. If you...<br /> <ul> <li> Charm, pacify, barter, or convince: Roll +heart (add +1 if you share a bond).</li>  <li> Threaten or incite: Roll +iron.</li>  <li> Lie or swindle: Roll +shadow.</li></ul>On a <b>strong hit</b>, they’ll do what you want or share what they know. Take +1 momentum. If you use this exchange to <i>Gather Information</i>, make that move now and add +1.<br /><br />On a <b>weak hit</b>, as above, but they ask something of you in return. Envision what they want (<i>Ask the Oracle</i> if unsure).<br /><br />On a <b>miss</b>, they refuse or make a demand which costs you greatly. <i>Pay the Price</i>.'
    },
    {
      name: 'Sojourn',
      source: 'Ironsworn Rulebook, page 71',
      keywords: 'relationship community assist',
      text: 'When <b>you spend time in a community seeking assistance</b>, roll +heart. If you share a bond, add +1.<br/><br/> On <b>strong hit</b>, you and your allies may each choose two from within the categories below. <br/><br/>On a <b>weak hit</b>, choose one. If you share a bond, choose one more.<br /><br />On a hit, you and your allies may each focus on one of your chosen recover actions and roll +heart again. If you share a bond, add +1. <br/><br/>On a <b>strong hit</b>, take +2 more for that action. <br/><br/>On a <b>weak hit</b>, take +1 more. <br/><br/>On a <b>miss</b>, it goes badly and you lose all benefits for that action. <br/><br /><b>Clear a Condition</b><br /> <ul> <li> Mend: Clear a wounded debility and take +1 health.</li>  <li> Hearten: Clear a shaken debility and take +1 spirit.</li>  <li> Equip: Clear an unprepared debility and take +1 supply. </li></ul><b>Recover</b><br /> <ul> <li> Recuperate: Take +2 health for yourself and any companions.</li>  <li> Consort: Take +2 spirit.</li>  <li> Provision: Take +2 supply.</li>  <li> Plan: Take +2 momentum. </li></ul><b>Provide Aid</b><br /> <ul> <li> Take a quest: Envision what this community needs, or what trouble it is facing (<i>Ask the Oracle</i> if unsure). If you chose to help, <i>Swear an Iron Vow</i> and add +1.</li></ul>On a <b>miss</b>, you find no help here. <i>Pay the Price</i>.'
    },
    {
      name: 'Draw the Circle',
      source: 'Ironsworn Rulebook, page 73',
      keywords: 'relationship challenge duel',
      text: 'When <b>you challenge someone to a formal duel, or accept a challenge</b>, roll +heart. If you share a bond with this community, add +1.<br /><br />On a <b>strong hit</b>, take +1 momentum. You may also choose up to two boasts and take +1 momentum for each.<br /><br />On a <b>weak hit</b>, you may choose one boast in exchange for +1 momentum.<br /> <ul> <li> Grant first strike: Your foe has initiative.</li>  <li> Bare yourself: Take no benefit of armor or shield; your foe’s harm is +1.</li>  <li> Hold no iron: Take no benefit of weapons; your harm is 1.</li>  <li> Bloody yourself: <i>Endure Harm</i> (1 harm).</li>  <li> To the death: One way or another, this fight must end with death.</li></ul>On a <b>miss</b>, you begin the duel at a disadvantage. Your foe has initiative. <i>Pay the Price</i>. Then, make moves to resolve the fight. If you are the victor, you may make a lawful demand, and your opponent must comply or forfeit their honor and standing. If you refuse the challenge, surrender, or are defeated, they make a demand of you.'
    },
    {
      name: 'Forge a Bond',
      source: 'Ironsworn Rulebook, page 74',
      keywords: 'relationship person community sacrifice cause',
      text: 'When <b>you spend significant time with a person or community, stand together to face hardships, or make sacrifices for their cause</b>, you can attempt to create a bond. When you do, roll +heart. If you make this move after you successfully <i>Fulfill Your Vow</i> to their benefit, you may reroll any dice.<br /><br />On a <b>strong hit</b>, make note of the bond, mark a tick on your bond progress track, and choose one.<br /> <ul> <li> Take +1 spirit.</li>  <li> Take +2 momentum.</li></ul>On a <b>weak hit</b>, they ask something more of you first. Envision what it is (<i>Ask the Oracle</i> if unsure), do it (or <i>Swear an Iron Vow</i>), and mark the bond. If you refuse or fail, <i>Pay the Price</i>.<br /><br />On a <b>miss</b>, they reject you. <i>Pay the Price</i>.'
    },
    {
      name: 'Test Your Bond',
      source: 'Ironsworn Rulebook, page 75',
      keywords: 'relationship betray conflict',
      text: 'When <b>your bond is tested through conflict, betrayal, or circumstance</b>, roll +heart.<br /><br />On a <b>strong hit</b>, this test has strengthened your bond. Choose one.<br /> <ul> <li> Take +1 spirit.</li>  <li> Take +2 momentum.</li></ul>On a <b>weak hit</b>, your bond is fragile and you must prove your loyalty. Envision what they ask of you (<i>Ask the Oracle</i> if unsure), and do it (or <i>Swear an Iron Vow</i>). If you refuse or fail, clear the bond and <i>Pay the Price</i>.<br /><br />On a <b>miss</b>, or if you have no interest in maintaining this relationship, clear the bond and <i>Pay the Price</i>.'
    },
    {
      name: 'Aid Your Ally',
      source: 'Ironsworn Rulebook, page 76',
      keywords: 'relationship benefit friend',
      text: 'When you <b>Secure an Advantage</b> in direct support of an ally, and score a hit, they (instead of you) can take the benefits of the move. If you are in combat and score a strong hit, you and your ally have initiative.'
    },
    {
      name: 'Write Your Epilogue',
      source: 'Ironsworn Rulebook, page 77',
      keywords: 'relationship retire hope',
      text: 'When <b>you retire from your life as Ironsworn</b>, envision two things: What you hope for, and what you fear. Then, roll the challenge dice and compare to your bonds. Momentum is ignored on this roll.<br /><br />On a <b>strong hit</b>, things come to pass as you hoped.<br /><br />On a <b>weak hit</b>, your life takes an unexpected turn, but not necessarily for the worse. You find yourself spending your days with someone or in a place you did not foresee. Envision it (<i>Ask the Oracle</i> if unsure).<br /><br />On a <b>miss</b>, your fears are realized. '
    }
  ],

  'Combat Moves': [
    {
      name: 'Enter the Fray',
      source: 'Ironsworn Rulebook, page 78',
      keywords: 'combat',
      text: 'When <b>you enter into combat</b>, set the rank of each of your foes.<br /> <ul> <li> Troublesome foe: 3 progress per harm; inflicts 1 harm.</li>  <li> Dangerous foe: 2 progress per harm; inflicts 2 harm.</li>  <li> Formidable foe: 1 progress per harm; inflicts 3 harm.</li>  <li> Extreme foe: 2 ticks per harm; inflicts 4 harm.</li>  <li> Epic foe: 1 tick per harm; inflicts 5 harm.</li></ul>Then, roll to determine who is in control. If you are...<br /> <ul> <li> Facing off against your foe: Roll +heart.</li>  <li> Moving into position against an unaware foe, or striking without warning: Roll +shadow.</li>  <li> Ambushed: Roll +wits.</li></ul>On a <b>strong hit</b>, take +2 momentum. You have initiative.<br /><br />On a <b>weak hit</b>, choose one.<br /> <ul> <li> Bolster your position: Take +2 momentum.</li>  <li> Prepare to act: Take initiative.</li></ul>On a <b>miss</b>, combat begins with you at a disadvantage. <i>Pay the Price</i>. Your foe has initiative.'
    },
    {
      name: 'Strike',
      source: 'Ironsworn Rulebook, page 78',
      keywords: 'combat initiative',
      text: 'When <b>you have initiative and attack in close quarters</b>, roll +iron. When you have initiative and attack at range, roll +edge.<br /><br />On a <b>strong hit</b>, inflict +1 harm. You retain initiative.<br /><br />On a <b>weak hit</b>, inflict your harm and lose initiative.<br /><br />On a <b>miss</b>, your attack fails and you must <i>Pay the Price</i>. Your foe has initiative.'
    },
    {
      name: 'Clash',
      source: 'Ironsworn Rulebook, page 80',
      keywords: 'combat initiative defend',
      text: 'When <b>your foe has initiative and you fight with them in close quarters</b>, roll +iron. When you exchange a volley at range, or shoot at an advancing foe, roll +edge.<br /><br />On a <b>strong hit</b>, inflict your harm and choose one. You have the initiative.<br /> <ul> <li> You bolster your position: Take +1 momentum.</li>  <li> You find an opening: Inflict +1 harm.</li></ul>On a <b>weak hit</b>, inflict your harm, but then <i>Pay the Price</i>. Your foe has initiative.<br /><br />On a <b>miss</b>, you are outmatched and must <i>Pay the Price</i>. Your foe has initiative.'
    },
    {
      name: 'Turn the Tide',
      source: 'Ironsworn Rulebook, page 81',
      keywords: 'combat risk',
      text: 'Once per fight, when you <b>risk it all</b>, you may steal initiative from your foe to make a move (not a <i>progress move</i>). When you do, add +1 and take +1 momentum on a hit. If you fail to score a hit on that move, you must suffer a dire outcome. <i>Pay the Price</i>.'
    },
    {
      name: 'End the Fight',
      source: 'Ironsworn Rulebook, page 82',
      keywords: 'combat finish resolve',
      text: 'When <b>you make a move to take decisive action</b>, and score a strong hit, you may resolve the outcome of this fight. If you do, roll the challenge dice and compare to your progress. Momentum is ignored on this roll.<br /><br />On a <b>strong hit</b>, this foe is no longer in the fight. They are killed, out of action, flee, or surrender as appropriate to the situation and your intent (<i>Ask the Oracle</i> if unsure).<br /><br />On a <b>weak hit</b>, as above, but you must also choose one.<br /> <ul> <li> It’s worse than you thought: <i>Endure Harm</i>.</li>  <li> You are overcome: <i>Endure Stress</i>.</li>  <li> Your victory is short-lived: A new danger or foe appears, or an existing danger worsens.</li>  <li> You suffer collateral damage: Something of value is lost or broken, or someone important must pay the cost.</li>  <li> You’ll pay for it: An objective falls out of reach.</li>  <li> Others won’t forget: You are marked for vengeance.</li></ul>On a <b>miss</b>, you have lost this fight. <i>Pay the Price</i>.'
    },
    {
      name: 'Battle',
      source: 'Ironsworn Rulebook, page 84',
      keywords: 'combat fast',
      text: 'When <b>you fight a battle, and it happens in a blur</b>, envision your objective and roll. If you primarily...<br /> <ul> <li> Fight at range, or using your speed and the terrain to your advantage: Roll +edge.</li>  <li> Fight depending on your courage, allies, or companions: Roll +heart.</li>  <li> Fight in close to overpower your opponents: Roll +iron.</li>  <li> Fight using trickery to befuddle your opponents: Roll +shadow.</li>  <li> Fight using careful tactics to outsmart your opponents: Roll +wits.</li></ul>On a <b>strong hit</b>, you achieve your objective unconditionally. Take +2 momentum.<br /><br />On a <b>weak hit</b>, you achieve your objective, but not without cost. <i>Pay the Price</i>.<br /><br />On a <b>miss</b>, you are defeated and the objective is lost to you. <i>Pay the Price</i>.'
    }
  ],

  'Suffer Moves': [
    {
      name: 'Endure Harm',
      source: 'Ironsworn Rulebook, page 91',
      keywords: 'suffer physical damage',
      text: 'When <b>you face physical damage</b>, suffer -health equal to your foe’s rank or as appropriate to the situation. If your health is 0, suffer -momentum equal to any remaining -health. Then, roll +health or +iron, whichever is higher.<br /><br />On a <b>strong hit</b>, choose one.<br /> <ul> <li> Shake it off: If your health is greater than 0, suffer -1 momentum in exchange for +1 health.</li>  <li> Embrace the pain: Take +1 momentum.</li></ul>On a <b>weak hit</b>, you press on.<br /><br />On a <b>miss</b>, also suffer -1 momentum. If you are at 0 health, you must mark wounded or maimed (if currently unmarked) or roll on the following table.<br />',
      oracles: ['Endure Harm']
    },
    {
      name: 'Face Death',
      source: 'Ironsworn Rulebook, page 93',
      keywords: 'suffer brink',
      text: 'When <b>you are brought to the brink of death</b>, and glimpse the world beyond, roll +heart.<br /><br />On a <b>strong hit</b>, death rejects you. You are cast back into the mortal world.<br /><br />On a <b>weak hit</b>, choose one.<br /> <ul> <li> You die, but not before making a noble sacrifice. Envision your final moments.</li>  <li> Death desires something of you in exchange for your life. Envision what it wants (<i>Ask the Oracle</i> if unsure), and <i>Swear an Iron Vow</i> (formidable or extreme) to complete that quest. If you fail to score a hit when you <i>Swear an Iron Vow</i>, or refuse the quest, you are dead. Otherwise, you return to the mortal world and are now cursed. You may only clear the cursed debility by completing the quest.</li></ul>On a <b>miss</b>, you are dead.'
    },
    {
      name: 'Companion Endure Harm',
      source: 'Ironsworn Rulebook, page 94',
      keywords: 'suffer damage',
      text: 'When <b>your companion faces physical damage</b>, they suffer -health equal to the amount of harm inflicted. If your companion’s health is 0, exchange any leftover -health for -momentum. Then, roll +heart or +your companion’s health, whichever is higher.<br /><br />On a <b>strong hit</b>, your companion rallies. Give them +1 health.<br /><br />On a <b>weak hit</b>, your companion is battered. If their health is 0, they cannot assist you until they gain at least +1 health.<br /><br />On a <b>miss</b>, also suffer -1 momentum. If your companion’s health is 0, they are gravely wounded and out of action. Without aid, they die in an hour or two. If you roll a miss with a 1 on your action die, and your companion’s health is 0, they are now dead. Take 1 experience for each marked ability on your companion asset, and remove it.'
    },
    {
      name: 'Endure Stress',
      source: 'Ironsworn Rulebook, page 95',
      keywords: 'suffer shock despair',
      text: 'When <b>you face mental shock or despair</b>, suffer -spirit equal to your foe’s rank or as appropriate to the situation. If your spirit is 0, suffer -momentum equal to any remaining -spirit. Then, roll +spirit or +heart, whichever is higher.<br /><br />On a <b>strong hit</b>, choose one.<br /> <ul> <li> Shake it off: If your spirit is greater than 0, suffer -1 momentum in exchange for +1 spirit</li>  <li> Embrace the darkness: Take +1 momentum</li></ul>On a <b>weak hit</b>, you press on.<br /><br />On a <b>miss</b>, also suffer -1 momentum. If you are at 0 spirit, you must mark shaken or corrupted (if currently unmarked) or roll on the following table.<br />',
      oracles: ['Endure Stress']
    },
    {
      name: 'Face Desolation',
      source: 'Ironsworn Rulebook, page 96',
      keywords: 'suffer spirit',
      text: 'When <b>you are brought to the brink of desolation</b>, roll +heart.<br /><br />On a <b>strong hit</b>, you resist and press on.<br /><br />On a <b>weak hit</b>, choose one.<br /> <ul> <li> Your spirit or sanity breaks, but not before you make a noble sacrifice. Envision your final moments.</li>  <li> You see a vision of a dreaded event coming to pass. Envision that dark future (<i>Ask the Oracle</i> if unsure), and <i>Swear an Iron Vow</i> (formidable or extreme) to prevent it. If you fail to score a hit when you <i>Swear an Iron Vow</i>, or refuse the quest, you are lost. Otherwise, you return to your senses and are now tormented. You may only clear the tormented debility by completing the quest.</li></ul>On a <b>miss</b>, you succumb to despair or horror and are lost.'
    },
    {
      name: 'Out of Supply',
      source: 'Ironsworn Rulebook, page 97',
      keywords: 'suffer exhaust',
      text: 'When <b>your supply is exhausted</b> (reduced to 0), mark unprepared. If you suffer additional -supply while unprepared, you must exchange each additional -supply for any combination of -health, -spirit or -momentum as appropriate to the circumstances.'
    },
    {
      name: 'Face a Setback',
      source: 'Ironsworn Rulebook, page 97',
      keywords: 'suffer momentum',
      text: 'When <b>your momentum is at its minimum</b> (-6), and you suffer additional -momentum, choose one.<br /> <ul> <li> Exchange each additional -momentum for any combination of -health, -spirit, or -supply as appropriate to the circumstances.</li>  <li>Envision an event or discovery (<i>Ask the Oracle</i> if unsure) which undermines your progress in a current quest, journey or fight. Then, for each additional -momentum, clear 1 unit of progress on that track per its rank (troublesome=clear 3 progress; dangerous=clear 2 progress; formidable=clear 1 progress; extreme=clear 2 ticks; epic=clear 1 tick).</li></ul>'
    }
  ],

  'Quest Moves': [
    {
      name: 'Swear an Iron Vow',
      source: 'Ironsworn Rulebook, page 98',
      keywords: 'quest',
      text: 'When <b>you swear upon iron to complete a quest</b>, write your vow and give the quest a rank. Then, roll +heart. If you make this vow to a person or community with whom you share a bond, add +1.<br /><br />On a <b>strong hit</b>, you are emboldened and it is clear what you must do next (<i>Ask the Oracle</i> if unsure). Take +2 momentum.<br /><br />On a <b>weak hit</b>, you are determined but begin your quest with more questions than answers. Take +1 momentum, and envision what you do to find a path forward.<br /><br />On a <b>miss</b>, you face a significant obstacle before you can begin your quest. Envision what stands in your way (<i>Ask the Oracle</i> if unsure), and choose one.<br /> <ul> <li> You press on: Suffer -2 momentum, and do what you must to overcome this obstacle.</li>  <li>You give up: <i>Forsake Your Vow</i>.</li></ul>'
    },
    {
      name: 'Reach a Milestone',
      source: 'Ironsworn Rulebook, page 100',
      keywords: 'quest obstacle journey milestone',
      text: 'When <b>you make significant progress in your quest by overcoming a critical obstacle, completing a perilous journey, solving a complex mystery, defeating a powerful threat, gaining vital support, or acquiring a crucial item</b>, you may mark progress.<br /> <ul> <li> Troublesome quest: Mark 3 progress.</li>  <li> Dangerous quest: Mark 2 progress.</li>  <li> Formidable quest: Mark 1 progress.</li>  <li> Extreme quest: Mark 2 ticks.</li>  <li>Epic quest: Mark 1 tick.</li></ul>'
    },
    {
      name: 'Fulfill Your Vow',
      source: 'Ironsworn Rulebook, page 101',
      keywords: 'quest conclude progress',
      text: 'When <b>you achieve what you believe to be the fulfillment of your vow</b>, roll the challenge dice and compare to your progress. Momentum is ignored on this roll.<br /><br />On a <b>strong hit</b>, your quest is complete. Mark experience (troublesome=1; dangerous=2; formidable=3; extreme=4; epic=5).<br /><br />On a <b>weak hit</b>, there is more to be done or you realize the truth of your quest. Envision what you discover (<i>Ask the Oracle</i> if unsure). Then, mark experience (troublesome=0; dangerous=1; formidable=2; extreme=3; epic=4). You may <i>Swear an Iron Vow</i> to set things right. If you do, add +1.<br /><br />On a <b>miss</b>, your quest is undone. Envision what happens (<i>Ask the Oracle</i> if unsure), and choose one.<br /> <ul> <li> You recommit: Clear all but one filled progress, and raise the quest’s rank by one (if not already epic).</li>  <li>You give up: <i>Forsake Your Vow</i>.</li></ul>'
    },
    {
      name: 'Forsake Your Vow',
      source: 'Ironsworn Rulebook, page 102',
      keywords: 'quest renounce fail',
      text: 'When <b>you renounce your quest, betray your promise, or the goal is lost to you</b>, clear the vow and <i>Endure Stress</i>. You suffer -spirit equal to the rank of your quest (troublesome=1; dangerous=2; formidable=3; extreme=4; epic=5). If the vow was made to a person or community with whom you share a bond, Test Your Bond when you next meet.'
    },
    {
      name: 'Advance',
      source: 'Ironsworn Rulebook, page 103',
      keywords: 'quest train reward',
      text: 'When <b>you focus on your skills, receive training, find inspiration, earn a reward, or gain a companion</b>, you may spend 3 experience to add a new asset, or 2 experience to upgrade an asset.'
    }
  ],

  'Fate Moves': [
    {
      name: 'Pay the Price',
      source: 'Ironsworn Rulebook, page 105',
      keywords: 'fate suffer',
      text: 'When <b>you suffer the outcome of a move</b>, choose one.<br /> <ul> <li> Make the most obvious negative outcome happen.</li>  <li> Envision two negative outcomes. Rate one as ‘likely’, and <i>Ask the Oracle</i> using the yes/no table. On a ‘yes’, make that outcome happen. Otherwise, make it the other.</li>  <li> Roll on the following table. If you have difficulty interpreting the result to fit the current situation, roll again.</li></ul>',
      oracles: ['Pay the Price']
    },
    {
      name: 'Ask the Oracle',
      source: 'Ironsworn Rulebook, page 107',
      keywords: 'fate question discover',
      text: 'When <b>you seek to resolve questions, discover details in the world, determine how other characters respond, or trigger encounters or events</b>, you may...<br /> <ul> <li> Draw a conclusion: Decide the answer based on the most interesting and obvious result.</li>  <li> Ask a yes/no question: Decide the odds of a ‘yes’, and roll on the table below to check the answer.</li>  <li> Pick two: Envision two options. Rate one as ‘likely’, and roll on the table below to see if it is true. If not, it is the other.</li>  <li> Spark an idea: Brainstorm or use a random prompt.</li></ul><table><tr><th>Odds</th><th>The answer is ‘yes’ if you roll...</th></tr><tr><td>Almost Certain</td><td>11 or greater</td></tr><tr><td>Likely</td><td>26 or greater</td></tr><tr><td>50/50</td><td>51 or greater</td></tr><tr><td>Unlikely</td><td>76 or greater</td></tr><tr><td>Small Chance</td><td>91 or greater</td></tr></table>'
    }
  ],

  'Delve Moves': [
    {
      name: 'Discover a Site',
      source: 'Ironsworn: Delve, page 19',
      keywords: 'delve enter',
      text: 'When <b>you resolve to enter a perilous site in pursuit of an objective</b>, choose the theme and domain which best represent its nature (<i>Ask the Oracle</i> if unsure), and give it a rank.<br /> <ul> <li> Troublesome site: 3 progress per area.</li>  <li> Dangerous site: 2 progress per area.</li>  <li> Formidable site: 1 progress per area.</li>  <li> Extreme site: 2 ticks per area.</li>  <li> Epic site: 1 tick per area.</li></ul>If you are returning to a previously explored site, roll both challenge dice, take the lowest value, and clear that number of progress boxes.<br />Then, <b>Delve the Depths</b> to explore this place.'
    },
    {
      name: 'Delve the Depths',
      source: 'Ironsworn: Delve, page 21',
      keywords: 'delve traverse',
      text: 'When you <b>traverse an area within a perilous site</b>, envision your surroundings (<i>Ask the Oracle</i> if unsure). Then, consider your approach. If you navigate this area...<br /> <ul> <li> With haste: Roll +edge.</li>  <li> With stealth or trickery: Roll +shadow.</li>  <li> With observation, intuition, or expertise: Roll +wits.</li></ul>On a <b>strong hit</b>, you delve deeper. Mark progress and <i>Find an Opportunity</i>. On a <b>weak hit</b>, roll on the following table according to your stat.<br /><br />On a <b>miss</b>, <i>Reveal a Danger</i>.',
      oracles: ['Delve the Depths - Edge', 'Delve the Depths - Shadow', 'Delve the Depths - Wits']
    },
    {
      name: 'Find an Opportunity',
      source: 'Ironsworn: Delve, page 30',
      keywords: 'delve feature help',
      text: 'When <b>you encounter a helpful situation or feature within a site</b>, roll on the following table. If you are making this move as a result of a strong hit on <i>Delve the Depths</i>, you may pick or envision an opportunity instead of rolling.<br />Then, choose one.<br /> <ul> <li> Gain insight or prepare: Take +1 momentum.</li>  <li> Take action now: You and any allies may make a move (not a progress move) which directly leverages the opportunity. When you do, add +1 and take +1 momentum on a hit.</li></ul>',
      oracles: ['Find an Opportunity']
    },
    {
      name: 'Reveal a Danger',
      source: 'Ironsworn: Delve, page 34',
      keywords: 'delve risk',
      text: 'When <b>you encounter a risky situation within a site</b>, envision the danger or roll on the following table.<br />',
      oracles: ['Reveal a Danger']
    },
    {
      name: 'Check Your Gear',
      source: 'Ironsworn: Delve, page 38',
      keywords: 'delve item',
      text: 'When <b>you check to see if you have a specific helpful item</b>, and you have at least +1 supply, roll +supply.<br /><br />On a <b>strong hit</b>, you have it. Take +1 momentum.<br /><br />On a <b>weak hit</b>, you have it, but your resources are diminished. Take +1 momentum and suffer -1 supply.<br /><br />On a <b>miss</b>, you don’t have it and the situation grows more perilous. <i>Pay the Price</i>.'
    },
    {
      name: 'Locate Your Objective',
      source: 'Ironsworn: Delve, page 40',
      keywords: 'delve end explore',
      text: 'When <b>your exploration of a site comes to an end</b>, roll the challenge dice and compare to your progress. Momentum is ignored on this roll.<br /><br />On a <b>strong hit</b>, you locate your objective and the situation favors you. Choose one.<br /> <ul> <li> Make another move now (not a progress move), and add +1.</li>  <li> Take +1 momentum.</li></ul>On a <b>weak hit</b>, you locate your objective but face an unforeseen hazard or complication. Envision what you find (<b>Ask the Oracle</b> if unsure).<br /><br />On a <b>miss</b>, your objective falls out of reach, you have been misled about the nature of your objective, or you discover that this site holds unexpected depths. If you continue your exploration, clear all but one filled progress and raise the site’s rank by one (if not already epic).'
    },
    {
      name: 'Escape the Depths',
      source: 'Ironsworn: Delve, page 42',
      keywords: 'delve flee withdraw',
      text: 'When <b>you flee or withdraw from a site</b>, consider the situation and your approach. If you...<br /> <ul> <li> Find the fastest way out: Roll +edge.</li>  <li> Steel yourself against the horrors of this place: Roll +heart.</li>  <li> Fight your way out: Roll +iron.</li>  <li> Retrace your steps or locate an alternate path: Roll +wits.</li>  <li> Keep out of sight: Roll +shadow.</li></ul>On a <b>strong hit</b>, you make your way safely out of the site. Take +1 momentum. <br />On a <b>weak hit</b>, you find your way out, but this place exacts its price. Choose one.<br /> <ul> <li> You are weary or wounded: <i>Endure Harm</i>.</li>  <li> The experience leaves you shaken: <i>Endure Stress</i>.</li>  <li> You are delayed, and it costs you.</li>  <li> You leave behind something important.</li>  <li> You face a new complication as you emerge from the depths.</li>  <li> A denizen plots their revenge.</li></ul>On a <b>miss</b>, a dire threat or imposing obstacle stands in your way. <i>Reveal a Danger</i>. If you survive, you may make your escape.'
    }
  ],

  'Optional Delve Moves': [
    {
      name: 'Reveal a Danger (alternate version)',
      source: 'Ironsworn: Delve, page 68',
      keywords: 'delve risk',
      text: 'When <b>you encounter a risky situation within a site</b>, envision the danger or roll on the following table. <br />',
      oracles: ['Reveal a Danger Alternate']
    },
    {
      name: 'Mark Your Failure',
      source: 'Ironsworn: Delve, page 58',
      keywords: 'delve miss',
      text: 'When <b>you make a move and score a miss</b>, mark a tick on your failure track. If <b>you score a miss when making a progress move</b>, mark two ticks.'
    },
    {
      name: 'Learn From Your Failures',
      source: 'Ironsworn: Delve, page 59',
      keywords: 'delve reflect hardship',
      text: 'When <b>you spend time reflecting on your hardships and missteps</b>, and your failure track is +6 or greater, roll your challenge dice and compare to your progress. Momentum is ignored on this roll.<br /><br />On a <b>strong hit</b>, you commit to making a dramatic change. Take 3 experience and clear all progress. Then, choose one.<br /> <ul> <li> Adjust your approach: Discard a single asset, and take 2 experience for each marked ability.</li>  <li> Make an oath: <i>Swear an Iron Vow</i>, and reroll any dice.</li>  <li> Ready your next steps: Take +3 momentum.</li></ul>On a <b>weak hit</b>, you learn from your mistakes. Take 2 experience and clear all progress.<br /><br />On a <b>miss</b>, you’ve learned the wrong lessons. Take 1 experience and clear all progress. Then, envision how you set off on an ill-fated path.'
    },
    {
      name: 'Advance a Threat',
      source: 'Ironsworn: Delve, page 154',
      keywords: 'delve',
      text: 'When <b>you give ground to a threat through inaction, failure, or delay</b>, roll on the table below and envision how the change manifests in your world (<i>Ask the Oracle</i> if unsure). <br />',
      oracles: ['Advance a Threat']
    },
    {
      name: 'Take a Hiatus',
      source: 'Ironsworn: Delve, page 158',
      keywords: 'delve recover safe',
      text: 'When <b>you spend an extended time recovering in a safe place while a threat is active</b>, do any of the following.<br /> <ul> <li> Clear any marked conditions.</li>  <li> Set your health, spirit, supply, and companion health to their maximum values.</li>  <li> Set your momentum to its reset value.</li></ul>Then, for each active threat, <i>Advance a Threat</i>.'
    },
    {
      name: 'Wield a Rarity',
      source: 'Ironsworn: Delve, page 176',
      keywords: 'delve aid augment',
      text: 'When <i>you make a move aided by an augmented asset</i>, roll your rarity die in place of your action die.<br /><br />On <i>any result</i> with 6 showing on the rarity die, the power of the rarity manifests in a dramatic and obvious way. You score an automatic <b>strong hit</b> and take +1 momentum.<br /><br />On a <i>hit</i> with 5 showing on the rarity die, the power of the rarity manifests in a subtle way. Take +1 momentum.<br /><br />On a <i>miss</i> with 1 showing on the rarity die, the rarity’s power fails or works against you.'
    }
  ]
}
