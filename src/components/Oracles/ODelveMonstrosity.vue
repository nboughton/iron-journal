<template>
  <o-input label="Size" v-model="data.size" @roll="roll.Size" />
  <o-input label="Primary Form" v-model="data.form" @roll="roll.Form" />
  <o-input label="Characteristics" v-model="data.characteristics" @roll="roll.Char" />
  <o-input label="Abilities" v-model="data.abilities" @roll="roll.Abl" />
  <o-btns clear @clear="clear" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { oracleRoll } from 'src/lib/roll';
import { Monstrosity } from 'src/lib/oracles/delve/monstrosity';

import OInput from './OInput.vue';
import OBtns from './OBtns.vue';

export default defineComponent({
  name: 'ODelveMonstrosity',
  components: { OInput, OBtns },
  setup() {
    const data = ref({
      size: '',
      form: '',
      characteristics: '',
      abilities: '',
    });

    const roll = {
      Size: () => (data.value.size = oracleRoll(Monstrosity.Size)),
      Form: () => (data.value.form = oracleRoll(Monstrosity.PrimaryForm)),
      Char: () => (data.value.characteristics = oracleRoll(Monstrosity.Characteristics)),
      Abl: () => (data.value.abilities = oracleRoll(Monstrosity.Abilities)),
    };

    const clear = () =>
      (data.value = {
        size: '',
        form: '',
        characteristics: '',
        abilities: '',
      });

    return {
      data,
      roll,
      clear,
    };
  },
});
</script>
