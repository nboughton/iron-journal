<template>
  <div>
    <q-expansion-item
      :icon="`img:${icon.location(data.type)}`"
      header-class="place-header sf-header rounded-borders q-mb-sm"
      :label="data.name"
      :caption="`Location: ${data.type}`"
    >
      <controls v-if="controls" @move="$emit('move', $event)" />

      <div class="row q-gutter-sm q-mb-sm no-wrap" v-if="$q.screen.gt.xs">
        <i-input class="col" label="Name" v-model="data.name" />
        <q-select
          class="col"
          label="Type"
          v-model="data.type"
          :options="locationOpts"
          standout="bg-blue-grey text-white"
          :input-style="{ color: '#ECEFF4' }"
          dense
        />
        <i-input class="col" label="Region" v-model="data.region" />
        <q-btn v-if="config.data.edit" icon="delete" flat dense @click="$emit('delete')" />
      </div>
      <div v-else>
        <div class="row q-gutter-sm q-mb-sm no-wrap">
          <i-input class="col" label="Name" v-model="data.name" />
          <q-btn v-if="config.data.edit" icon="delete" flat dense @click="$emit('delete')" />
        </div>

        <div class="row q-gutter-sm q-mb-sm">
          <i-input class="col" label="Region" v-model="data.region" />
          <i-input class="col" label="Type" v-model="data.type" />
        </div>
      </div>

      <div class="row q-gutter-sm q-mb-sm">
        <i-input class="col" label="Descriptor" v-model="data.descriptor" />
        <i-input class="col" label="Trouble" v-model="data.trouble" />
      </div>

      <i-input label="Notes" v-model="data.notes" autogrow />
    </q-expansion-item>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';

import { ILocation } from '../models';

import { useConfig } from 'src/store/config';

import { icon } from 'src/lib/icons';
import { oracleOpts } from 'src/lib/util';
import { Location } from 'src/lib/oracles/location';

import IInput from 'src/components/IInput.vue';
import Controls from 'src/components/World/Controls.vue';

export default defineComponent({
  name: 'WLocation',
  components: { IInput, Controls },
  props: {
    modelValue: {
      type: Object as PropType<ILocation>,
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
    const locationOpts = /(coast|island)/i.test(data.value.region)
      ? oracleOpts(Location.CoastalWatersLocation)
      : oracleOpts(Location.Location);

    return {
      data,
      icon,
      config,
      locationOpts,
    };
  },
});
</script>

<style lang="sass">
.place-header
  background-color: $place
  text-shadow: 1px 1px 1px $dark-page
</style>
