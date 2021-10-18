<template>
  <q-expansion-item
    :icon="`img:${icon.dungeon()}`"
    header-class="site-header rounded-borders q-mb-sm"
    :label="data.name"
    caption="Delve Site"
  >
    <div class="row">
      <q-input class="col-grow" label="Name" dense v-model="data.name" debounce="750">
        <template v-slot:append v-if="$q.screen.lt.sm">
          <q-btn v-if="config.data.edit" class="col-shrink" icon="delete" dense flat @click="removeSite" />
        </template>
      </q-input>
      <q-input class="col-grow" label="Objective" dense v-model="data.objective" debounce="750">
        <template v-slot:append v-if="$q.screen.gt.xs">
          <q-btn v-if="config.data.edit" class="col-shrink" icon="delete" dense flat @click="removeSite" />
        </template>
      </q-input>
    </div>

    <div class="row">
      <q-input class="col-grow" label="Theme" dense v-model="data.theme" debounce="750" />
      <q-input class="col-grow" label="Domain" dense v-model="data.domain" debounce="750" />
    </div>

    <div class="row items-center justify-center q-pt-md">
      <div class="col-12 text-center text-h5">Progress</div>
      <progress-track class="col-12" v-model="data.track" :showName="false" :showMenaceBtn="false" />
    </div>

    <div class="text-center text-h5 q-pt-md">Denizens</div>
    <div class="row">
      <i-input class="col-xs-6 col-sm-3" label="01-27 Very Common" square v-model="data.denizens.veryCommon" />
      <i-input class="col-xs-6 col-sm-3" label="28-41 Common" square v-model="data.denizens.common1" />
      <i-input class="col-xs-6 col-sm-3" label="42-55 Common" square v-model="data.denizens.common2" />
      <i-input class="col-xs-6 col-sm-3" label="56-69 Common" square v-model="data.denizens.common3" />

      <i-input class="col-xs-6 col-sm-3" label="70-75 Uncommon" square v-model="data.denizens.uncommon1" />
      <i-input class="col-xs-6 col-sm-3" label="76-81 Uncommon" square v-model="data.denizens.uncommon2" />
      <i-input class="col-xs-6 col-sm-3" label="82-87 Uncommon" square v-model="data.denizens.uncommon3" />
      <i-input class="col-xs-6 col-sm-3" label="88-93 Uncommon" square v-model="data.denizens.uncommon4" />

      <i-input class="col-xs-6 col-sm-3" label="94-95 Rare" square v-model="data.denizens.rare1" />
      <i-input class="col-xs-6 col-sm-3" label="96-97 Rare" square v-model="data.denizens.rare2" />
      <i-input class="col-xs-6 col-sm-3" label="98-99 Rare" square v-model="data.denizens.rare3" />
      <i-input class="col-xs-6 col-sm-3" label="100 Unforeseen" square v-model="data.denizens.unforeseen" />
    </div>

    <div class="row items-center justify-center q-gutter-sm q-pt-md">
      <div class="col-xs-4 col-sm text-caption">
        When the outcome of a move prompts an encounter with a denizen, you may:
      </div>
      <div class="col-shrink text-center text-bold"><q-icon name="arrow_right" size="sm" /></div>
      <div class="col-xs-4 col-sm text-caption">
        Choose or introduce a denizen based on the situation and what you know of this place.
      </div>
      <div class="col-shrink text-center text-bold">or</div>
      <div class="col-xs-4 col-sm text-caption">
        Roll on the matrix to generate a random encounter. If the field is blank, add a new denizen.
      </div>
      <div class="col-shrink text-center text-bold">or</div>
      <div class="col-xs-4 col-sm text-caption">
        Identify a denizen as ‘likely’ to appear, and Ask the Oracle. If the answer is “no,” roll on the matrix.
      </div>
      <div class="col-shrink text-center text-bold">or</div>
      <div class="col-xs-10 col-sm text-caption">
        Pick two denizens, rate one as ‘likely’, and Ask the Oracle to determine which you encounter.
      </div>
    </div>

    <q-input class="row q-pt-md" label="Notes" dense v-model="data.notes" debounce="750" />
  </q-expansion-item>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';

import { ISite } from '../models';

import { useConfig } from 'src/store/config';

import { icon } from 'src/lib/icons';

import ProgressTrack from 'src/components/Tracks/ProgressTrack.vue';
import IInput from 'src/components/IInput.vue';

export default defineComponent({
  name: 'WSite',
  components: { ProgressTrack, IInput },
  props: {
    modelValue: {
      type: Object as PropType<ISite>,
      required: true,
    },
  },
  emits: ['update:modelValue', 'delete'],
  setup(props, { emit }) {
    const data = ref(props.modelValue);
    watch(
      () => props.modelValue,
      () => (data.value = props.modelValue),
      { deep: true }
    );
    const updateValue = () => emit('update:modelValue', data.value);

    const removeSite = () => emit('delete');

    const config = useConfig();

    return {
      data,
      updateValue,
      removeSite,
      icon,

      config,
    };
  },
});
</script>

<style lang="sass">
.site-header
  background-color: $site
  text-shadow: 1px 1px 1px $dark-page
</style>
