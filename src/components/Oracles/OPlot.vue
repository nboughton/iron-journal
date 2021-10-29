<template>
  <div class="card-bg q-pa-xs">
    <o-input label="Action" v-model="data.action" @roll="roll.Action" />
    <o-input label="Theme" v-model="data.theme" @roll="roll.Theme" />
    <o-input label="Combat Action" v-model="data.combatAction" @roll="roll.Combat" />
    <o-input label="Major Plot Twist" v-model="data.majorPlotTwist" @roll="roll.Twist" />
    <o-input label="Mystic Backlash" v-model="data.mysticBacklash" @roll="roll.Backlash" />
    <o-input label="Challenge Rank" v-model="data.challengeRank" @roll="roll.Rank" />
    <o-btns clear @clear="clear" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { oracleRoll } from 'src/lib/roll';
import { Plot } from 'src/lib/oracles/plot';

import OInput from './OInput.vue';
import OBtns from './OBtns.vue';

export default defineComponent({
  name: 'OPlot',
  components: { OInput, OBtns },
  setup() {
    const data = ref({
      action: '',
      theme: '',
      combatAction: '',
      majorPlotTwist: '',
      mysticBacklash: '',
      challengeRank: '',
    });

    const roll = {
      Action: () => (data.value.action = oracleRoll(Plot.Action)),
      Theme: () => (data.value.theme = oracleRoll(Plot.Theme)),
      Combat: () => (data.value.combatAction = oracleRoll(Plot.CombatAction)),
      Twist: () => (data.value.majorPlotTwist = oracleRoll(Plot.MajorPlotTwist)),
      Backlash: () => (data.value.mysticBacklash = oracleRoll(Plot.MysticBacklash)),
      Rank: () => (data.value.challengeRank = oracleRoll(Plot.ChallengeRank)),
    };

    const clear = () => {
      data.value = {
        action: '',
        theme: '',
        combatAction: '',
        majorPlotTwist: '',
        mysticBacklash: '',
        challengeRank: '',
      };
    };

    return {
      data,
      roll,
      clear,
    };
  },
});
</script>
