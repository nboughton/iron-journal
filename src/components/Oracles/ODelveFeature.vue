<template>
  <div class="card-bg q-pa-xs">
    <o-input label="Aspect" v-model="data.aspect" @roll="roll.Aspect" />
    <o-input label="Focus" v-model="data.focus" @roll="roll.Focus" />
    <o-btns clear @clear="clear" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { oracleRoll } from 'src/lib/roll';
import { Feature } from 'src/lib/oracles/delve/feature';

import OInput from './OInput.vue';
import OBtns from './OBtns.vue';

export default defineComponent({
  name: 'ODelveFeature',
  components: { OInput, OBtns },
  setup() {
    const data = ref({
      aspect: '',
      focus: '',
    });

    const roll = {
      Aspect: () => (data.value.aspect = oracleRoll(Feature.Aspect)),
      Focus: () => (data.value.focus = oracleRoll(Feature.Focus)),
    };

    const clear = () =>
      (data.value = {
        aspect: '',
        focus: '',
      });

    return {
      data,
      roll,
      clear,
    };
  },
});
</script>
