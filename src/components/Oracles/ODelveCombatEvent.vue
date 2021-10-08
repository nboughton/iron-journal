<template>
  <o-input label="Method" v-model="data.method" @roll="roll.Method" />
  <o-input label="Target" v-model="data.target" @roll="roll.Target" />
  <o-btns clear @clear="clear" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { oracleRoll } from 'src/lib/roll';
import { CombatEvent } from 'src/lib/oracles/delve/combat_event';

import OInput from './OInput.vue';
import OBtns from './OBtns.vue';

export default defineComponent({
  name: 'ODelveCombatEvent',
  components: { OInput, OBtns },
  setup() {
    const data = ref({
      method: '',
      target: '',
    });

    const roll = {
      Method: () => (data.value.method = oracleRoll(CombatEvent.Method)),
      Target: () => (data.value.target = oracleRoll(CombatEvent.Target)),
    };

    const clear = () =>
      (data.value = {
        method: '',
        target: '',
      });

    return {
      data,
      roll,
      clear,
    };
  },
});
</script>
