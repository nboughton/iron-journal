<template>
  <div class="card-bg q-pa-xs">
    <div class="row items-center">
      <q-select class="col-grow" label="Category" v-model="data.categories" :options="opts" multiple dense />
      <q-btn class="col-shrink" icon="mdi-dice-6" flat dense @click="rollCategory" />
    </div>
    <o-input
      v-for="(cat, index) in data.categories"
      :key="index"
      :label="cat"
      v-model="data.results[cat]"
      @roll="data.results[cat] = oracleRoll(Threat[cat])"
    />
    <o-btns clear @clear="clear" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import OInput from './OInput.vue';
import OBtns from './OBtns.vue';
import { oracleOpts } from 'src/lib/util';
import { Threat } from 'src/lib/oracles/delve/threat';
import { oracleRoll } from 'src/lib/roll';

export default defineComponent({
  name: 'ODelveThreat',
  components: { OInput, OBtns },
  setup() {
    const data = ref({
      categories: <string[]>[],
      results: <{ [index: string]: string }>{},
    });

    const rollCategory = () => (data.value.categories = oracleRoll(Threat.Category).split(','));
    const opts = oracleOpts(Threat.Category);
    opts.pop();

    const clear = () => (data.value.results = {});

    return {
      data,
      opts,
      oracleRoll,
      Threat,
      rollCategory,
      clear,
    };
  },
});
</script>
