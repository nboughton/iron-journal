<template>
  <div class="card-bg q-pa-xs">
    <o-input label="Event" v-model="data.event" @roll="roll.Event" />
    <o-input label="Component" v-model="data.component" @roll="roll.Component" />
    <o-btns clear @clear="clear" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { oracleRoll } from 'src/lib/roll';
import { Trap } from 'src/lib/oracles/delve/trap';

import OInput from './OInput.vue';
import OBtns from './OBtns.vue';

export default defineComponent({
  name: 'ODelveFeature',
  components: { OInput, OBtns },
  setup() {
    const data = ref({
      event: '',
      component: '',
    });

    const roll = {
      Event: () => (data.value.event = oracleRoll(Trap.Event)),
      Component: () => (data.value.component = oracleRoll(Trap.Component)),
    };

    const clear = () =>
      (data.value = {
        event: '',
        component: '',
      });

    return {
      data,
      roll,
      clear,
    };
  },
});
</script>
