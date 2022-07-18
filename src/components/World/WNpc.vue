<template>
  <div>
    <q-expansion-item
      :icon="`img:${icon.person()}`"
      header-class="person-header rounded-borders q-mb-sm"
      :label="`${data.name} (${data.pronouns})`"
      caption="Person"
    >
      <controls v-if="controls" @move="$emit('move', $event)" />
      <div class="row q-gutter-sm q-mb-sm no-wrap" v-if="$q.screen.gt.xs">
        <i-input class="col" label="Name" v-model="data.name" />
        <i-input class="col" label="Pronouns" v-model="data.pronouns" />
        <i-input class="col" label="Kin" v-model="data.kin" />
        <q-checkbox class="col-shrink" dense label="Bond" v-model="data.bond" />
        <q-btn v-if="config.data.edit" icon="delete" flat dense @click="$emit('delete')" />
      </div>
      <div v-else>
        <div class="row q-gutter-sm q-mb-sm no-wrap">
          <i-input class="col" label="Name" v-model="data.name" />
          <q-checkbox class="col-shrink" dense label="Bond" v-model="data.bond" />
          <q-btn v-if="config.data.edit" icon="delete" flat dense @click="$emit('delete')" />
        </div>

        <div class="row q-gutter-sm q-mb-sm">
          <i-input class="col" label="Pronouns" v-model="data.pronouns" />
          <i-input class="col" label="Kin" v-model="data.kin" />
        </div>
      </div>

      <div class="row q-gutter-sm q-mb-sm">
        <i-input class="col" label="Role" v-model="data.role" />
        <i-input class="col" label="Descriptor" v-model="data.descriptor" />
        <i-input class="col" label="Disposition" v-model="data.disposition" />
      </div>

      <div class="row q-gutter-sm q-mb-sm">
        <i-input class="col" label="Goal" v-model="data.goal" />
        <i-input class="col" label="Activity" v-model="data.activity" />
      </div>

      <i-input class="q-mb-sm" label="Notes" v-model="data.notes" autogrow />

      <progress-track class="q-mb-sm" v-model="data.track" />
    </q-expansion-item>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';

import { INPC } from '../models';

import { useConfig } from 'src/store/config';

import { icon } from 'src/lib/icons';

import ProgressTrack from '../Tracks/ProgressTrack.vue';
import Controls from './Controls.vue';
import IInput from '../Widgets/IInput.vue';

export default defineComponent({
  components: { IInput, ProgressTrack, Controls },
  name: 'SNPC',
  props: {
    modelValue: {
      type: Object as PropType<INPC>,
      required: true,
    },
    controls: {
      type: Boolean,
    },
  },
  emits: ['update:modelValue', 'delete', 'move'],
  setup(props, { emit }) {
    const data = ref(props.modelValue);
    watch(
      () => props.modelValue,
      () => (data.value = props.modelValue),
      { deep: true }
    );
    watch(
      () => data.value,
      () => emit('update:modelValue', data.value),
      { deep: true }
    );

    const config = useConfig();

    return {
      data,
      config,
      icon,
    };
  },
});
</script>

<style lang="sass">
.person-header
  background-color: $npc
  text-shadow: 1px 1px 1px $dark-page
</style>
